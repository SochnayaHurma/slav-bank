import { RichText } from '@wordpress/block-editor';



export default function save({attributes}) {
	const {title, description} = attributes;
	return (
              <div className="kicker doc-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
			  	<RichText.Content 
					value={title}
				/>
                    <strong style={{ fontStyle: 'italic' }}>
						<RichText.Content
							className="fine" 
							style={{ fontSize: '14px' }}
							value={description}
						/>
					</strong>
              </div>

	);
}