import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Запрос на открытие расчетного счета',
			kicker: 'Заявки',
			description:
				'Отправьте запрос на открытие расчетного счета. Специалист Банка свяжется с вами и уточнит следующие шаги.',
			actions: [
				heroAction( 'Заполнить форму', '#form' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-zapros-na-otkrytie-raschetnogo-scheta-bento', {} ],
];

export default createPageEdit( TEMPLATE );
