import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `lead-item-${ index }`,
	text: item?.text || '',
} );

export default function save( { attributes } ) {
	const { kicker, title, text, items = [] } = attributes;
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];
	const blockProps = useBlockProps.save( {
		className: 'v3-photo-card reveal is-in',
		'data-reveal': 'left',
	} );

	return (
		<div { ...blockProps }>
			<div className="v3-photo-caption glass">
				{ kicker && (
					<RichText.Content
						tagName="div"
						className="v3-kicker"
						value={ kicker }
					/>
				) }
				{ title && <RichText.Content tagName="h3" value={ title } /> }
				{ text && (
					<RichText.Content
						tagName="div"
						className="v3-lead-text"
						value={ text }
					/>
				) }
				{ safeItems.map( ( item ) => (
					<RichText.Content
						key={ item.id }
						tagName="p"
						value={ item.text }
					/>
				) ) }
			</div>
		</div>
	);
}
