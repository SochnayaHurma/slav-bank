import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeDocumentItem = ( item, index ) => ( {
	id: item?.id || `page-document-${ index }`,
	title: item?.title || '',
	url: item?.url || '',
	format: item?.format || 'PDF',
	symbol: item?.symbol || '→',
	opensInNewTab: item?.opensInNewTab !== false,
} );

export default function save( { attributes } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items )
		? items.map( normalizeDocumentItem )
		: [];
	const blockProps = useBlockProps.save( {
		className: 'doc-shelf',
	} );

	return (
		<div { ...blockProps }>
			{ safeItems.map( ( item ) => (
				<a
					key={ item.id }
					className="doc-card"
					href={ item.url }
					target={ item.opensInNewTab ? '_blank' : undefined }
					rel={
						item.opensInNewTab ? 'noreferrer noopener' : undefined
					}
				>
					<RichText.Content
						tagName="span"
						className="doc-ext"
						value={ item.format }
					/>
					<RichText.Content
						tagName="span"
						className="doc-title"
						value={ item.title }
					/>
					<RichText.Content
						tagName="span"
						className="doc-arrow"
						value={ item.symbol }
					/>
				</a>
			) ) }
		</div>
	);
}
