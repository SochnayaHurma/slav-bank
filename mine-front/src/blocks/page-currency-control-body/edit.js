import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Валютный контроль',
			text: 'Оформление валютных операций и контроль документов в соответствии с требованиями законодательства.',
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'cc-1', text: 'Проверка документов по валютным операциям и внешнеторговым контрактам.' },
				{ id: 'cc-2', text: 'Консультации по заполнению документов валютного контроля.' },
				{ id: 'cc-3', text: 'Сопровождение переводов в иностранной валюте.' },
			],
		},
	],
	[
		'core/paragraph',
		{ content: '<strong>Для уточнения перечня документов используйте форму связи или обратитесь в банк.</strong>' },
	],
];

export default createBodyEdit( TEMPLATE );
