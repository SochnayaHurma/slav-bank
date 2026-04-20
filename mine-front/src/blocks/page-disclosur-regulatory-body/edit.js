import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Раскрытие информации для регулятивных целей',
			text: 'Публикация сведений о принимаемых рисках, процедурах их оценки, управления рисками и капиталом.',
		},
	],
	[
		'slav-bank/page-pattern-documents',
		{
			items: [
				{ id: 'dr-1', title: 'Информация о принимаемых рисках за I квартал 2018 г.', url: 'https://slavbank.ru/wp-content/uploads/2021/03/riski_publ12018.pdf', format: 'PDF', symbol: '→', opensInNewTab: true },
				{ id: 'dr-2', title: 'Информация о принимаемых рисках за I полугодие 2018 г.', url: 'https://slavbank.ru/wp-content/uploads/2021/03/riski_publ22018.pdf', format: 'PDF', symbol: '→', opensInNewTab: true },
				{ id: 'dr-3', title: 'Основные характеристики инструментов капитала', url: 'https://slavbank.ru/wp-content/uploads/2021/03/reg_inf.zip', format: 'ZIP', symbol: '→', opensInNewTab: true },
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
