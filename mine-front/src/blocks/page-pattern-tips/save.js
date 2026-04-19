import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `page-tip-${ index }`,
	text: item?.text || '',
} );

export default function save( { attributes } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];
	const blockProps = useBlockProps.save( {
		className: 'tips',
	} );

	return (
		<div { ...blockProps }>
			{ safeItems.map( ( item ) => (
				<div key={ item.id } className="tip-card">
					<div className="tip-dot" aria-hidden="true"></div>
					<RichText.Content
						tagName="div"
						className="tip-text"
						value={ item.text }
					/>
				</div>
			) ) }
		</div>
	);
}
