import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `page-check-${ index }`,
	text: item?.text || '',
} );

export default function save( { attributes } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];
	const blockProps = useBlockProps.save( {
		className: 'checks',
	} );

	return (
		<div { ...blockProps }>
			{ safeItems.map( ( item ) => (
				<div key={ item.id } className="check">
					<span className="check-ic">✓</span>
					<RichText.Content tagName="span" value={ item.text } />
				</div>
			) ) }
		</div>
	);
}
