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

const pageBlocks = new Set(
	fs
		.readdirSync(blocksDir, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
		.filter((name) => name.startsWith('page-'))
		.filter((name) => !name.endsWith('-bento'))
		.filter((name) => !name.endsWith('-body'))
		.filter((name) => !name.startsWith('page-pattern-'))
		.map((name) => name.replace(/^page-/u, ''))
);

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

const sbAlphaCoverage = sbAlphaPythonKeys
	.map((key) => ({
		key,
		pageSlug: key.replace(/_/g, '-'),
		hasPythonTemplate: pythonFiles.has(key),
		templatePhp: pythonFiles.get(key) ?? null,
		hasMineFrontPage: pageBlocks.has(key.replace(/_/g, '-')),
	}))
	.sort((a, b) => a.key.localeCompare(b.key));

const implemented = sbAlphaCoverage.filter((row) => row.hasMineFrontPage);
const missing = sbAlphaCoverage.filter((row) => !row.hasMineFrontPage);

const output = [
	'# Stage 4 theoretical status (sb_alpha_routes → mine-front)',
	'',
	`Total sb_alpha_routes keys linked to legacy python routes: **${sbAlphaCoverage.length}**.`,
	`Implemented in mine-front page blocks: **${implemented.length}**.`,
	`Missing in mine-front page blocks: **${missing.length}**.`,
	'',
	'> Duplicates are ignored by design (keys are deduplicated via Set).',
	'',
	'## Stage 4 coverage table',
	'',
	'| Route key | Has python template | Mine-front page |',
	'| --- | :---: | :---: |',
	...sbAlphaCoverage.map(
		(row) =>
			`| ${row.key} | ${row.hasPythonTemplate ? '✅' : '—'} | ${
				row.hasMineFrontPage ? '✅' : '❌'
			} |`
	),
	'',
	'## Stage 4 missing list',
	'',
	...missing.map((row) => {
		const templatePart = row.templatePhp
			? `template-parts/python/${row.templatePhp}`
			: 'no python template file';

		return `- '${row.key}' → ${templatePart}`;
	}),
];

const reportPath = path.join(repoRoot, 'readme/python-page-migration-audit.md');
fs.writeFileSync(reportPath, `${output.join('\n')}\n`, 'utf8');

console.log(`Saved report: ${path.relative(repoRoot, reportPath)}`);
