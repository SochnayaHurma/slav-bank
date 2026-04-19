import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {
		className: 'block dashv2',
		id: 'content',
	} );

	return (
		<section { ...blockProps }>
			<div className="container">
				<div className="bento">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
}
