import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'core/paragraph',
		{
			content:
				'Если вы <strong>активный, инициативный и целеустремленный</strong> человек, желающий работать и зарабатывать, мы всегда <strong>открыты для диалога</strong> с вами. Даже при отсутствии актуальных вакансий вы можете прислать нам своё резюме и мы обязательно его рассмотрим.',
		},
	],
	[
		'slav-bank/title',
		{
			title: 'Преимущества работы в АО НКБ «СЛАВЯНБАНК»',
			level: '3',
		},
	],
	[
		'slav-bank/page-pattern-checks',
		{
			items: [
				{ id: 'vacancy-1', text: 'Трудоустройство в соответствии с ТК РФ' },
				{ id: 'vacancy-2', text: 'Комфортные условия труда' },
				{ id: 'vacancy-3', text: 'Стабильная выплата заработной платы (два раза в месяц)' },
				{ id: 'vacancy-4', text: 'Возможности профессионального и карьерного роста' },
				{ id: 'vacancy-5', text: 'Дружный коллектив' },
				{ id: 'vacancy-6', text: 'Участие в вебинарах и семинарах' },
			],
		},
	],
	[
		'core/image',
		{
			url: 'https://slavbank.ru/wp-content/uploads/work.jpg',
			alt: 'Вакансии АО НКБ «СЛАВЯНБАНК»',
			caption: 'Вакансии АО НКБ «СЛАВЯНБАНК»',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'<a href="mailto:nkb@slavbank.ru"><strong>Отправить резюме</strong></a> или связаться с нами по <strong><a href="/kontakty.html/">контактным телефонам</a></strong>.',
		},
	],
];

export default createBodyEdit( TEMPLATE );
