import { RichText } from '@wordpress/block-editor';



export default function save({attributes}) {
	const {title, description} = attributes;
	return (
			<div className="kicker doc-card " data-title="Заголовок" style={{marginTop: "10px", marginBottom: "10px"}}>
                <RichText.Content value={title} />

                  <RichText.Content 
				  	tagName='span'

				  	className="fine" 
				  	style={{ fontSize: '14px', marginTop: "0"}}
					value={description}
				  />
              </div>

	);
}