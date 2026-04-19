import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps, BlockControls, HeadingLevelDropdown } from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}) {
	const {title, level} = attributes;
	const TagName = `h${ level }`;

	return (
		<>
			<BlockControls>
				<HeadingLevelDropdown
					value={ level }
					onChange={ (newLevel) => setAttributes({ level: newLevel })}
				/>
			</BlockControls>
			<TagName>
				<RichText 
					style={{ padding: 'var(--s-4)', position: 'relative' }}
					tagName='strong'
					value={title}
					onChange={(value) => setAttributes({title: value})}
					/>
			</TagName>
		</>

	);
}