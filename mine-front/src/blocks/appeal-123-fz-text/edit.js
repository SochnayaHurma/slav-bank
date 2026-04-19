import { createProseEdit } from '../page-pattern';

const paragraph = ( content, attributes = {} ) => [
	'core/paragraph',
	{
		content,
		...attributes,
	},
];

const group = ( className, innerBlocks ) => [
	'core/group',
	{ className },
	innerBlocks,
];

const TEMPLATE = [
	group( 'has-background', [
		paragraph( '<strong>Обращение по 123-ФЗ</strong>', {
			className: 'has-text-color has-link-color has-huge-font-size',
		} ),
		paragraph( 'О финансовом уполномоченном и обращении к нему' ),
	] ),
	paragraph(
		'Если у вас есть спор с банком, который не решается в вашу пользу, можно обратиться к финансовому уполномоченному. Новый досудебный порядок применяется к спорам от 1 января 2021 года и суммой до 500 000 ₽.'
	),
	paragraph(
		'<strong>Обращение можно отправить </strong>через личный кабинет на сайте финансового уполномоченного по адресу: <a href="https://finombudsman.ru/lk/login." target="_blank" rel="noreferrer noopener">https://finombudsman.ru/lk/login.</a>'
	),
	paragraph(
		'<strong>Важно</strong>: по закону <strong>(<a href="https://finombudsman.ru/kb/glossarij/zakon-123-fz.html">№ 123-ФЗ от 04.06.2018</a>)</strong>, если вы ещё не составляли обращение в банке, вам нужно сделать это до обращения к финансовому уполномоченному. Чтобы рассмотреть обращение, нам потребуется заявление с вашей подписью и документы, которые помогут разобраться в ситуации.'
	),
	group( '', [
		group( 'has-background', [
			paragraph(
				'Отправьте заявление и документы на <a href="mailto:nkb@slavbank.ru" target="_blank" rel="noreferrer noopener"><strong>nkb@slavbank.ru</strong></a> и позвоните по телефону: +7 (8162) 66-52-47.'
			),
			paragraph(
				'Подробнее о том, как подать обращение к финансовому уполномоченному, можно узнать здесь:'
			),
		] ),
	] ),
	[
		'slav-bank/page-pattern-list',
		{
			extraClass: 'has-background',
			items: [
				{
					id: 'site',
					text: 'официальный сайт финансового уполномоченного <a href="https://finombudsman.ru/">https://finombudsman.ru</a>/;',
				},
				{
					id: 'phone',
					text: 'номер телефона службы: 8 800 200 00 10, по России бесплатно;',
				},
				{
					id: 'location',
					text: 'место нахождения службы: 119 017, Москва, Старомонетный переулок, дом 3;',
				},
				{
					id: 'mail',
					text: 'почтовый адрес службы: 119 017, Москва, Старомонетный переулок, дом 3, получатель АНО «СОДФУ».',
				},
			],
		},
	],
];

export default createProseEdit( TEMPLATE );
