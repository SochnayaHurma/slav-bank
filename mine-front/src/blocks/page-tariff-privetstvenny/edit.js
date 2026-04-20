import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тариф Приветственный',
			kicker: 'Тарифы',
			description: 'Редактируемая страница для маршрута tariff-privetstvenny.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariff-privetstvenny-bento', {} ],
];

export default createPageEdit( TEMPLATE );
