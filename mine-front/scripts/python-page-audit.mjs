import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');

const functionsPath = path.join(repoRoot, 'functions.php');
const pythonDir = path.join(repoRoot, 'template-parts/python');
const blocksDir = path.join(repoRoot, 'mine-front/src/blocks');

const functionsSource = fs.readFileSync(functionsPath, 'utf8');

const pythonFiles = new Map(
	fs
		.readdirSync(pythonDir)
		.filter((file) => file.endsWith('.php'))
		.map((file) => [file.replace(/\.php$/u, ''), file])
);

const pageBlockDirs = fs
	.readdirSync(blocksDir, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)
	.filter((name) => name.startsWith('page-'))
	.filter((name) => !name.endsWith('-bento'))
	.filter((name) => !name.endsWith('-body'))
	.filter((name) => !name.startsWith('page-pattern-'));

const pageBlocks = new Set(pageBlockDirs.map((name) => name.replace(/^page-/u, '')));


const legacySourceHints = new Map([
	[ 'client-bank-online', 'front/src/client-bank-blocks' ],
	[ 'contacts', 'front/src/contacts-blocks' ],
	[ 'currency-control', 'front/src/currency-control-blocks' ],
	[ 'info-bank-page', 'front/src/info-bank-blocks' ],
	[ 'requisites_bank', 'front/src/requisites-bank-blocks' ],
	[ 'tariffs', 'front/src/tariffs-blocks' ],
]);


const sbAlphaRoutesBody = functionsSource.match(
	/function\s+sb_alpha_routes\(\):\s*array\s*\{\s*return\s*\[(.*?)\];\s*\}/s
)?.[1] ?? '';

const sbAlphaPythonKeys = Array.from(
	new Set(
		Array.from(
			sbAlphaRoutesBody.matchAll(
				/'([^']+)'\s*=>\s*(?:sb_alpha_wp_page_url\([^)]*sb_python_route_url\('([^']+)'\)[^)]*\)|sb_python_route_url\('([^']+)'\))/g
			)
		).map((match) => match[1])
	)
);

const findLegacySource = (key, slug) => {
	if (legacySourceHints.has(key)) {
		return legacySourceHints.get(key);
	}

	const pythonTemplate = pythonFiles.get(key);
	if (pythonTemplate) {
		return `template-parts/python/${pythonTemplate}`;
	}

	const pagePhpCandidates = [
		`page-${slug}.php`,
		`page-${key}.php`,
		`page-${key.replace(/_/g, '-')}.php`,
	];

	for (const pagePhp of pagePhpCandidates) {
		if (fs.existsSync(path.join(repoRoot, pagePhp))) {
			return pagePhp;
		}
	}

	return 'source not auto-detected';
};

const bodyEditPath = (slug) => path.join(blocksDir, `page-${slug}-body/edit.js`);

const hasPlaceholderContent = (slug) => {
	const editPath = bodyEditPath(slug);
	if (!fs.existsSync(editPath)) {
		return false;
	}

	const editSource = fs.readFileSync(editPath, 'utf8');

	return /Редактируемый контент страницы|Заполните актуальными блоками/u.test(editSource);
};

const sbAlphaCoverage = sbAlphaPythonKeys
	.map((key) => {
		const slug = key.replace(/_/g, '-');
		const hasMineFrontPage = pageBlocks.has(slug);

		return {
			key,
			pageSlug: slug,
			hasPythonTemplate: pythonFiles.has(key),
			templatePhp: pythonFiles.get(key) ?? null,
			hasMineFrontPage,
			legacySource: findLegacySource(key, slug),
			hasPlaceholder: hasMineFrontPage ? hasPlaceholderContent(slug) : false,
		};
	})
	.sort((a, b) => a.key.localeCompare(b.key));

const implemented = sbAlphaCoverage.filter((row) => row.hasMineFrontPage);
const missing = sbAlphaCoverage.filter((row) => !row.hasMineFrontPage);
const needsOriginals = sbAlphaCoverage.filter((row) => row.hasMineFrontPage && row.hasPlaceholder);

const output = [
	'# Stage 4/5 migration status (sb_alpha_routes → mine-front)',
	'',
	`Total sb_alpha_routes keys linked to legacy python routes: **${sbAlphaCoverage.length}**.`,
	`Implemented in mine-front page blocks: **${implemented.length}**.`,
	`Missing in mine-front page blocks: **${missing.length}**.`,
	`Implemented but still placeholder-first (needs legacy originals): **${needsOriginals.length}**.`,
	'',
	'> Duplicates are ignored by design (keys are deduplicated via Set).',
	'',
	'## Coverage table',
	'',
	'| Route key | Has python template | Mine-front page | Placeholder-only body | Legacy source candidate |',
	'| --- | :---: | :---: | :---: | --- |',
	...sbAlphaCoverage.map(
		(row) =>
			`| ${row.key} | ${row.hasPythonTemplate ? '✅' : '—'} | ${
				row.hasMineFrontPage ? '✅' : '❌'
			} | ${row.hasPlaceholder ? '⚠️' : '✅'} | ${row.legacySource} |`
	),
	'',
	'## Missing mine-front pages',
	'',
	...(missing.length
		? missing.map((row) => `- '${row.key}' → ${row.legacySource}`)
		: [ '- Нет пропущенных ключей.' ]),
	'',
	'## Needs legacy originals (replace placeholder-only body templates)',
	'',
	...(needsOriginals.length
		? needsOriginals.map(
				(row) =>
					`- '${row.key}' (` +
					`mine-front/src/blocks/page-${row.pageSlug}-body/edit.js` +
					`) ← использовать оригинал из ${row.legacySource}`
			)
		: [ '- Нет блоков с placeholder-only body.' ]),
];

const reportPath = path.join(repoRoot, 'readme/python-page-migration-audit.md');
fs.writeFileSync(reportPath, `${output.join('\n')}\n`, 'utf8');

console.log(`Saved report: ${path.relative(repoRoot, reportPath)}`);
console.log(
	`Summary: total=${sbAlphaCoverage.length}, implemented=${implemented.length}, missing=${missing.length}, needsOriginals=${needsOriginals.length}`
);
