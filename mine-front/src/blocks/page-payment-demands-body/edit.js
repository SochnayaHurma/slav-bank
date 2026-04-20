import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Платежные требования',
			text: 'Инструмент для расчётов по договору — оформляйте корректно.',
		},
	],
	[
		'core/group',
		{ className: 'summary-grid' },
		[
			[
				'core/group',
				{ className: 'summary-card' },
				[
					[ 'slav-bank/kicker', { text: 'Суть' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'При предоставлении Клиентом права Банк оплачивает платежные требования с акцептом.' } ],
				],
			],
			[
				'core/group',
				{ className: 'summary-card' },
				[
					[ 'slav-bank/kicker', { text: 'Когда использовать' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'Прием и отправка платежных документов на инкассо.' } ],
				],
			],
			[
				'core/group',
				{ className: 'summary-card' },
				[
					[ 'slav-bank/kicker', { text: 'Что важно' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'Банк принимает на инкассо платежные документы и отгрузочные документы к ним.' } ],
				],
			],
		],
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'pd-1', text: 'При предоставлении Клиентом права Банк оплачивает платежные требования с акцептом.' },
				{ id: 'pd-2', text: 'Банк принимает на инкассо платежные документы и отгрузочные документы к ним.' },
				{ id: 'pd-3', text: 'Клиенту выдается экземпляр платежных документов с отметкой Банка о приеме к исполнению.' },
				{ id: 'pd-4', text: 'Установление маршрута прохождения перечисленных сумм осуществляется на основании письменного заявления Клиента.' },
			],
		},
	],
	[
		'core/paragraph',
		{
			content: '<strong>Более подробную информацию можно получить по тел. (8162) 66-52-05, +7-921-201-47-00.</strong>',
		},
	],
];

export default createBodyEdit( TEMPLATE );
