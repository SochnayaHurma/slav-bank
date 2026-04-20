import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Написать в банк' } ],
	[
		'core/paragraph',
		{
			content:
				'Направьте обращение в АО НКБ «СЛАВЯНБАНК» удобным способом. Банк рассматривает обращения в порядке и сроки, установленные законодательством и внутренними регламентами.',
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li>Отправка через форму обратной связи на сайте.</li><li>Направление обращения на e-mail <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>.</li><li>Личное обращение в офис банка.</li><li>Направление почтовой корреспонденции.</li></ul>',
		},
	],
	[
		'core/heading',
		{
			level: 3,
			content: 'Форма обращения',
		},
	],
	[
		'core/shortcode',
		{
			text: '[contact-form-7 title="Написать в банк"]',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'При направлении обращения через интернет-форму укажите контактные данные для обратной связи и суть обращения. При необходимости приложите подтверждающие документы.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
