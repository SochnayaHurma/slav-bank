import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Информация банка' } ],
	[ 'slav-bank/title', { title: 'Информация банка', level: '2' } ],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'ib-1', text: 'Реквизиты банка и обязательная информация для клиентов.' },
				{ id: 'ib-2', text: 'Отчетность и раскрытие информации для регулятивных целей.' },
				{ id: 'ib-3', text: 'Корпоративные документы и сведения о деятельности банка.' },
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
