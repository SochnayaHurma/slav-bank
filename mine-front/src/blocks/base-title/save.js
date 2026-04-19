import { RichText } from '@wordpress/block-editor';



export default function save({attributes}) {
	const {title, level} = attributes;
	const TagName = `h${ level }`;
	return (
		<TagName>
			<RichText.Content
				style={{ padding: 'var(--s-4)', position: 'relative' }}
				tagName='strong'
				value={title}
				/>
		</TagName>

	);
}