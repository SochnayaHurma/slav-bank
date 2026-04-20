import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'ЮРИДИЧЕСКИМ ЛИЦАМ',
			kicker: 'Раздел',
			description:
				'Для юридических лиц АО НКБ «СЛАВЯНБАНК» предлагает банковские услуги: кредитование, обслуживание счетов в валюте РФ и иностранной валюте, валютный контроль.',
			pillItems: [
				heroBadge( 'Кредитование', '/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/' ),
				heroBadge( 'Счета в РФ', '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/' ),
				heroBadge( 'Валютные счета', '/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/' ),
				heroBadge( 'Валютный контроль', '/yuridicheskim-liczam-html/valutny-kontrol/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
				heroAction( 'Связаться', '/forma-obratnoj-svyazi.html/#form' ),
			],
		},
	],
	[ 'slav-bank/body-legal-entities-bento', {} ],
];

export default createPageEdit( TEMPLATE );
