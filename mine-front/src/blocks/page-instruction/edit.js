import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Инструкция по работе в системе Клиент-Банк',
			kicker: 'Поддержка',
			description: 'Краткая инструкция и ключевые материалы для работы в системе Клиент-Банк.',
			pillItems: [
				heroBadge( 'FAQ', '/podderzhka-html/chasto-zadavaemye-voprosy.html/' ),
				heroBadge( 'Частным лицам', '/chastnym-liczam.html/' ),
				heroBadge( 'ЭЦП', '/podderzhka-html/regen.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-instruction-bento', {} ],
];

export default createPageEdit( TEMPLATE );
