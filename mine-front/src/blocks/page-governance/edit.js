import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Органы управления',
			kicker: 'Информация банка',
			description:
				'На основании решения Совета директоров Банка России от 22.12.2023г. и решения Совета директоров АО НКБ «СЛАВЯНБАНК» от 08.02.2024г. информация о членах органов управления и иных должностных лицах банка не раскрывается.',
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
	// [ 'slav-bank/body-governance-bento', {} ],
];

export default createPageEdit( TEMPLATE );
