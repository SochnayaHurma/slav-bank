import { createBodyEdit } from '../page-pattern';

const FILE_URL = 'https://slavbank.ru/wp-content/uploads/obyavlenie.xls';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Файл объявления на взнос наличными',
			text: 'Скачайте файл «obyavlenie.xls» и сохраните его на своем компьютере перед заполнением.',
		},
	],
	[
		'slav-bank/page-pattern-chips',
		{
			items: [
				{
					id: 'cash-contribution-xls',
					text: 'Скачать obyavlenie.xls',
					url: FILE_URL,
					opensInNewTab: true,
				},
			],
		},
	],
	[ 'slav-bank/title', { title: 'Настройки для работы файла', level: '3' } ],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{
					id: 'cash-instruction-1',
					text: 'Уровень безопасности макросов в Microsoft Excel должен соответствовать значению «Средняя».',
				},
				{
					id: 'cash-instruction-2',
					text: 'В региональных параметрах операционной системы разделитель целой и дробной части должен быть точкой.',
				},
				{
					id: 'cash-instruction-3',
					text: 'При запуске файла на предупреждение Microsoft Excel нужно ответить: «Не отключать макросы».',
				},
			],
		},
	],
	[
		'core/paragraph',
		{
			content:
				'При работе с файлом <strong>«obyavlenie.xls»</strong> следует заполнять только нижнюю часть «<strong>Ордер</strong>». Красный треугольник в левой верхней части ячейки означает подсказку.',
		},
	],
	[ 'slav-bank/title', { title: 'Важно при заполнении суммы', level: '3' } ],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{
					id: 'cash-sum-1',
					text: 'Если сумма указывается только в рублях, копейки заменяются знаком <strong>=</strong>. Пример: 100 рублей 00 копеек указывается как 100=.',
				},
				{
					id: 'cash-sum-2',
					text: 'Если сумма указывается с копейками, разделитель рублей и копеек указывается знаком <strong>-</strong>. Пример: 100 рублей 01 копейка указывается как 100-01.',
				},
			],
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Запустите файл <strong>«obyavlenie.xls»</strong> и заполните его, следуя инструкциям выше.',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'По всем вопросам обращайтесь в <strong>АО НКБ «СЛАВЯНБАНК»</strong> по телефону <strong>665-195</strong>.',
			className: 'has-dark-blue-color has-text-color',
		},
	],
];

export default createBodyEdit( TEMPLATE );
