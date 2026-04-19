import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `page-chip-${ index }`,
	text: item?.text || '',
	url: item?.url || '',
	opensInNewTab: item?.opensInNewTab !== false,
} );

export default function save( { attributes } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];
	const blockProps = useBlockProps.save( {
		className: 'chip-row',
	} );

	return (
		<div { ...blockProps }>
			{ safeItems.map( ( item ) => (
				<RichText.Content
					key={ item.id }
					tagName="a"
					className="chip"
					href={ item.url }
					target={ item.opensInNewTab ? '_blank' : undefined }
					rel={
						item.opensInNewTab ? 'noreferrer noopener' : undefined
					}
					value={ item.text }
				/>
			) ) }
		</div>
	);
}
