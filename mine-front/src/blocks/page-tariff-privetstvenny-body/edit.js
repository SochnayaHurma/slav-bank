import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-pdf',
		{
			kicker: 'PDF-документ',
			title: 'Тарифы банка в валюте РФ и иностранной валюте «Приветственный»',
			description: 'Откройте внутри страницы или скачайте файл.',
			url: 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf',
			openText: 'Открыть',
			downloadText: 'Скачать',
			fallbackText: 'Если PDF не отображается, используйте кнопку «Открыть».',
		},
	],
];

export default createBodyEdit( TEMPLATE );
