import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Написать в банк',
			kicker: 'Обратная связь',
			description: 'Редактируемая страница для маршрута write-to-bank.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-write-to-bank-bento', {} ],
];

export default createPageEdit( TEMPLATE );
