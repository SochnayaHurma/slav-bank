import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Рекомендации по безопасности',
			kicker: 'Поддержка',
			description:
				'АО НКБ «СЛАВЯНБАНК» напоминает, что единственным официальным интернет-сайтом Банка является «www.slavbank.ru», единственным официальным сайтом системы ДБО Банка является «https://dbo.slavbank.ru».',
			pillItems: [
				heroBadge( 'Поддержка', '/podderzhka.html/' ),
				heroBadge( 'Клиент-Банк', '/klient-bank-online/' ),
				heroBadge( '123-ФЗ', '/obrashhenie-po-123-fz.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-security-bento', {} ],
];

export default createPageEdit( TEMPLATE );
