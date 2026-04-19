import { InnerBlocks } from '@wordpress/block-editor';
import { createAction, createBadge } from '../hero-simple/edit';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Часто задаваемые вопросы',
			kicker: 'Раздел',
			description:
				'Здесь вы найдете ответы на некоторые вопросы, возникающие при работе в системе Клиент-Банк. Стоит помнить, что сбои при входе или в работе системы Клиент-банк могут возникнуть из-за казалось бы незначительных на первый взгляд мелочей.',
			pillItems: [
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
	[ 'slav-bank/body-faq-bento', {} ],
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
