import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		kicker,
		title,
		description,
		url,
		openText,
		downloadText,
		fallbackText,
	} = attributes;
	const blockProps = useBlockProps.save( {
		className: 'pdf-shell',
	} );
	const previewUrl = url ? `${ url }#view=FitH` : '';

	return (
		<div { ...blockProps }>
			<div className="pdf-head">
				<div>
					<RichText.Content
						tagName="div"
						className="kicker"
						value={ kicker }
					/>
					<RichText.Content
						tagName="div"
						className="pdf-title"
						value={ title }
					/>
					<RichText.Content
						tagName="div"
						className="muted"
						style={ { marginTop: '6px' } }
						value={ description }
					/>
				</div>
				<div className="pdf-actions">
					<RichText.Content
						tagName="a"
						className="btn outline pill"
						href={ url }
						target="_blank"
						rel="noreferrer noopener"
						value={ openText }
					/>
					<RichText.Content
						tagName="a"
						className="btn glass pill"
						href={ url }
						download
						value={ downloadText }
					/>
				</div>
			</div>
			<div className="pdf-frame">
				<iframe title={ title } src={ previewUrl } loading="lazy" />
			</div>
			<RichText.Content
				tagName="div"
				className="muted"
				style={ { marginTop: '10px', fontWeight: 300 } }
				value={ fallbackText }
			/>
		</div>
	);
}
