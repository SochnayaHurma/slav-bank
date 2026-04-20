import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Безналичные расчеты',
			kicker: 'Раздел',
			description: 'Безналичные расчеты и расчетные операции.',
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
	[ 'slav-bank/body-cashless-payments-bento', {} ],
];

export default createPageEdit( TEMPLATE );
