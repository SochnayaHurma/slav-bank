import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeServiceItem = ( item, index ) => ( {
	id: item?.id || `private-service-${ index }`,
	title: item?.shortTitle || item?.title || '',
	url: item?.url || '',
	label: item?.label || 'Подробнее →',
	opensInNewTab: item?.opensInNewTab !== false,
} );

export default function save( { attributes } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items )
		? items.map( normalizeServiceItem )
		: [];
	const blockProps = useBlockProps.save( {
		className: 'services',
	} );

	return (
		<div { ...blockProps }>
			{ safeItems.map( ( item ) => (
				<a
					key={ item.id }
					className="service-card"
					href={ item.url }
					target={ item.opensInNewTab ? '_blank' : undefined }
					rel={ item.opensInNewTab ? 'noopener' : undefined }
				>
					<RichText.Content
						tagName="div"
						className="service-title"
						value={ item.title }
					/>
					<RichText.Content
						tagName="div"
						className="muted"
						style={ { marginTop: '6px' } }
						value={ item.label }
					/>
				</a>
			) ) }
		</div>
	);
}
