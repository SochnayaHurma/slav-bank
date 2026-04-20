import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Кредитование юридических лиц',
			text: 'Кредитование — одно из ведущих направлений деятельности АО НКБ «СЛАВЯНБАНК».',
		},
	],
	[
		'slav-bank/page-pattern-checks',
		{
			items: [
				{ id: 'credit-1', text: 'Платежеспособность заемщика' },
				{ id: 'credit-2', text: 'Качество и ликвидность предлагаемого обеспечения' },
				{ id: 'credit-3', text: 'Кредитная история' },
				{ id: 'credit-4', text: 'Срок кредитов: до пяти лет' },
				{ id: 'credit-5', text: 'График погашения — удобный для клиента' },
			],
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'credit-type-1', text: '<strong>Долгосрочный коммерческий кредит</strong> — 3-5 лет' },
				{ id: 'credit-type-2', text: '<strong>Среднесрочный коммерческий кредит</strong> — 1-3 года' },
				{ id: 'credit-type-3', text: '<strong>Краткосрочный коммерческий кредит</strong> — до 1 года' },
				{ id: 'credit-type-4', text: 'Возобновляемая кредитная линия' },
				{ id: 'credit-type-5', text: 'Кредитование расчетного счета «овердрафт»' },
			],
		},
	],
	[
		'core/paragraph',
		{
			content: '<strong>Проценты начисляются на остаток задолженности и уплачиваются ежемесячно. График гашения устанавливается в индивидуальном порядке.</strong>',
		},
	],
	[
		'core/buttons',
		{},
		[
			[
				'core/button',
				{
					text: 'ОТПРАВИТЬ ЗАЯВКУ НА КРЕДИТОВАНИЕ СМП',
					url: '/zapros-na-kreditovanie-msp.html/',
				},
			],
		],
	],
	[
		'core/paragraph',
		{
			content: '<strong><em>Более подробную информацию можно получить в Управлении по кредитованию и инвестициям Банка и по телефонам: (8162) 66-52-56, 66-52-63.</em></strong>',
		},
	],
];

export default createBodyEdit( TEMPLATE );
