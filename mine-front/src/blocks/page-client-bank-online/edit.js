import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Клиент-Банк Online',
			kicker: 'Дистанционное обслуживание',
			description: 'Редактируемая страница для маршрута client-bank-online.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-client-bank-online-bento', {} ],
];

export default createPageEdit( TEMPLATE );
