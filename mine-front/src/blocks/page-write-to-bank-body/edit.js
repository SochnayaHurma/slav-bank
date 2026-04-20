import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Написать в банк' } ],
	[
		'core/paragraph',
		{
			content:
				'Эта область полностью редактируемая: добавляйте каналы связи, пояснения и регламент обработки обращений.',
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li>Канал связи 1</li><li>Канал связи 2</li><li>Канал связи 3</li></ul>',
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
		'core/paragraph',
		{
			content:
				'Ниже размещается шорткод Contact Form 7. Через него отображаются инпуты формы обратной связи.',
			className: 'muted',
		},
	],
	[
		'core/shortcode',
		{
			text: '[contact-form-7 title="Написать в банк"]',
		},
	],
];

export default createBodyEdit( TEMPLATE );
