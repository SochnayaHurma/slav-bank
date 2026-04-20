import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Тарифы' } ],
	[ 'slav-bank/title', { title: 'Тарифы банка', level: '2' } ],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'trf-1', text: 'Тарифы по операциям в валюте РФ.' },
				{ id: 'trf-2', text: 'Тарифы по операциям в иностранной валюте.' },
				{ id: 'trf-3', text: 'Специальные тарифные планы «Приветственный» и «Славный».' },
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
