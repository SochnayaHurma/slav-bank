
import { Fragment } from '@wordpress/element';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const normalizeBadge = (badge, index) => ({
	id: badge?.id || `badge-${index}`,
	text: badge?.text || '',
	url: badge?.url || '',
	linkMode: !!badge?.linkMode,
	pageId: Number(badge?.pageId) || 0,
	opensInNewTab: !!badge?.opensInNewTab,
});


const normalizeAction = (action, index) => ({
	id: action?.id || `action-${index}`,
	text: action?.text || '',
	url: action?.url || '',
	linkMode: !!action?.linkMode,
	opensInNewTab: !!action?.opensInNewTab,
	variant: action?.variant || (index === 0 ? 'primary' : 'secondary'),
	pageId: Number(action?.pageId) || 0,
});

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: 'theme-shell block',
	});

	const {
		title,
		description,
		kicker,
		pillItems = [],  
		actions = [],
	} = attributes;

	const safeBadges = Array.isArray(pillItems) ? pillItems.map(normalizeBadge) : [];
	const safeActions = Array.isArray(actions) ? actions.map(normalizeAction) : [];

	return (
		<section { ...blockProps }>
			<div className="container">
				<div className="hero-wrap" style={ { padding: 'var(--s-5)' } }>
					<div
						className="row"
						style={ {
							alignItems: 'flex-start',
							gap: 'var(--s-4)',
							flexWrap: 'wrap',
						} }
					>
						<div style={ { minWidth: '280px', flex: '1 1 520px' } }>
							<RichText.Content
								className="kicker"
								tagName="div"
								value={ kicker }
							/>

							<RichText.Content
								tagName="h1"
								value={ title }
								style={ { margin: '8px 0 10px' } }
							/>

							<RichText.Content
								className="muted"
								tagName="p"
								value={ description }
								style={ { maxWidth: '78ch' } }
							/>

							<div
								className="row"
								style={ {
									marginTop: 'var(--s-4)',
									flexWrap: 'wrap',
								} }
							>
								{ safeActions.map( ( action ) => (
									<RichText.Content
										key={ action.id }
										tagName="a"
										className={ `btn ${ action.variant || 'primary' }` }
										href={ action.url || undefined }
										value={ action.text }
										target={ action.opensInNewTab ? '_blank' : undefined }
										rel={
											action.opensInNewTab
												? 'noopener noreferrer'
												: undefined
										}
									/>
								))}
							</div>
						</div>

						{ safeBadges.length > 0 && (
							<div
								className="pill"
								style={ { alignSelf: 'flex-start' } }
							>
								{ safeBadges.map( ( badge, index ) => (
									<Fragment key={ badge.id }>
										{ index > 0 && <span className="muted">·</span> }

										<RichText.Content
											tagName="a"
											className="mono badge"
											href={ badge.url || undefined }
											value={ badge.text }
											target={ badge.opensInNewTab ? '_blank' : undefined }
											rel={
												badge.opensInNewTab
													? 'noopener noreferrer'
													: undefined
											}
										/>
									</Fragment>
								) ) }
							</div>
						) }
					</div>
				</div>
			</div>
		</section>
	);
}