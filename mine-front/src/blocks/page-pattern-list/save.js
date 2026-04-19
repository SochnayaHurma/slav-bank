import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `page-list-item-${ index }`,
	text: item?.text || '',
} );

export default function save( { attributes } ) {
	const { items = [], extraClass = '' } = attributes;
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];
	const blockProps = useBlockProps.save( {
		className: [ 'wp-block-list', extraClass ]
			.filter( Boolean )
			.join( ' ' ),
	} );

	return (
		<ul { ...blockProps }>
			{ safeItems.map( ( item ) => (
				<li key={ item.id }>
					<RichText.Content tagName="span" value={ item.text } />
				</li>
			) ) }
		</ul>
	);
}
