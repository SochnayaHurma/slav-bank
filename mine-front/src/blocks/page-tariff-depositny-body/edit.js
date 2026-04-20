import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-pdf',
		{
			kicker: 'PDF-документ',
			title: 'Тарифы по операциям в рублях и иностранной валюте «Депозитный»',
			description: 'Откройте внутри страницы или скачайте файл.',
			url: 'https://slavbank.ru/wp-content/uploads/tarif-depositny-1.pdf',
			openText: 'Открыть',
			downloadText: 'Скачать',
			fallbackText:
				'Если PDF не отображается, используйте кнопку «Открыть».',
		},
	],
];

export default createBodyEdit( TEMPLATE );
