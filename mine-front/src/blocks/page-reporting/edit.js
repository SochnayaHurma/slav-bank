import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Отчетность',
			kicker: 'Информация банка',
			description: 'Редактируемая страница для маршрута reporting.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-reporting-bento', {} ],
];

export default createPageEdit( TEMPLATE );
