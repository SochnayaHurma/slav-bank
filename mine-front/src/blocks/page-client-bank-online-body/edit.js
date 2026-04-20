import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Дистанционное обслуживание' } ],
	[
		'slav-bank/title',
		{
			title: 'Клиент-Банк Online',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Система «Клиент-Банк» позволяет обмениваться документами с банком и работать с расчетными счетами без посещения офиса.',
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li>отправка платежных поручений в банк</li><li>официальная переписка с применением ЭЦП</li><li>получение выписок и уведомлений</li><li>отправка валютных переводов и справок по валютным операциям</li><li>получение справок и иных банковских документов</li></ul>',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Банк имеет необходимые сертификаты для работы со средствами криптографической защиты информации.',
			className: 'muted',
		},
	],
	[
		'core/buttons',
		{},
		[
			[
				'core/button',
				{
					text: 'Перейти в Клиент-Банк',
					url: '#',
				},
			],
			[
				'core/button',
				{
					text: 'Тарифы и условия',
					url: '#',
					className: 'is-style-outline',
				},
			],
		],
	],
];

export default createBodyEdit( TEMPLATE );
