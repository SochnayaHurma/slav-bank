import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps, BlockControls, HeadingLevelDropdown } from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}) {
	const {
		title,
		description

	} = attributes;
	return (
			<div className="kicker doc-card " data-title="Заголовок" style={{marginTop: "10px", marginBottom: "10px"}}>
                <RichText value={title}
				tagName='h4'

							onChange={value => setAttributes({title: value})} />

                  <RichText 
				  tagName='strong'
				  	className="fine" 
				  	style={{ fontSize: '14px', marginTop: "0" }}
					onChange={value => setAttributes({description: value})}
					value={description}
				  />
              </div>
	);
}