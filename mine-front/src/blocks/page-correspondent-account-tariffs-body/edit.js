import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Тарифы' } ],
	[
		'slav-bank/title',
		{
			title: 'Тарифы на обслуживание корреспондентских счетов',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Базовая запись из wp_posts содержала пустые таблицы. Этот блок оставляет страницу редактируемой: заполните таблицу тарифов или замените ее на PDF-документ после актуализации условий.',
			className: 'muted',
		},
	],
	[
		'core/table',
		{
			hasFixedLayout: false,
			head: [
				{
					cells: [
						{ content: 'Услуга', tag: 'th' },
						{ content: 'Тариф', tag: 'th' },
						{ content: 'Примечание', tag: 'th' },
					],
				},
			],
			body: [
				{
					cells: [
						{ content: '', tag: 'td' },
						{ content: '', tag: 'td' },
						{ content: '', tag: 'td' },
					],
				},
			],
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Перед публикацией проверьте соответствие тарифов действующим условиям Банка.',
			className: 'has-dark-blue-color has-text-color',
		},
	],
];

export default createBodyEdit( TEMPLATE );
