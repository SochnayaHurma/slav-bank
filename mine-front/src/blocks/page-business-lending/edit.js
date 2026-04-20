import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Кредитование юридических лиц',
			kicker: 'Раздел',
			description: 'Кредитование в рублях и иностранной валюте для бизнеса.',
			pillItems: [
				heroBadge( 'Депозиты', '/yuridicheskim-liczam-html/deposity-dlya-yur-lic.html/' ),
				heroBadge( 'Валютный контроль', '/yuridicheskim-liczam-html/valutny-kontrol/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'Связаться', '/forma-obratnoj-svyazi.html/#form' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-business-lending-bento', {} ],
];

export default createPageEdit( TEMPLATE );
