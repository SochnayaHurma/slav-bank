import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Обратная связь' } ],
	[
		'slav-bank/title',
		{
			title: 'Контакты',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Ниже — основные каналы связи, адрес и режим работы. Для официальных обращений используйте форму «Написать в банк».',
		},
	],
	[
		'core/heading',
		{
			content: 'Каналы связи',
			level: 3,
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li><strong>Телефон:</strong> <a href="tel:78162665247">8 (162) 665-247</a></li><li><strong>Email:</strong> <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></li><li><strong>Адрес:</strong> г. Великий Новгород, ул. Черемнова-Конюхова, дом 12</li></ul>',
		},
	],
	[
		'core/heading',
		{
			content: 'Режим работы',
			level: 3,
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li><strong>Обслуживание клиентов:</strong> пн-чт 09:00–17:00 (касса до 16:30), пт 09:00–16:00 (касса до 15:30)</li><li><strong>Поддержка:</strong> 08:30–17:30, пт до 16:30, обед 13:00–14:00</li></ul>',
		},
	],
];

export default createBodyEdit( TEMPLATE );
