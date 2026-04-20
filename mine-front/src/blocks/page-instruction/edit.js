import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Инструкция по работе в системе Клиент-Банк',
			kicker: 'Поддержка',
			description: 'Материалы и инструкции для пользователей Клиент-Банка.',
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
	[ 'slav-bank/body-instruction-bento', {} ],
];

export default createPageEdit( TEMPLATE );
