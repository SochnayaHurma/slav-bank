import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тарифы на услуги кредитным организациям',
			kicker: 'Тарифы',
			description: 'Тарифы банковских услуг для кредитных организаций.',
			pillItems: [
				heroBadge( 'Тарифы банка', '/tarify-banka.html/' ),
				heroBadge(
					'Корреспондентские счета',
					'/tarify-na-obsluzhivanie-korrespondentskih-schetov.html/'
				),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-credit-organization-tariffs-bento', {} ],
];

export default createPageEdit( TEMPLATE );
