import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Уведомление' } ],
	[
		'slav-bank/title',
		{
			title: 'Информация для нотариусов',
			level: '2',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'АО НКБ «СЛАВЯНБАНК» информирует о том, что не практикует выдачу доверенностей на бумажном носителе в простой письменной форме для целей направления нотариусу уведомлений о залоге.',
		},
	],
];

export default createBodyEdit( TEMPLATE );
