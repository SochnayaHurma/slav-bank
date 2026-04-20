import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Запрос на открытие расчетного счета' } ],
	[
		'core/paragraph',
		{
			content:
				'Отправьте нам запрос на открытие расчетного счета в нашем банке. Специалисты банка свяжутся с вами в ближайшее время для уточнения информации.',
		},
	],
	[
		'core/heading',
		{
			level: 3,
			content: 'Заполните форму и отправьте запрос прямо сейчас!',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Форма обращения размещается через shortcode (например Contact Form 7) и должна содержать поля: наименование организации/ИП, e-mail, контактный телефон и текст обращения.',
			className: 'muted',
		},
	],
	[
		'core/shortcode',
		{
			text: '[contact-form-7 id="277" title="Запрос на открытие расчетного счета"]',
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
