import { RichText, useBlockProps } from '@wordpress/block-editor';

const ALLOWED_FORMATS = [ 'core/bold', 'core/italic', 'core/link' ];

export default function Edit( { attributes, setAttributes } ) {
	const { title, text } = attributes;
	const blockProps = useBlockProps( {
		className: 'alert',
	} );

	return (
		<div { ...blockProps }>
			<div className="alert-dot" aria-hidden="true"></div>
			<div>
				<RichText
					tagName="div"
					style={ { fontWeight: 600 } }
					value={ title }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) => setAttributes( { title: value } ) }
				/>
				<RichText
					tagName="div"
					className="muted"
					style={ { marginTop: '4px' } }
					value={ text }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) => setAttributes( { text: value } ) }
				/>
			</div>
		</div>
	);
}
