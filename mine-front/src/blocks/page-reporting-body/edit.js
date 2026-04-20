import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Информация банка' } ],
	[
		'slav-bank/title',
		{
			title: 'Отчетность',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Редактируемый контент страницы reporting. Заполните актуальными блоками.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
