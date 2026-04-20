import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тариф Славный',
			kicker: 'Тарифы',
			description: 'Редактируемая страница для маршрута tariffs-slavny.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariffs-slavny-bento', {} ],
];

export default createPageEdit( TEMPLATE );
