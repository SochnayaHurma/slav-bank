import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Запрос на кредитование МСП',
			kicker: 'Заявки',
			description: 'Редактируемая страница для маршрута zapros-na-kreditovanie-msp.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-zapros-na-kreditovanie-msp-bento', {} ],
];

export default createPageEdit( TEMPLATE );
