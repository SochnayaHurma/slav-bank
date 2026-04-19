import { createBodyEdit } from '../page-pattern';

const card = ( title, text ) => [
	'core/group',
	{ className: 'compliance-card' },
	[
		[ 'slav-bank/kicker', { text: title } ],
		[ 'core/paragraph', { className: 'compliance-text', content: text } ],
	],
];

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Комплаенс',
			text: 'Раздел о ПОД/ФТ/ФРОМУ и международных требованиях (включая FATCA).',
		},
	],
	[
		'core/group',
		{ className: 'compliance-grid' },
		[
			card( 'О чём раздел', 'I. ПРОТИВОДЕЙСТВИЕ ЛЕГАЛИЗАЦИИ ДОХОДОВ' ),
			card(
				'Кому важно',
				'АО НКБ «СЛАВЯНБАНК» ведет деятельность на территории Российской Федерации в соответствии с законодательством Российской Федерации и выданными Банком России лицензиями.'
			),
			card(
				'Что потребуется',
				'Убедительно просим вас проявлять осмотрительность в отношении ваших контрагентов, а также своевременно предоставлять необходимые документы и пояснения.'
			),
			card(
				'Как поможем',
				'Основной целью Закона FATCA является противодействие уклонению от налогообложения в США доходов Налогоплательщиков США.'
			),
		],
	],
	[ 'slav-bank/kicker', { text: 'Что полезно подготовить' } ],
	[
		'slav-bank/page-pattern-checks',
		{
			items: [
				{
					id: 'identify-clients',
					text: 'идентифицирует клиентов, их представителей, выгодоприобретателей, бенефициарных владельцев;',
				},
				{
					id: 'manage-risk',
					text: 'осуществляет управление риском легализации доходов и финансирования терроризма;',
				},
				{
					id: 'mass-destruction-financing',
					text: 'осуществляет меры противодействия финансированию распространения оружия массового уничтожения',
				},
				{
					id: 'document-information',
					text: 'осуществляет документальное фиксирование сведений (информации);',
				},
				{
					id: 'report-information',
					text: 'представляет сведения (информацию) в уполномоченный орган;',
				},
				{
					id: 'store-documents',
					text: 'осуществляет хранение документов и информации;',
				},
				{
					id: 'train-staff',
					text: 'проводит обучение кадров по вопросам ПОД/ФТ/ЭД/ФРОМУ.',
				},
				{
					id: 'born-usa',
					text: 'Вы родились в США; или',
				},
				{
					id: 'usa-citizen',
					text: 'Вы являетесь гражданином США или у вас есть грин-карта США; или',
				},
				{
					id: 'presence-test',
					text: 'Вы отвечаете критерию существенного присутствия.',
				},
			],
		},
	],
	[
		'slav-bank/page-pattern-chips',
		{
			items: [
				{
					id: 'w8ben',
					text: 'Анкета W-8BEN',
					url: 'https://slavbank.ru/wp-content/uploads/w-8ben.pdf',
					opensInNewTab: true,
				},
				{
					id: 'msocom',
					text: '[u2]',
					url: 'https://slavbank.ru/pod-ft-fromu.html#_msocom_2',
					opensInNewTab: true,
				},
			],
		},
	],
	[ 'slav-bank/kicker', { text: 'Документы' } ],
	[
		'slav-bank/page-pattern-documents',
		{
			items: [
				{
					id: 'w8ben',
					title: 'Анкета W-8BEN',
					url: 'https://slavbank.ru/wp-content/uploads/w-8ben.pdf',
					format: 'PDF',
					symbol: '→',
					opensInNewTab: true,
				},
			],
		},
	],
	[ 'slav-bank/kicker', { text: 'Текст страницы' } ],
	[ 'slav-bank/aml-fatca-text', {} ],
];

export default createBodyEdit( TEMPLATE );
