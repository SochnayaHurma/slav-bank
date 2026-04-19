import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const { title, content } = attributes;

	const blockProps = useBlockProps({
		className: 'sb-text-with-links',
	});

	return (
		<div {...blockProps}>
			<RichText
				tagName="h2"
				className="sb-text-with-links__title"
				value={title}
				allowedFormats={[]}
				placeholder="Введите заголовок"
				onChange={(value) => setAttributes({ title: value })}
			/>

			<RichText
				tagName="p"
				className="sb-text-with-links__content"
				value={content}
				placeholder="Введите текст. Любое слово можно выделить и сделать ссылкой."
				allowedFormats={[
					'core/bold',
					'core/italic',
					'core/link',
					'core/strikethrough',
				]}
				onChange={(value) => setAttributes({ content: value })}
			/>
		</div>
	);
}