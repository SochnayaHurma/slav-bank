import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'COVID19',
			kicker: 'Раздел',
			description: 'Информация для Заемщиков АО НКБ «СЛАВЯНБАНК».',
			pillItems: [
				heroBadge( 'Вакансии', '/vakansii.html/' ),
				heroBadge( 'Написать', '/forma-obratnoj-svyazi.html/#form' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-covid19-bento', {} ],
];

export default createPageEdit( TEMPLATE );
