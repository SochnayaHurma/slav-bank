import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Информация банка' } ],
	[ 'slav-bank/title', { title: 'Информация банка', level: '2' } ],
	[
		'core/paragraph',
		{
			content:
				'Раздел объединяет обязательные сведения о банке, публикации для клиентов и документы, связанные с раскрытием информации.',
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'ib-1', text: 'Реквизиты банка, контактные данные и сведения для платежных документов.' },
				{ id: 'ib-2', text: 'Финансовая отчетность и публикации в интересах клиентов и регулятора.' },
				{ id: 'ib-3', text: 'Внутренние документы, корпоративная информация и официальные сообщения.' },
			],
		},
	],
	[
		'core/buttons',
		{},
		[
			[
				'core/button',
				{
					text: 'Перейти к реквизитам банка',
					url: '/requisites-bank/',
				},
			],
			[
				'core/button',
				{
					text: 'Перейти к отчетности',
					url: '/reporting/',
					className: 'is-style-outline',
				},
			],
		],
	],
];

export default createBodyEdit( TEMPLATE );
