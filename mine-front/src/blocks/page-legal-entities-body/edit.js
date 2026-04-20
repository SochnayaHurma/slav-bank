import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Юридическим лицам',
			text: 'Для юридических лиц АО НКБ «СЛАВЯНБАНК» предлагает следующие банковские услуги.',
		},
	],
	[
		'slav-bank/page-pattern-checks',
		{
			items: [
				{ id: 'le-1', text: 'Кредитование юридических лиц и предпринимателей в рублях и иностранной валюте' },
				{ id: 'le-2', text: 'Обслуживание счетов в валюте РФ (открытие, ведение, наличные и безналичные расчеты)' },
				{ id: 'le-3', text: 'Обслуживание счетов в иностранной валюте' },
				{ id: 'le-4', text: 'Валютный контроль и консультации специалистов по валютным операциям' },
			],
		},
	],
	[
		'slav-bank/page-pattern-chips',
		{
			items: [
				{ id: 'le-link-1', text: 'Кредитование', url: '/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/' },
				{ id: 'le-link-2', text: 'Счета в валюте РФ', url: '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/' },
				{ id: 'le-link-3', text: 'Счета в иностранной валюте', url: '/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/' },
				{ id: 'le-link-4', text: 'Валютный контроль', url: '/yuridicheskim-liczam-html/valutny-kontrol/' },
			],
		},
	],
	[
		'core/paragraph',
		{
			content: '<strong>Дополнительная информация:</strong> по вопросам кредитования — (8162) 66-52-56, 66-52-63; по обслуживанию счетов в валюте РФ — (8162) 66-52-05, +7-921-201-47-00; по валютным операциям и контролю — (8162) 66-52-54.',
		},
	],
	[
		'core/buttons',
		{},
		[
			[
				'core/button',
				{
					text: 'ОТПРАВИТЬ ЗАПРОС НА ОТКРЫТИЕ РАСЧЕТНОГО СЧЕТА',
					url: '/zapros-na-otkrytie-raschetnogo-scheta.html/',
				},
			],
		],
	],
];

export default createBodyEdit( TEMPLATE );
