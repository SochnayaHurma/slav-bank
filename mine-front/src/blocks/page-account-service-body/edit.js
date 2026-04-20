import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Обслуживание счетов в валюте РФ',
			text: 'В АО НКБ «СЛАВЯНБАНК» осуществляются открытие и ведение банковских счетов, расчеты и сопровождение операций клиентов.',
		},
	],
	[
		'slav-bank/page-pattern-chips',
		{
			items: [
				{
					id: 'account-link-1',
					text: 'Безналичные расчеты',
					url: '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/',
				},
				{
					id: 'account-link-2',
					text: 'Наличные расчеты',
					url: '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/',
				},
				{
					id: 'account-link-3',
					text: 'Платежные требования с акцептом',
					url: '/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/',
				},
			],
		},
	],
	[
		'slav-bank/page-pattern-checks',
		{
			items: [
				{
					id: 'account-service-1',
					text: 'Открытие и ведение банковского счета в валюте Российской Федерации',
				},
				{
					id: 'account-service-2',
					text: 'Учет денежных средств на счете и выдача выписок по счету',
				},
				{
					id: 'account-service-3',
					text: 'Выдача справок, дубликатов платежно-расчетных документов и выписок',
				},
				{
					id: 'account-service-4',
					text: 'Оформление карточек с образцами подписей и оттиска печати',
				},
				{
					id: 'account-service-5',
					text: 'Оформление платежных документов при расчетах в валюте РФ',
				},
				{
					id: 'account-service-6',
					text: 'Закрытие счета по письменному заявлению Клиента',
				},
				{
					id: 'account-service-7',
					text: 'Расчеты с акцептом платежных требований',
				},
			],
		},
	],
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Для иностранных юридических лиц',
			text: 'Перечень документов, необходимых для открытия счета юридическому лицу, созданному в соответствии с законодательством иностранного государства, уточняется в Банке.',
		},
	],
	[
		'slav-bank/page-pattern-documents',
		{
			items: [
				{
					id: 'account-doc-1',
					title: 'Перечень документов для открытия счета (юрлица РФ)',
					url: 'https://slavbank.ru/wp-content/uploads/perechen-dokumentov-yur.licz-.docx',
					format: 'DOCX',
					symbol: '→',
					opensInNewTab: true,
				},
				{
					id: 'account-doc-2',
					title: 'Перечень документов для ИП и физлиц частной практики',
					url: 'https://slavbank.ru/wp-content/uploads/perechen-dokumentov-ip-1.docx',
					format: 'DOCX',
					symbol: '→',
					opensInNewTab: true,
				},
				{
					id: 'account-doc-3',
					title: 'Правила осуществления перевода денежных средств',
					url: 'https://slavbank.ru/wp-content/uploads/pravila-perevodov.doc',
					format: 'DOC',
					symbol: '→',
					opensInNewTab: true,
				},
				{
					id: 'account-doc-4',
					title: 'Заявление на открытие счета',
					url: 'https://slavbank.ru/wp-content/uploads/zayavlenie-na-otkrytie-scheta_oferta-1.doc',
					format: 'DOC',
					symbol: '→',
					opensInNewTab: true,
				},
				{
					id: 'account-doc-5',
					title: 'Заявление на закрытие счета',
					url: 'https://slavbank.ru/wp-content/uploads/zayavlenie-na-zakrytie-scheta_nov-1.doc',
					format: 'DOC',
					symbol: '→',
					opensInNewTab: true,
				},
				{
					id: 'account-doc-6',
					title: 'Заявление на подключение к системе Клиент-Банк',
					url: 'https://slavbank.ru/wp-content/uploads/zayavlenie-o-podklyuchenii-k-sisteme-dbo.pdf',
					format: 'PDF',
					symbol: '→',
					opensInNewTab: true,
				},
				{
					id: 'account-doc-7',
					title: 'Согласие на обработку персональных данных',
					url: 'https://slavbank.ru/wp-content/uploads/soglasie-klient-prilozh-1-k-prikazu-forma.doc',
					format: 'DOC',
					symbol: '→',
					opensInNewTab: true,
				},
				{
					id: 'account-doc-8',
					title: 'Порядок заполнения полей карточки с образцами подписей и оттиска печати',
					url: 'https://slavbank.ru/wp-content/uploads/2021/03/poriadok_podpisi.doc',
					format: 'DOC',
					symbol: '→',
					opensInNewTab: true,
				},
			],
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Клиент может получать выписки по счету, справки о состоянии счета, дубликаты расчетных документов, а также оформлять документы для проведения операций в валюте Российской Федерации.',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'<strong>Более подробную информацию по обслуживанию счетов в валюте РФ можно получить по тел. (8162) 66-52-05, +7-921-201-47-00.</strong>',
		},
	],
];

export default createBodyEdit( TEMPLATE );
