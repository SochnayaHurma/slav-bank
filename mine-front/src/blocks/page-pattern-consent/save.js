import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `consent-item-${ index }`,
	text: item?.text || '',
} );

export default function save( { attributes } ) {
	const {
		leadText,
		intro,
		text,
		processingText,
		purposeText,
		channelsText,
		durationText,
		rightsIntro,
		items = [],
		legalText,
		closingText,
	} = attributes;
	const durationValue = durationText || legalText;
	const firstParagraph =
		leadText || [ intro, text ].filter( Boolean ).join( '<br><br>' );
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];
	const blockProps = useBlockProps.save( {
		className: 'form-consent',
	} );

	return (
		<section { ...blockProps }>
			{ firstParagraph && (
				<RichText.Content
					tagName="p"
					className="has-small-font-size"
					value={ firstParagraph }
				/>
			) }
			{ processingText && (
				<RichText.Content
					tagName="p"
					className="has-small-font-size"
					value={ processingText }
				/>
			) }
			{ purposeText && (
				<RichText.Content
					tagName="p"
					className="has-small-font-size"
					value={ purposeText }
				/>
			) }
			{ channelsText && (
				<RichText.Content
					tagName="p"
					className="has-small-font-size"
					value={ channelsText }
				/>
			) }
			{ durationValue && (
				<RichText.Content
					tagName="p"
					className="has-small-font-size"
					value={ durationValue }
				/>
			) }
			{ rightsIntro && (
				<RichText.Content
					tagName="p"
					className="has-small-font-size"
					value={ rightsIntro }
				/>
			) }
			{ safeItems.length > 0 && (
				<ul className="wp-block-list has-small-font-size">
					{ safeItems.map( ( item ) => (
						<li key={ item.id } className="has-small-font-size">
							<RichText.Content
								tagName="span"
								value={ item.text }
							/>
						</li>
					) ) }
				</ul>
			) }
			{ closingText && (
				<RichText.Content
					tagName="p"
					className="has-small-font-size"
					value={ closingText }
				/>
			) }
		</section>
	);
}
