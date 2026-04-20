import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Депозиты для юридических лиц',
			text: 'Ставка до 14,5%',
		},
	],
	[
		'slav-bank/page-pattern-checks',
		{
			items: [
				{ id: 'deposit-1', text: 'Ежемесячная выплата процентов' },
				{ id: 'deposit-2', text: 'Плавающая или фиксированная процентная ставка' },
				{ id: 'deposit-3', text: 'Бонус — начисление процентов на остаток' },
			],
		},
	],
	[
		'core/paragraph',
		{
			content: '<strong>Новым клиентам: <a href="https://slavbank.ru/wp-content/uploads/tarif-depositny-1.pdf">специальное предложение по обслуживанию счета</a>.</strong>',
		},
	],
	[
		'core/paragraph',
		{
			content: '<em><strong>Более подробную информацию можно получить по телефонам: (8162) 66-52-47 или +7 921-730-07-01.</strong></em>',
		},
	],
];

export default createBodyEdit( TEMPLATE );
