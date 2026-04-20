import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[
		'slav-bank/body-write-to-bank',
		{},
	],
	[
		'slav-bank/bento-shell-sidebar',
		{},
	],
];


export const createFRef = () => ({
	id: `fRef-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	text: __('Заголовок...', 'acme-blocks'),
	url: '',
	opensInNewTab: false,
	linkMode: false,
	pageId: 0,
});

export default function Edit({ attributes, setAttributes }) {
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'bento',
		},
		{
			template: TEMPLATE,
		}
	);

	return (
		<section className="block dashv2" id="content">
			<div className="container">
				<div {...innerBlocksProps} />
			</div>
		</section>
	);
}