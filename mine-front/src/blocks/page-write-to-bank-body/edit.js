import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-lead',
		{
			kicker: 'НАПИСАТЬ В БАНК',
			text: 'АО НКБ «СЛАВЯНБАНК» информирует, что в соответствии с Федеральным законом «О банках и банковской деятельности» с 01 июля 2024 года Банк обеспечивает <strong>прием обращений заявителей</strong>, направленных:',
			items: [
				{
					id: 'write-channel-1',
					text: '— посредством почтовой связи;',
				},
				{
					id: 'write-channel-2',
					text: '— нарочным на бумажном носителе;',
				},
				{
					id: 'write-channel-3',
					text: '— в местах обслуживания клиентов по адресу Великий Новгород, ул.Черемнова-Конюхова, 12;',
				},
				{
					id: 'write-channel-4',
					text: '— на адрес электронной почты Банка: <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>;',
				},
				{
					id: 'write-channel-5',
					text: '— &nbsp;через официальный сайт Банка в сети <a href="write-to-bank.html">Интернет </a>',
				},
				{
					id: 'write-channel-6',
					text: 'При этом заявителем может являться как клиент Банка; так и любое лицо, не являющееся клиентом Банка.',
				},
			],
		},
	],
	[
		'slav-bank/page-pattern-contact-form',
		{
			anchor: 'form',
			title: 'Форма обратной связи',
			shortcode: '[contact-form-7 title="Написать в банк"]',
			fallbackText: '',
		},
	],
	[ 'slav-bank/page-pattern-consent', {} ],
];

export default createBodyEdit( TEMPLATE );
