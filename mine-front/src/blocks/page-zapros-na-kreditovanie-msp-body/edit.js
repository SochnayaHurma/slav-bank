import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Форма запроса на кредитование МСП' } ],
	[
		'core/heading',
		{
			level: 3,
			content: 'Форма запроса на кредитование СМП',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Форма обращения размещается через shortcode (например Contact Form 7) и должна содержать поля: наименование организации/ИП, ИНН, e-mail, телефон и дополнительную информацию о кредите.',
			className: 'muted',
		},
	],
	[
		'core/shortcode',
		{
			text: '[contact-form-7 id="21599" title="Запрос на кредитование МСП"]',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Рекомендуемые данные для заполнения: 1) запрашиваемая сумма, 2) срок кредитования, 3) выручка за период, 4) возможное обеспечение.',
		},
	],
	[ 'slav-bank/kicker', { text: 'Согласие на обработку персональных данных' } ],
	[
		'core/paragraph',
		{
			content:
				'Я, действуя свободно, своей волей и в своем интересе, выражаю согласие АО НКБ «СЛАВЯНБАНК» на обработку моих персональных данных для рассмотрения обращения и направления ответа.',
			className: 'has-small-font-size',
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li>право на получение сведений о персональных данных, обрабатываемых Банком;</li><li>право на удаление, уточнение или исправление персональных данных;</li><li>иные права, предусмотренные законодательством Российской Федерации.</li></ul>',
			className: 'has-small-font-size',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Согласие может быть отозвано в любое время по e-mail <a href="mailto:nkb@slavbnak.ru">nkb@slavbnak.ru</a> или письменным заявлением в адрес АО НКБ «СЛАВЯНБАНК».',
			className: 'has-small-font-size',
		},
	],
];

export default createBodyEdit( TEMPLATE );
