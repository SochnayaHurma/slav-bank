import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Контакты',
			kicker: 'Обратная связь',
			description: 'Редактируемая страница для маршрута contacts.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-contacts-bento', {} ],
];

export default createPageEdit( TEMPLATE );
