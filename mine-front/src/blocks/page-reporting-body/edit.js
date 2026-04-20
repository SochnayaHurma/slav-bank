import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/page-pattern-alert',
		{
			title: 'Отчетность',
			text: 'Годовая бухгалтерская (финансовая) отчетность АО НКБ «СЛАВЯНБАНК».',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Документы отчетности публикуются в формате PDF и поддерживаются как редактируемый список карточек документов.',
			className: 'muted',
		},
	],
];

export default createBodyEdit( TEMPLATE );
