import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Информация о банке',
			kicker: 'Информация банка',
			description: 'Редактируемая страница для маршрута info-bank-page.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-info-bank-page-bento', {} ],
];

export default createPageEdit( TEMPLATE );
