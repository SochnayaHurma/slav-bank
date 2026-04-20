import { createPageEdit, heroAction } from '../page-pattern';

const TEMPLATE = [
	// [
	// 	'slav-bank/hero-simple',
	// 	{
	// 		title: 'Запрос на кредитование МСП',
	// 		kicker: 'Заявки',
	// 		description:
	// 			'Оставьте заявку на кредитование малого или среднего бизнеса. Банк рассмотрит обращение и свяжется с вами.',
	// 		actions: [
	// 			heroAction( 'Заполнить форму', '#form' ),
	// 			heroAction( 'На главную', '/' ),
	// 		],
	// 	},
	// ],
	[ 'slav-bank/body-zapros-na-kreditovanie-msp-bento', {} ],
];

export default createPageEdit( TEMPLATE );
