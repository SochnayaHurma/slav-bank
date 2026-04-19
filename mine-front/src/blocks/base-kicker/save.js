import { RichText } from '@wordpress/block-editor';



export default function save({attributes}) {
	const {text} = attributes;
	return (
		<RichText.Content
		className="kicker"
		tagName='div'
		value={text}
		/>

	);
}