import {
	InspectorControls,
	RichText,
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';
import { PanelBody, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ALLOWED_FORMATS = [ 'core/bold', 'core/italic', 'core/link' ];

const ALLOWED_BLOCKS = [ 'contact-form-7/contact-form-selector' ];
export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { title, description, shortcode, fallbackText } = attributes;
	const blockProps = useBlockProps( {
		className: 'form-shell',
		'data-form-shell': true,
	} );

	return (
		<>
			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Contact Form 7', 'slav-bank' ) }
						initialOpen={ true }
					>
						<TextareaControl
							label={ __( 'Шорткод формы', 'slav-bank' ) }
							value={ shortcode }
							onChange={ ( value ) =>
								setAttributes( { shortcode: value } )
							}
							help={ __(
								'Например: [contact-form-7 title="Написать в банк"]',
								'slav-bank'
							) }
						/>
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				<RichText
					tagName="h3"
					value={ title }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) => setAttributes( { title: value } ) }
					placeholder={ __( 'Заголовок формы', 'slav-bank' ) }
				/>
				<RichText
					tagName="p"
					className="muted"
					value={ description }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { description: value } )
					}
					placeholder={ __( 'Короткое пояснение', 'slav-bank' ) }
				/>
				<div className="form-wrap">
					<div className="form-shortcode-note">
						<strong>{ __( 'Место для вставки contact form', 'slav-bank' ) }</strong>

						                        <InnerBlocks 
                            allowedBlocks={ ALLOWED_BLOCKS }
                            template={ [ [ 'contact-form-7/contact-form-selector' ] ] }
                        />
					</div>
				</div>
				<RichText
					tagName="p"
					className="muted form-fallback-text"
					value={ fallbackText }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { fallbackText: value } )
					}
					placeholder={ __( 'Текст fallback', 'slav-bank' ) }
				/>
			</div>
		</>
	);
}
