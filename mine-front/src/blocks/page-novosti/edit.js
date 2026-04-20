import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Новости',
			kicker: 'Новости банка',
			description: 'Редактируемая страница для маршрута novosti.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-novosti-bento', {} ],
];

export default createPageEdit( TEMPLATE );
