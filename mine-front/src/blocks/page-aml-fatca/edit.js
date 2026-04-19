import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'ПОД/ФТ/ФРОМУ/FATCA',
			kicker: 'Раздел',
			description: 'I. ПРОТИВОДЕЙСТВИЕ ЛЕГАЛИЗАЦИИ ДОХОДОВ',
			pillItems: [
				heroBadge(
					'Валютный контроль',
					'/yuridicheskim-liczam-html/valutny-kontrol/'
				),
				heroBadge(
					'Счета в валюте',
					'/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/'
				),
				heroBadge( 'CRS', '/crs-obmen-s-fns.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-aml-fatca-bento', {} ],
];

export default createPageEdit( TEMPLATE );
