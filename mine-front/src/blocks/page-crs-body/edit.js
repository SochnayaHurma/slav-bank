import { createBodyEdit } from '../page-pattern';

const DOCS = [
	{
		id: 'crs-fns',
		title: 'по ссылке',
		url: 'https://data.nalog.ru/html/sites/www.340fzreport.nalog.ru/doc/a_obmen_info_v092020.pdf',
		format: 'PDF',
		symbol: '→',
		opensInNewTab: true,
	},
];

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'CRS',
			text: 'CRS — международный обмен информацией о финансовых счетах. Раздел содержит материалы и пояснения.',
		},
	],
	[ 'slav-bank/crs-text', {} ],
	[ 'slav-bank/kicker', { text: 'Ресурсы' } ],
	[ 'slav-bank/page-pattern-documents', { items: DOCS } ],
];

export default createBodyEdit( TEMPLATE );
