import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { title, text, buttonText, url } = attributes;

	const blockProps = useBlockProps({
		className: 'theme-card',
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Настройки карточки', 'yourtheme')}>
					<TextControl
						label={__('Ссылка кнопки', 'yourtheme')}
						value={url}
						onChange={(value) => setAttributes({ url: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<article {...blockProps}>
				<RichText
					tagName="h3"
					className="theme-card__title"
					value={title}
					onChange={(value) => setAttributes({ title: value })}
					placeholder={__('Введите заголовок...', 'yourtheme')}
				/>

				<RichText
					tagName="p"
					className="theme-card__text"
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					placeholder={__('Введите текст...', 'yourtheme')}
				/>

				<div className="theme-card__footer">
					<RichText
						tagName="span"
						className="theme-card__button"
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
						allowedFormats={[]}
						placeholder={__('Текст кнопки...', 'yourtheme')}
					/>
				</div>
			</article>
		</>
	);
}