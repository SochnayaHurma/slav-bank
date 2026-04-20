import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Валютный контроль',
			kicker: 'Обслуживание счетов',
			description: 'Редактируемая страница для маршрута currency-control.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-currency-control-bento', {} ],
];

export default createPageEdit( TEMPLATE );
