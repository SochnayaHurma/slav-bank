import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Тарифы' } ],
	[ 'slav-bank/title', { title: 'Тарифы банка', level: '2' } ],
	[
		'core/paragraph',
		{
			content:
				'Выберите нужный раздел тарифов. Каждый раздел поддерживает редактирование карточек документов и ссылок в Gutenberg.',
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li><a href="/tariffs-rub/">Тарифы по операциям в валюте РФ</a></li><li><a href="/tariffs-foreign-currency/">Тарифы по операциям в иностранной валюте</a></li><li><a href="/tariff-privetstvenny/">Тариф «Приветственный»</a></li><li><a href="/tariffs-slavny/">Тариф «Славный»</a></li><li><a href="/tariff-depositny/">Тариф «Депозитный»</a></li></ul>',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Перед публикацией проверяйте соответствие тарифных документов действующим условиям банка и внутренним регламентам.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
