import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Политика конфиденциальности',
			kicker: 'Документы',
			description:
				'Информация о персональных данных, cookies и правах пользователей сайта.',
			pillItems: [
				heroBadge( 'Контакты', '/kontakty.html/' ),
				heroBadge( 'Написать в банк', '/forma-obratnoj-svyazi.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-privacy-policy-bento', {} ],
];

export default createPageEdit( TEMPLATE );
