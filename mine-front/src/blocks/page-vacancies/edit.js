import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Вакансии',
			kicker: 'Карьера',
			description: 'Актуальная информация о вакансиях и карьере.',
			pillItems: [
				heroBadge( 'Поддержка', '/podderzhka.html/' ),
				heroBadge( 'Написать в банк', '/forma-obratnoj-svyazi.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-vacancies-bento', {} ],
];

export default createPageEdit( TEMPLATE );
