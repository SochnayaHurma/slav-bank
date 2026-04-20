import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Безналичные расчеты',
			text: 'Платежи, переводы и расчёты — удобно и безопасно.',
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
					[ 'slav-bank/kicker', { text: 'Для кого' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'Для клиентов, использующих платежные поручения для безналичных переводов.' } ],
				],
			],
			[
				'core/group',
				{ className: 'summary-card' },
				[
					[ 'slav-bank/kicker', { text: 'Что можно' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'Зачисление денежных средств на счет, прием и исполнение поручений на перечисление.' } ],
				],
			],
			[
				'core/group',
				{ className: 'summary-card' },
				[
					[ 'slav-bank/kicker', { text: 'Как начать' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'Свяжитесь с банком для консультации по подключению и регламенту расчетов.' } ],
				],
			],
		],
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'cashless-1', text: 'Денежные средства, поступившие на корреспондентский счет Банка в течение операционного дня, зачисляются текущим днем.' },
				{ id: 'cashless-2', text: 'Средства, поступившие после операционного дня, зачисляются на следующий день.' },
				{ id: 'cashless-3', text: 'Исполнение поручений производится не позднее следующего рабочего дня после подачи платежного поручения.' },
			],
		},
	],
	[
		'core/paragraph',
		{
			content: '<strong>Более подробную информацию по обслуживанию счетов в валюте РФ можно получить по тел. (8162) 66-52-05, +7-921-201-47-00.</strong>',
		},
	],
];

export default createBodyEdit( TEMPLATE );
