import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Информация банка' } ],
	[
		'slav-bank/title',
		{
			title: 'Информация о банке',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Редактируемый контент страницы info-bank-page. Заполните актуальными блоками.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
