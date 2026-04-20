import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-lead',
		{
			kicker: 'Запрос на кредитование МСП',
			text: 'Отправьте нам запрос на кредитование МСП в нашем банке. Специалисты банка свяжутся с вами в ближайшее время для уточнения информации.',
		},
	],
	[
		'slav-bank/page-pattern-contact-form',
		{
			anchor: 'form',
			title: 'Форма запроса на кредитование МСП',
			shortcode: '[contact-form-7 title="Запрос на кредитование МСП"]',
			fallbackText:
				'Форма запроса на кредитование МСП будет отображена после подключения Contact Form 7.',
		},
	],
	[ 'slav-bank/page-pattern-consent', {} ],
];

export default createBodyEdit( TEMPLATE );
