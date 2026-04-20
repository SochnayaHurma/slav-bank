import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Информация для нотариусов',
			kicker: 'Информация банка',
			description:
				'АО НКБ «СЛАВЯНБАНК» информирует о том, что не практикует выдачу доверенностей на бумажном носителе в простой письменной форме для целей направления нотариусу уведомлений о залоге.',
			pillItems: [
				heroBadge( 'Реквизиты', '/o-banke-slavyanbank-html/rekvizity-banka.html/' ),
				heroBadge( 'Информация банка', '/o-banke-slavyanbank-html/o-banke-slavyanbank-html-info_bank-html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	// [ 'slav-bank/body-notaries-bento', {} ],
];

export default createPageEdit( TEMPLATE );
