import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Платежные требования с акцептом',
			kicker: 'Раздел',
			description:
				'При предоставлении Клиентом права Банк оплачивает платежные требования с акцептом.',
			pillItems: [
				heroBadge( 'Безналичные платежи', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/' ),
				heroBadge( 'Наличные платежи', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/' ),
				heroBadge( 'Счета', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
				heroAction( 'Задать вопрос', '/forma-obratnoj-svyazi.html/#form' ),
			],
		},
	],
	[ 'slav-bank/body-payment-demands-bento', {} ],
];

export default createPageEdit( TEMPLATE );
