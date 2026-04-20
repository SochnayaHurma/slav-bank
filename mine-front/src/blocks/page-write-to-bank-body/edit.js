import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Написать в банк',
			text: 'Банк принимает обращения заявителей по 395-1 и обрабатывает их в установленном порядке.',
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'wb-1', text: 'Направление обращения почтовой связью.' },
				{ id: 'wb-2', text: 'Подача обращения в офисе банка.' },
				{ id: 'wb-3', text: 'Направление обращения на e-mail nkb@slavbank.ru.' },
				{ id: 'wb-4', text: 'Отправка обращения через форму на сайте банка.' },
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
