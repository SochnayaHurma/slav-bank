import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-pdf',
		{
			kicker: 'PDF-документ',
			title: 'Тарифы по операциям в иностранной валюте',
			description: 'Откройте внутри страницы или скачайте файл.',
			url: 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-13102025.pdf',
			openText: 'Открыть',
			downloadText: 'Скачать',
			fallbackText: 'Если PDF не отображается, используйте кнопку «Открыть».',
		},
	],
];

export default createBodyEdit( TEMPLATE );
