import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Обслуживание счетов в валюте РФ',
			kicker: 'Раздел',
			description: 'Комплекс услуг по обслуживанию расчетных счетов в валюте Российской Федерации.',
			pillItems: [
				heroBadge( 'Безналичные', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/' ),
				heroBadge( 'Наличные платежи', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/' ),
				heroBadge( 'Счета', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/' ),
				heroBadge( 'Требования', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
				heroAction( 'Задать вопрос', '/forma-obratnoj-svyazi.html/#form' ),
			],
		},
	],
	[ 'slav-bank/body-account-service-bento', {} ],
];

export default createPageEdit( TEMPLATE );
