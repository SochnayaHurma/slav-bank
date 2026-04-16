import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, text, buttonText, url } = attributes;

	const blockProps = useBlockProps.save({
		className: 'theme-card',
	});

	return (
		<article {...blockProps}>
			<RichText.Content
				tagName="h3"
				className="theme-card__title"
				value={title}
			/>

			<RichText.Content
				tagName="p"
				className="theme-card__text"
				value={text}
			/>

			<div className="theme-card__footer">
				<a className="theme-card__button" href={url || '#'}>
					{buttonText}
				</a>
			</div>
		</article>
	);
}