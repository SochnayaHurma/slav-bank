import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-lead',
		{
			kicker: 'Запрос на открытие расчетного счета',
			text: 'Отправьте нам запрос на открытие расчетного счета в нашем банке. Специалисты банка свяжутся с вами в ближайшее время для уточнения информации.',
		},
	],
	[
		'slav-bank/page-pattern-contact-form',
		{
			anchor: 'form',
			title: 'Заполните форму и отправьте запрос прямо сейчас!',
			shortcode:
				'[contact-form-7 title="Запрос на открытие расчетного счета"]',
			fallbackText:
				'Форма запроса на открытие расчетного счета будет отображена после подключения Contact Form 7.',
		},
	],
	[ 'slav-bank/page-pattern-consent', {} ],
];

export default createBodyEdit( TEMPLATE );
