import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Раскрытие регуляторной информации',
			kicker: 'Информация банка',
			description: 'Редактируемая страница для маршрута disclosur-regulatory.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-disclosur-regulatory-bento', {} ],
];

export default createPageEdit( TEMPLATE );
