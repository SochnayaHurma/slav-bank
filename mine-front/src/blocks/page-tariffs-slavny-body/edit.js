import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-pdf',
		{
			kicker: 'PDF-документ',
			title: 'Тарифы по операциям в рублях и иностранной валюте «Славный»',
			description: 'Откройте внутри страницы или скачайте файл.',
			url: 'https://slavbank.ru/wp-content/uploads/tp-slavny-s-13102025-po-28022026.pdf',
			openText: 'Открыть',
			downloadText: 'Скачать',
			fallbackText: 'Если PDF не отображается, используйте кнопку «Открыть».',
		},
	],
];

export default createBodyEdit( TEMPLATE );
