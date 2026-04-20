import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тариф Славный',
			kicker: 'Тарифы',
			description: 'Подробная информация о тарифе "Славный"',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariffs-slavny-bento', {} ],
];

export default createPageEdit( TEMPLATE );
