import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тарифы «Депозитный»',
			kicker: 'Тарифы',
			description: 'Тарифы по операциям в рублях и иностранной валюте «Депозитный».',
			pillItems: [
				heroBadge( 'Поддержка', '/podderzhka.html/' ),
				heroBadge( 'Написать в банк', '/forma-obratnoj-svyazi.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariff-depositny-bento', {} ],
];

export default createPageEdit( TEMPLATE );
