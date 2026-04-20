import { RichText } from '@wordpress/block-editor';



export default function save({attributes}) {
	const {text, variant, url, blockWidth} = attributes;
	return (
		<RichText.Content
                style={{ width: blockWidth + '%' }}
			href={url}
			className={ variant ? `btn ${variant}` : 'btn'}
			tagName='a'
			value={text}
		/>

	);
}