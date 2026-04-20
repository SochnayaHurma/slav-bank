import {
	InspectorControls,
	LinkControl,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ALLOWED_FORMATS = [ 'core/bold', 'core/italic', 'core/link' ];

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const {
		kicker,
		title,
		description,
		url,
		openText,
		downloadText,
		fallbackText,
	} = attributes;
	const blockProps = useBlockProps( {
		className: 'pdf-shell',
	} );
	const previewUrl = url ? `${ url }#view=FitH` : '';

	return (
		<>
			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'PDF-файл', 'slav-bank' ) }
						initialOpen={ true }
					>
						<LinkControl
							value={ { url } }
							onChange={ ( value ) =>
								setAttributes( { url: value?.url || '' } )
							}
						/>
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				<div className="pdf-head">
					<div>
						<RichText
							tagName="div"
							className="kicker"
							value={ kicker }
							allowedFormats={ ALLOWED_FORMATS }
							onChange={ ( value ) =>
								setAttributes( { kicker: value } )
							}
						/>
						<RichText
							tagName="div"
							className="pdf-title"
							value={ title }
							allowedFormats={ ALLOWED_FORMATS }
							onChange={ ( value ) =>
								setAttributes( { title: value } )
							}
						/>
						<RichText
							tagName="div"
							className="muted pdf-description"
							value={ description }
							allowedFormats={ ALLOWED_FORMATS }
							onChange={ ( value ) =>
								setAttributes( { description: value } )
							}
						/>
					</div>
					<div className="pdf-actions">
						<RichText
							tagName="span"
							className="btn outline pill"
							value={ openText }
							allowedFormats={ [] }
							onChange={ ( value ) =>
								setAttributes( { openText: value } )
							}
						/>
						<RichText
							tagName="span"
							className="btn glass pill"
							value={ downloadText }
							allowedFormats={ [] }
							onChange={ ( value ) =>
								setAttributes( { downloadText: value } )
							}
						/>
					</div>
				</div>
				<div className="pdf-frame">
					{ previewUrl ? (
						<iframe
							title={ title }
							src={ previewUrl }
							loading="lazy"
						/>
					) : (
						<div className="muted">
							{ __(
								'Выберите PDF-файл в настройках блока.',
								'slav-bank'
							) }
						</div>
					) }
				</div>
				<RichText
					tagName="div"
					className="muted pdf-fallback"
					value={ fallbackText }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { fallbackText: value } )
					}
				/>
			</div>
		</>
	);
}
