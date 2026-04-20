import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Реквизиты банка',
			kicker: 'Информация банка',
			description: 'Редактируемая страница для маршрута requisites-bank.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-requisites-bank-bento', {} ],
];

export default createPageEdit( TEMPLATE );
