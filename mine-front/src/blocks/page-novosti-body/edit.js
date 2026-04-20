import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Новости',
			text: 'Официальные новости банка: режим работы, изменения тарифов и важные объявления.',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Лента новостей заполняется публикациями WordPress и фильтруется на стороне страницы новостей.',
			className: 'muted',
		},
	],
	[
		'slav-bank/page-pattern-list',
		{
			items: [
				{ id: 'news-1', text: 'Изменения тарифов и условий обслуживания.' },
				{ id: 'news-2', text: 'Режим работы банка в праздничные и предпраздничные дни.' },
				{ id: 'news-3', text: 'Технические уведомления по дистанционным сервисам.' },
			],
		},
	],
];

export default createBodyEdit( TEMPLATE );
