import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тарифы в рублях',
			kicker: 'Тарифы',
			description: 'Подробная информация о тарифах в рублях',
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-tariffs-rub-bento', {} ],
];

export default createPageEdit( TEMPLATE );
