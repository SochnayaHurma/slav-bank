import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {
		className: 'prose',
	} );

	return (
		<div { ...blockProps }>
			<div className="entry-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
