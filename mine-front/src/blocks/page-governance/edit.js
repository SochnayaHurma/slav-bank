import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Органы управления',
			kicker: 'О банке',
			description: 'Сведения об органах управления банка.',
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
	[ 'slav-bank/body-governance-bento', {} ],
];

export default createPageEdit( TEMPLATE );
