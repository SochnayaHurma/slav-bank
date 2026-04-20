import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тарифы по операциям в рублях и иностранной валюте «Депозитный»',
			kicker: 'Тарифы',
			description: 'Тарифные условия по пакету «Депозитный».',
			pillItems: [
				heroBadge( 'Тарифы банка', '/tarify-banka.html/' ),
				heroBadge( '«Славный»', '/tarify-banka-html/tarif_slavny.html/' ),
				heroBadge( '«Приветственный»', '/tarify-banka-html/tarif_privetstvenny.html/' ),
			],
			actions: [
				heroAction( 'Перейти к содержимому', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariff-depositny-bento', {} ],
];

export default createPageEdit( TEMPLATE );
