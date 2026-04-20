import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Заявки' } ],
	[ 'slav-bank/title', { title: 'Запрос на кредитование МСП', level: '2' } ],
	[
		'core/paragraph',
		{ content: 'Страница предназначена для редактируемой формы запроса на кредитование МСП и сопроводительной информации.', className: 'muted' },
	],
];

export default createBodyEdit( TEMPLATE );
