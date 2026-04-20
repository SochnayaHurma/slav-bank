import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Реквизиты банка',
			text: 'Актуальные реквизиты АО НКБ «СЛАВЯНБАНК» для платежей и договоров.',
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'req-1', text: 'Полное наименование банка и юридический адрес.' },
				{ id: 'req-2', text: 'БИК, корреспондентский счет, ИНН/КПП.' },
				{ id: 'req-3', text: 'Контакты для уточнения реквизитов и платежных данных.' },
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
