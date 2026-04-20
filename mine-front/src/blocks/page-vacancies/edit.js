import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'ВАКАНСИИ',
			kicker: 'Карьера',
			description:
				'Если вы активный, инициативный и целеустремленный человек, желающий работать и зарабатывать, мы всегда открыты для диалога с вами.',
			pillItems: [
				heroBadge( 'Поддержка', '/podderzhka.html/' ),
				heroBadge( 'Написать', '/forma-obratnoj-svyazi.html/#form' ),
				heroBadge( 'COVID19', '/covid19.html/' ),
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
