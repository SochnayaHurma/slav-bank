import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Безналичные расчеты',
			kicker: 'Раздел',
			description:
				'АО НКБ «СЛАВЯНБАНК» осуществляет прием и исполнение поручений Клиента на перечисление денежных средств на основании надлежаще оформленных платежных поручений.',
			pillItems: [
				heroBadge( 'Наличные', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/' ),
				heroBadge( 'Счета', '/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/' ),
				heroBadge( 'Требования', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
				heroAction( 'Задать вопрос', '/forma-obratnoj-svyazi.html/#form' ),
			],
		},
	],
	[ 'slav-bank/body-cashless-payments-bento', {} ],
];

export default createPageEdit( TEMPLATE );
