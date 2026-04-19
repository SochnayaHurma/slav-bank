import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Обращение по 123-ФЗ',
			kicker: 'Раздел',
			description: 'Обращение по 123-ФЗ',
			pillItems: [
				heroBadge( 'Поддержка', '/podderzhka.html/' ),
				heroBadge(
					'Безопасность',
					'/podderzhka-html/recom_bezopasnost.html/'
				),
				heroBadge( 'Клиент-Банк', '/klient-bank-online.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-appeal-123-fz-bento', {} ],
];

export default createPageEdit( TEMPLATE );
