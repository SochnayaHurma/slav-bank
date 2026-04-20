import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Раскрытие финансовой информации' } ],
	[ 'slav-bank/title', { title: 'Отчетность', level: '2' } ],
	[
		'core/paragraph',
		{
			content:
				'На странице публикуется годовая бухгалтерская (финансовая) отчетность АО НКБ «СЛАВЯНБАНК», а также сопутствующие раскрытия.',
		},
	],
	[
		'core/list',
		{
			values:
				'<ul><li>годовая бухгалтерская (финансовая) отчетность</li><li>аудиторские заключения</li><li>архивные публикации по отчетным периодам</li></ul>',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Документы размещаются в формате PDF и поддерживаются как редактируемый список карточек документов.',
			className: 'muted',
		},
	],
	[
		'core/buttons',
		{},
		[
			[
				'core/button',
				{
					text: 'Скачать актуальную отчетность',
					url: '/reporting/',
				},
			],
		],
	],
];

export default createBodyEdit( TEMPLATE );
