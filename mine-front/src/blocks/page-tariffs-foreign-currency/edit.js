import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тарифы по операциям в иностранной валюте',
			kicker: 'Тарифы',
			description: 'Тарифные условия по операциям в иностранной валюте.',
			pillItems: [
				heroBadge( 'Тарифы банка', '/tarify-banka.html/' ),
				heroBadge( '«Славный»', '/tarify-banka-html/tarif_slavny.html/' ),
				heroBadge( '«Приветственный»', '/tarify-banka-html/tarif_privetstvenny.html/' ),
				heroBadge( '«Депозитный»', '/tarify-banka-html/tarif_depositny-html/' ),
			],
			actions: [
				heroAction( 'Перейти к содержимому', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariffs-foreign-currency-bento', {} ],
];

export default createPageEdit( TEMPLATE );
