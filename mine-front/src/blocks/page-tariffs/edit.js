import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тарифы банка',
			kicker: 'Тарифы',
			description: 'Редактируемая страница для маршрута tariffs.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariffs-bento', {} ],
];

export default createPageEdit( TEMPLATE );
