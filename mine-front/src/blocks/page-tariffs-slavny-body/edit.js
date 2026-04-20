import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Тарифы' } ],
	[
		'slav-bank/title',
		{
			title: 'Тариф Славный',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Редактируемый контент страницы tariffs-slavny. Заполните актуальными блоками.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
