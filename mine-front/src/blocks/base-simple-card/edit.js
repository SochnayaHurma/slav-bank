import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps, BlockControls, HeadingLevelDropdown } from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}) {
	const {
		title,
		description

	} = attributes;
	return (
              <div className="doc-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
			  	<RichText 
					value={title}
							onChange={value => setAttributes({title: value})}
				/>
                    <strong>
						<RichText 
							className="fine" 
							style={{ fontSize: '14px' }}
							value={description}
							onChange={value => setAttributes({description: value})}
						/>
					</strong>
              </div>
	);
}