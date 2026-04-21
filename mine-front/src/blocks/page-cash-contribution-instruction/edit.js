import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Объявление на взнос наличными',
			kicker: 'Инструкция',
			description:
				'Файл и настройки для заполнения объявления на взнос наличными.',
			pillItems: [
				heroBadge(
					'Наличные расчеты',
					'/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/'
				),
				heroBadge( 'Поддержка', '/podderzhka.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-cash-contribution-instruction-bento', {} ],
];

export default createPageEdit( TEMPLATE );
