import { InnerBlocks } from '@wordpress/block-editor';
import { createAction, createBadge } from '../hero-simple/edit';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'ЧАСТНЫМ ЛИЦАМ',
			kicker: '',
			description:
				'Кредитование физических лиц осуществляется в индивидуальном порядке.',
			pillItems: [
				{
					...createBadge(),
					text: 'FAQ',
					url: '/podderzhka-html/chasto-zadavaemye-voprosy.html/',
					linkMode: false,
				},
				{
					...createBadge(),
					text: 'Инструкция',
					url: '/podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html/',
					linkMode: false,
				},
				{
					...createBadge(),
					text: 'Частным лицам',
					url: '/chastnym-liczam.html/',
					linkMode: false,
				},
				{
					...createBadge(),
					text: 'ЭЦП',
					url: '/podderzhka-html/regen.html/',
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
					...createAction(),
					text: 'На главную',
					url: '/',
					linkMode: false,
				},
			],
		},
	],
	[ 'slav-bank/page-private-persons-bento', {} ],
];

export default function Edit() {
	return (
		<main id="main">
			<InnerBlocks template={ TEMPLATE } />
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
