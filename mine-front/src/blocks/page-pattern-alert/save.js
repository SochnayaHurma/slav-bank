import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { title, text } = attributes;
	const blockProps = useBlockProps.save( {
		className: 'alert',
	} );

	return (
		<div { ...blockProps }>
			<div className="alert-dot" aria-hidden="true"></div>
			<div>
				<RichText.Content
					tagName="div"
					style={ { fontWeight: 600 } }
					value={ title }
				/>
				<RichText.Content
					tagName="div"
					className="muted"
					style={ { marginTop: '4px' } }
					value={ text }
				/>
			</div>
		</div>
	);
}
