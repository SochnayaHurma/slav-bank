import { RichText } from '@wordpress/block-editor';



export default function save({attributes}) {
	const {title, description, url} = attributes;
	return (
		<h3 className='prose entry-content'>
			<RichText.Content
	tagName='span'
	value={title}
			/>
				
			<RichText.Content
				tagName='a'
				value={description}
				href={url}
			/>

		</h3>

	);
}