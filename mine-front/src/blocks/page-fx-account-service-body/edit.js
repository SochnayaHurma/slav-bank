import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Обслуживание счетов в иностранной валюте',
			text: 'АО НКБ «СЛАВЯНБАНК» предоставляет услуги по открытию, ведению и сопровождению счетов в иностранной валюте.',
		},
	],
	[
		'slav-bank/page-pattern-checks',
		{
			items: [
				{ id: 'fx-1', text: 'Расчетно-кассовое обслуживание счета в иностранной валюте.' },
				{ id: 'fx-2', text: 'Формирование и предоставление выписок о движении и остатках денежных средств.' },
				{ id: 'fx-3', text: 'Выдача справок по письменной просьбе клиента.' },
				{ id: 'fx-4', text: 'Выдача дубликатов платежно-расчетных документов и выписок по счету.' },
				{ id: 'fx-5', text: 'Оформление платежных документов при расчетах в иностранной валюте.' },
				{ id: 'fx-6', text: 'Закрытие счета в иностранной валюте.' },
			],
		},
	],
	[ 'slav-bank/kicker', { text: 'Операции по счету' } ],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'fx-op-1', text: 'Зачисление безналичных денежных средств в иностранной валюте на счета.' },
				{ id: 'fx-op-2', text: 'Прием и исполнение распоряжений на распределение экспортной выручки.' },
				{ id: 'fx-op-3', text: 'Прием и исполнение заявлений на перевод денежных средств в иностранной валюте за границу или на территории РФ.' },
				{ id: 'fx-op-4', text: 'Конвертация одной иностранной валюты в другую иностранную валюту.' },
				{ id: 'fx-op-5', text: 'Покупка и продажа безналичной иностранной валюты на ВВР.' },
				{ id: 'fx-op-6', text: 'Прием и отправка платежных документов на инкассо.' },
				{ id: 'fx-op-7', text: 'Установление маршрута прохождения перечисленных сумм.' },
				{ id: 'fx-op-8', text: 'Документарные операции.' },
			],
		},
	],
	[ 'slav-bank/kicker', { text: 'Валютные реквизиты' } ],
	[
		'core/paragraph',
		{
			content: 'При заключении внешнеторговых договоров, предусматривающих расчеты в иностранной валюте, а также для перечисления средств в пользу валютных счетов, начиная с <strong>02 февраля 2019 года</strong>, необходимо указывать следующие данные.',
		},
	],
	[ 'core/heading', { level: 3, content: 'Доллары США' } ],
	[
		'core/list',
		{
			values: '<ul><li>:56 Intermediary Institution – BIC: <strong>COLKRUMM, LANTA-BANK, MOSCOW</strong></li><li>:57 Account with institution – BIC: <strong>/30109840900000000038, SLABRU21, SLAVYANBANK, VELIKIY NOVGOROD, RU</strong></li><li>:59 Beneficiary Customer: <strong>/номер транзитного счета, Наименование организации получателя</strong></li></ul>',
		},
	],
	[ 'core/heading', { level: 3, content: 'Евро' } ],
	[
		'core/list',
		{
			values: '<ul><li>:56 Intermediary Institution – BIC: <strong>COLKRUMM, LANTA-BANK, MOSCOW</strong></li><li>:57 Account with institution – BIC: <strong>/30109978500000000038, SLABRU21, SLAVYANBANK, VELIKIY NOVGOROD, RU</strong></li><li>:59 Beneficiary Customer: <strong>/номер транзитного счета, Наименование организации получателя</strong></li></ul>',
		},
	],
	[ 'core/heading', { level: 3, content: 'Китайские юани' } ],
	[
		'core/list',
		{
			values: '<ul><li>:56 Intermediary Institution – BIC: <strong>COLKRUMM, LANTA-BANK, MOSCOW</strong></li><li>:57 Account with institution – BIC: <strong>/30109156500000000038, SLABRU21, SLAVYANBANK, VELIKIY NOVGOROD, RU</strong></li><li>:59 Beneficiary Customer: <strong>/номер транзитного счета, Наименование организации получателя</strong></li></ul>',
		},
	],
	[
		'core/paragraph',
		{
			content: '<strong>Более подробную информацию по обслуживанию счетов в иностранной валюте можно получить в Управлении валютных операций и контроля, тел. (8162) 66-52-54.</strong>',
		},
	],
];

export default createBodyEdit( TEMPLATE );
