import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {
		className: 'bento-card',
		style: { padding: 'var(--s-4)', position: 'relative' },
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
