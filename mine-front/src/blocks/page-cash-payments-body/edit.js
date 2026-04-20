import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Наличные расчеты',
			text: 'Кассовые операции, выдача и внесение наличных по правилам Банка.',
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
					[ 'slav-bank/kicker', { text: 'Операции' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'АО НКБ «СЛАВЯНБАНК» осуществляет прием наличных денежных средств в кассу Банка, пересчет и зачисление на счет внесенных или инкассированных денежных средств Клиента.' } ],
				],
			],
			[
				'core/group',
				{ className: 'summary-card' },
				[
					[ 'slav-bank/kicker', { text: 'Требования' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'Для получения наличных денежных средств со счета необходимо оформить денежную чековую книжку.' } ],
				],
			],
			[
				'core/group',
				{ className: 'summary-card' },
				[
					[ 'slav-bank/kicker', { text: 'Сроки' } ],
					[ 'core/paragraph', { className: 'summary-text', content: 'Оформление чековой книжки производится на основании письменного заявления Клиента не позднее рабочего дня Банка, следующего за днем подачи заявления.' } ],
				],
			],
		],
	],
	[
		'slav-bank/page-pattern-chips',
		{
			items: [
				{ id: 'cash-1', text: 'Шаблон объявления на взнос наличными (MS Excel)', url: 'https://slavbank.ru/obyavlenie-na-vznos-nalichnymi-instrukcziya.html', opensInNewTab: true },
				{ id: 'cash-2', text: 'Оформление чековой книжки', url: 'https://slavbank.ru/wp-content/uploads/newcheck.doc', opensInNewTab: true },
			],
		},
	],
	[
		'slav-bank/page-pattern-documents',
		{
			items: [
				{ id: 'cash-doc-1', title: 'Оформление чековой книжки', url: 'https://slavbank.ru/wp-content/uploads/newcheck.doc', format: 'DOC', symbol: '→', opensInNewTab: true },
			],
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'cash-list-1', text: 'Выдача наличных денежных средств осуществляется на основании надлежащим образом оформленного денежного чека.' },
				{ id: 'cash-list-2', text: 'Доставка наличных денежных средств по заявке Клиента осуществляется на основании договора между Банком и Клиентом.' },
				{ id: 'cash-list-3', text: 'Прием наличных в кассу Банка выполняется на основании объявления на взнос наличными установленной формы.' },
				{ id: 'cash-list-4', text: 'Банк принимает ветхие наличные денежные средства и зачисляет их на расчетный счет Клиента по номинальной стоимости.' },
				{ id: 'cash-list-5', text: 'По просьбе Клиента Банк производит обмен банкнот на купюры другого достоинства или монету.' },
				{ id: 'cash-list-6', text: 'При необходимости Банк проводит экспертизу денежных знаков и выдает справку о приеме на экспертизу.' },
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
