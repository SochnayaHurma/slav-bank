import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Дистанционное обслуживание' } ],
	[
		'slav-bank/title',
		{
			title: 'Клиент-Банк Online',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Редактируемый контент страницы client-bank-online. Заполните актуальными блоками.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
