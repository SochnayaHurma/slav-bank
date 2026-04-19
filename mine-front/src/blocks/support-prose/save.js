import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `support-prose-${ index }`,
	content: item?.content || '',
} );

export default function save( { attributes } ) {
	const { heading = '', items = [] } = attributes;
	const safeItems = Array.isArray( items )
		? items.map( normalizeItem ).filter( ( item ) => item.content )
		: [];
	const blockProps = useBlockProps.save( {
		className: 'prose',
	} );

	return (
		<div { ...blockProps }>
			<div className="entry-content">
				<hr />
				{ heading && (
					<h2>
						<RichText.Content tagName="strong" value={ heading } />
					</h2>
				) }
				{ safeItems.map( ( item ) => (
					<p key={ item.id }>
						<RichText.Content
							tagName="strong"
							value={ item.content }
						/>
					</p>
				) ) }
			</div>
		</div>
	);
}
