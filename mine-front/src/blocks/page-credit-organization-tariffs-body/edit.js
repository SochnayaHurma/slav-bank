import { createBodyEdit } from '../page-pattern';

const PDF_URL =
	'https://slavbank.ru/wp-content/uploads/tarif-za-uslugi-kreditnym-organizatsiyam-1.pdf';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-pdf',
		{
			kicker: 'PDF-документ',
			title: 'Тарифы банковских услуг на услуги кредитным организациям',
			description: 'Откройте документ внутри страницы или скачайте файл.',
			url: PDF_URL,
			openText: 'Открыть',
			downloadText: 'Скачать',
			fallbackText:
				'Если PDF не отображается, используйте кнопку «Открыть».',
		},
	],
	[
		'slav-bank/page-pattern-documents',
		{
			items: [
				{
					id: 'credit-org-tariff-pdf',
					title: 'Скачать тарифы на услуги кредитным организациям',
					url: PDF_URL,
					format: 'PDF',
					symbol: '→',
					opensInNewTab: true,
				},
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
