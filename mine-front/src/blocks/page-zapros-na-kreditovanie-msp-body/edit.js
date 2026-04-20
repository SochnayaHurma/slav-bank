import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Запрос на кредитование МСП' } ],
	[
		'core/heading',
		{
			level: 3,
			content: 'Форма обращения',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Ниже размещается шорткод Contact Form 7. Через него отображаются инпуты формы (наименование, ИНН, e-mail, телефон, дополнительная информация).',
			className: 'muted',
		},
	],
	[
		'core/shortcode',
		{
			text: '[contact-form-7 title="Запрос на кредитование МСП"]',
		},
	],
	[
		'core/heading',
		{
			level: 4,
			content: 'Согласие на обработку персональных данных',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Добавьте или отредактируйте текст согласия в этом блоке. Содержимое полностью редактируется из Gutenberg.',
			className: 'has-small-font-size',
		},
	],
];

export default createBodyEdit( TEMPLATE );
