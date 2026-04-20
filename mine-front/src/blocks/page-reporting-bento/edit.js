import { useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[
		'slav-bank/body-reporting-body',
		{},
	],
	[
		'slav-bank/bento-shell-sidebar',
		{},
	],
];

export default function Edit() {
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