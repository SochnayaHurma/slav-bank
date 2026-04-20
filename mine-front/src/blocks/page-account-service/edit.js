import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Обслуживание счетов в валюте РФ',
			kicker: 'Раздел',
			description: 'Услуги по обслуживанию счетов в валюте РФ для юридических лиц.',
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
	[ 'slav-bank/body-account-service-bento', {} ],
];

export default createPageEdit( TEMPLATE );
