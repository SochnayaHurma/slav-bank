import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Заявки' } ],
	[
		'slav-bank/title',
		{
			title: 'Запрос на открытие расчетного счета',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Редактируемый контент страницы zapros-na-otkrytie-raschetnogo-scheta. Заполните актуальными блоками.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
