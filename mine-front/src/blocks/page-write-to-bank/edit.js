import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Написать в банк',
			kicker: 'Обратная связь',
			description:
				'Направьте обращение в Банк удобным способом или заполните форму обратной связи.',
			actions: [
				heroAction( 'Заполнить форму', '#form' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-write-to-bank-bento', {} ],
];

export default createPageEdit( TEMPLATE );
