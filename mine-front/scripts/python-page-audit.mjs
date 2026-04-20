import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');

const routesPath = path.join(repoRoot, 'inc/python-routes.php');
const pythonDir = path.join(repoRoot, 'template-parts/python');
const blocksDir = path.join(repoRoot, 'mine-front/src/blocks');

const routeSource = fs.readFileSync(routesPath, 'utf8');

const routeEntries = [];
const routeRegex = /'([^']+)'\s*=>\s*\[(.*?)\n\s*\],/gs;

for (const match of routeSource.matchAll(routeRegex)) {
	const [, key, rawBody] = match;
	const mode = rawBody.match(/'mode'\s*=>\s*'([^']+)'/)?.[1] ?? '';
	const routePath = rawBody.match(/'path'\s*=>\s*'([^']+)'/)?.[1] ?? '';
	const templateFile = rawBody.match(/'template_file'\s*=>\s*'([^']+)'/)?.[1] ?? '';

	routeEntries.push({
		key,
		mode,
		routePath,
		templateFile,
	});
}

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

const rows = routeEntries
	.map((route) => {
		const templatePhp = pythonFiles.get(route.key);
		const templatePath = templatePhp
			? path.join(pythonDir, templatePhp)
			: null;
		const templateContent = templatePath
			? fs.readFileSync(templatePath, 'utf8')
			: '';
		const lineCount = templateContent
			? templateContent.split('\n').length
			: 0;
		const charCount = templateContent.length;

		return {
			...route,
			hasPythonTemplate: Boolean(templatePhp),
			templatePhp,
			hasMineFrontPage: pageBlocks.has(route.key),
			lineCount,
			charCount,
		};
	})
	.sort((a, b) => b.charCount - a.charCount || a.key.localeCompare(b.key));

const migrationPool = rows.filter((row) => row.hasPythonTemplate);
const missingInMineFront = migrationPool.filter(
	(row) => !row.hasMineFrontPage
);

const output = [
	'# Python routes → mine-front migration audit',
	'',
	`Total routes in 'inc/python-routes.php': **${rows.length}**.`,
	`Routes with template in 'template-parts/python/*': **${migrationPool.length}**.`,
	`Routes already migrated to 'mine-front/src/blocks/page-*': **${migrationPool.length - missingInMineFront.length}**.`,
	`Routes still missing in 'mine-front': **${missingInMineFront.length}**.`,
	'',
	'## Complexity (hard → easy, by template size)',
	'',
	'| Route key | Lines | Chars | Mine-front page | Mode |',
	'| --- | ---: | ---: | :---: | --- |',
	...migrationPool.map(
		(row) =>
			`| ${row.key} | ${row.lineCount} | ${row.charCount} | ${
				row.hasMineFrontPage ? '✅' : '❌'
			} | ${row.mode || '—'} |`
	),
	'',
	'## Missing pages to implement in mine-front',
	'',
	...missingInMineFront.map(
		(row) => `- '${row.key}' → 'template-parts/python/${row.templatePhp}'`
	),
	'',
	'## Suggested rollout waves',
	'',
	'1. **Wave A (very hard)**: aml-fatca/crs-style compliance-heavy pages and long prose pages (200+ lines).',
	'2. **Wave B (medium)**: pages with mixed hero + list/doc cards (80-200 lines).',
	'3. **Wave C (easy)**: short informational pages (<80 lines).',
];

const reportPath = path.join(repoRoot, 'readme/python-page-migration-audit.md');
fs.writeFileSync(reportPath, `${output.join('\n')}\n`, 'utf8');

console.log(`Saved report: ${path.relative(repoRoot, reportPath)}`);
