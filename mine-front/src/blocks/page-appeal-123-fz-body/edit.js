import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Коротко по безопасности' } ],
	[
		'slav-bank/page-pattern-tips',
		{
			items: [
				{
					id: 'finombudsman-site',
					text: 'официальный сайт финансового уполномоченного https://finombudsman.ru/;',
				},
				{
					id: 'finombudsman-phone',
					text: 'номер телефона службы: 8 800 200 00 10, по России бесплатно;',
				},
				{
					id: 'finombudsman-location',
					text: 'место нахождения службы: 119 017, Москва, Старомонетный переулок, дом 3;',
				},
				{
					id: 'finombudsman-mail',
					text: 'почтовый адрес службы: 119 017, Москва, Старомонетный переулок, дом 3, получатель АНО «СОДФУ».',
				},
			],
		},
	],
	[ 'slav-bank/kicker', { text: '' } ],
	[ 'slav-bank/appeal-123-fz-text', {} ],
];

export default createBodyEdit( TEMPLATE );
