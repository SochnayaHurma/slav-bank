import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Отчетность' } ],
	[ 'slav-bank/title', { title: 'Документы и раскрытия', level: '2' } ],
	[
		'core/paragraph',
		{
			content:
				'Страница полностью редактируемая: управляйте карточками документов, периодами раскрытия и пояснениями без правки кода.',
		},
	],
	[ 'slav-bank/kicker', { text: 'Годовая отчетность' } ],
	[ 'slav-bank/page-pattern-documents', { items: [] } ],
	[ 'slav-bank/kicker', { text: 'Промежуточная отчетность' } ],
	[
		'core/details',
		{ summary: 'Добавьте период раскрытия' },
		[
			[
				'core/paragraph',
				{ content: 'Внутри этого блока добавьте ссылки на документы и даты публикации.' },
			],
		],
	],
];

export default createBodyEdit( TEMPLATE );
