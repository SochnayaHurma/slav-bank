import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'theme-shell',
	});

	return (
		<section {...blockProps}>
			<InnerBlocks.Content />
		</section>
	);
}