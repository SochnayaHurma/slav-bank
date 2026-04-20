import { InnerBlocks } from '@wordpress/block-editor';
import { createAction, createBadge } from '../hero-simple/edit';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Отчетность',
			kicker: 'Информация банка',
			description:
				'Бухгалтерская (финансовая) отчетность раскрывается в ограниченном объёме в соответствии с Решением Совета директоров Банка России от 19 декабря 2025 года.',
			pillItems: [
				{
					...createBadge(),
					text: 'Реквизиты',
					url: 'https://slavbank.ru/rekvizity-banka/',
					linkMode: false,
				},
				{
					...createBadge(),
					text: 'Информация банка',
					url: 'https://slavbank.ru/informaciya-banka/',
					linkMode: false,
				},
			],
			actions: [
				{
					...createAction(),
					text: 'Содержание',
					url: '#content',
					linkMode: false,
				},
				{
					...createAction('outline'),
					text: 'На главную',
					url: '/',
					linkMode: false,
				},
			],
		},
	],
	[
		'slav-bank/body-reporting-bento',
		{},
	],
];

export default function Edit() {
	return (
		<main id="main">
			<InnerBlocks template={TEMPLATE} templateLock={false} />
			<div
				className="toast"
				role="status"
				aria-live="polite"
				aria-atomic="true"
				hidden
			>
				Готово
			</div>
		</main>
	);
}
