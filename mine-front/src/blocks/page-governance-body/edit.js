import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/kicker',
		{ text: 'Контент страницы' },
	],
	[
		'slav-bank/title',
		{
			title: 'Органы управления',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Базовая структура перенесена на архитектуру main-hero-bento-body. Наполнение можно редактировать свободно в блоках ниже.',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Источник legacy-контента: template-parts/python/governance.php',
			className: 'muted',
		},
	],
	[
		'slav-bank/page-pattern-tips',
		{
			items: [
				{ id: 'tip-1', title: 'Сохранение дизайна', description: 'Сверяйте контент с legacy-шаблоном и переносите секциями, чтобы сохранить визуал на 90%.' },
				{ id: 'tip-2', title: 'Ссылки', description: 'Для ссылок в hero используйте оба режима: url и pageId/linkMode.' },
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
