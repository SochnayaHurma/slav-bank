import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Заявки' } ],
	[ 'slav-bank/title', { title: 'Запрос на открытие расчетного счета', level: '2' } ],
	[
		'core/paragraph',
		{ content: 'Страница предназначена для редактируемой формы запроса на открытие расчетного счета и сопроводительной информации.', className: 'muted' },
	],
];

export default createBodyEdit( TEMPLATE );
