import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Краткая инструкция' } ],
	[
		'core/paragraph',
		{
			content:
				'Полное руководство пользователя «Интернет-Клиент» можно скачать в формате PDF по ссылке ниже.',
			className: 'has-dark-blue-color has-text-color',
		},
	],
	[
		'slav-bank/page-pattern-chips',
		{
			items: [
				{
					id: 'manual-pdf',
					text: 'Руководство пользователя (PDF)',
					url: 'https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf',
					opensInNewTab: true,
				},
			],
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{
					id: 'regen-link',
					text: '<a href="/podderzhka-html/regen.html/">🗹 Перегенерация ключей</a>',
				},
				{
					id: 'crypto-plugin',
					text: '<a href="https://slavbank.ru/wp-content/uploads/zagruzka-i-ustanovka-kriptoplagina.pdf">🗹 Загрузка и установка криптоплагина</a>',
				},
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
