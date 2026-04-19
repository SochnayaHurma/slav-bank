import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps, BlockControls, HeadingLevelDropdown } from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}) {
	const {text} = attributes;
	return (
		<RichText 
		className="kicker"
		tagName='div'
		value={text}
		onChange={(value) => setAttributes({text: value})}
		/>
	);
}