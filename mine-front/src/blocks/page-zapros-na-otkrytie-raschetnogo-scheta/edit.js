import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Запрос на открытие расчетного счета',
			kicker: 'Заявки',
			description: 'Редактируемая страница для маршрута zapros-na-otkrytie-raschetnogo-scheta.',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-zapros-na-otkrytie-raschetnogo-scheta-bento', {} ],
];

export default createPageEdit( TEMPLATE );
