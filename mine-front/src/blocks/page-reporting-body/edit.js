import { createBodyEdit } from '../page-pattern';

const YEARLY_REPORTS = [
	{
		id: 'year-2024',
		title: 'Годовая бухгалтерская (финансовая) отчетность за 2024 год.',
		url: 'https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf',
		format: 'PDF',
		symbol: '→',
		opensInNewTab: true,
	},
	{
		id: 'year-2023',
		title: 'Годовая бухгалтерская (финансовая) отчетность за 2023 год.',
		url: 'https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf',
		format: 'PDF',
		symbol: '→',
		opensInNewTab: true,
	},
	{
		id: 'year-2022',
		title: 'Годовая бухгалтерская (финансовая) отчетность за 2022 год.',
		url: 'https://slavbank.ru/wp-content/uploads/otchet2022.pdf',
		format: 'PDF',
		symbol: '→',
		opensInNewTab: true,
	},
	{
		id: 'year-2020',
		title: 'Годовая бухгалтерская (финансовая) отчетность за 2020 год.',
		url: 'https://slavbank.ru/wp-content/uploads/otchet2020.pdf',
		format: 'PDF',
		symbol: '→',
		opensInNewTab: true,
	},
];

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Раскрытие финансовой информации' } ],
	[ 'slav-bank/title', { title: 'Отчетность', level: '2' } ],
	[
		'core/paragraph',
		{
			content:
				'Бухгалтерская (финансовая) отчетность раскрывается в ограниченном объеме в соответствии с Решением Совета директоров Банка России от 24 декабря 2024 года.',
		},
	],
	[ 'slav-bank/kicker', { text: 'Годовая отчетность' } ],
	[ 'slav-bank/page-pattern-documents', { items: YEARLY_REPORTS } ],
	[
		'core/details',
		{ summary: 'Промежуточная бухгалтерская (финансовая) отчетность за 2025 год' },
		[
			[ 'core/list', { values: '<ul><li><a href="https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf">I квартал 2025 г. (опубликовано 16.05.2025)</a></li><li><a href="https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf">I полугодие 2025 г. (опубликовано 07.08.2025)</a></li><li><a href="https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf">9 месяцев 2025 г. (опубликовано 12.11.2025)</a></li></ul>' } ],
		],
	],
	[
		'core/details',
		{ summary: 'Промежуточная бухгалтерская (финансовая) отчетность за 2024 год' },
		[
			[ 'core/list', { values: '<ul><li><a href="https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf">I квартал 2024 г. (опубликовано 16.05.2024)</a></li><li><a href="https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf">I полугодие 2024 г. (опубликовано 09.08.2024)</a></li><li><a href="https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf">9 месяцев 2024 г. (опубликовано 08.11.2024)</a></li></ul>' } ],
		],
	],
	[
		'core/details',
		{ summary: 'Промежуточная бухгалтерская (финансовая) отчетность за 2023 год' },
		[
			[ 'core/list', { values: '<ul><li><a href="https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf">I квартал 2023 г. (опубликовано 15.05.2023)</a></li><li><a href="https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf">I полугодие 2023 г. (опубликовано 02.08.2023)</a></li><li><a href="https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf">9 месяцев 2023 г. (опубликовано 07.11.2023)</a></li></ul>' } ],
		],
	],
];

export default createBodyEdit( TEMPLATE );
