import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'CRS — обмен с ФНС',
			kicker: 'Раздел',
			description: '',
			pillItems: [
				heroBadge(
					'Валютный контроль',
					'/yuridicheskim-liczam-html/valutny-kontrol/'
				),
				heroBadge(
					'Счета в валюте',
					'/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/'
				),
				heroBadge( 'ПОД/ФТ/FATCA', '/pod-ft-fromu.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-crs-bento', {} ],
];

export default createPageEdit( TEMPLATE );
