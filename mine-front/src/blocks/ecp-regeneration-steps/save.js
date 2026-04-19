import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeStepItem = ( item, index ) => ( {
	id: item?.id || `ecp-step-${ index }`,
	num: item?.num || String( index + 1 ).padStart( 2, '0' ),
	title: item?.title || '',
	text: item?.text || '',
} );

export default function save( { attributes } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items )
		? items.map( normalizeStepItem )
		: [];
	const blockProps = useBlockProps.save( {
		className: 'steps',
	} );

	return (
		<div { ...blockProps }>
			{ safeItems.map( ( item ) => (
				<div key={ item.id } className="step-card">
					<RichText.Content
						tagName="div"
						className="step-num"
						value={ item.num }
					/>
					<div>
						<RichText.Content
							tagName="div"
							className="step-title"
							value={ item.title }
						/>
						<RichText.Content
							tagName="div"
							className="muted"
							style={ { marginTop: '6px' } }
							value={ item.text }
						/>
					</div>
				</div>
			) ) }
		</div>
	);
}
