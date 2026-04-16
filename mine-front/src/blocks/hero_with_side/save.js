import { RichText, useBlockProps } from '@wordpress/block-editor';

const normalizeBadge = (badge, index) => ({
	id: badge?.id || `badge-${index}`,
	text: badge?.text || '',
	url: badge?.url || '',
	opensInNewTab: !!badge?.opensInNewTab,
});

const normalizeAction = (action, index) => ({
	id: action?.id || `action-${index}`,
	text: action?.text || '',
	url: action?.url || '',
	opensInNewTab: !!action?.opensInNewTab,
	variant: action?.variant || (index === 0 ? 'primary' : 'secondary'),
});

export default function save({ attributes }) {
	const {
		title,
		text,
		badges = [],
		actions = [],
	} = attributes;

	const safeBadges = Array.isArray(badges)
		? badges.map(normalizeBadge)
		: [];

	const safeActions = Array.isArray(actions)
		? actions.map(normalizeAction)
		: [];

	const blockProps = useBlockProps.save({
		className: 'acme-card4',
	});

	return (
		<article {...blockProps}>
			{safeBadges.length > 0 && (
				<div className="acme-card4__corner">
					<div className="acme-card4__badges">
						{safeBadges.map((badge) =>
							badge.url ? (
								<a
									key={badge.id}
									className="acme-card4__badge"
									href={badge.url}
									target={badge.opensInNewTab ? '_blank' : undefined}
									rel={
										badge.opensInNewTab
											? 'noreferrer noopener'
											: undefined
									}
								>
									{badge.text}
								</a>
							) : (
								<span key={badge.id} className="acme-card4__badge">
									{badge.text}
								</span>
							)
						)}
					</div>
				</div>
			)}

			<RichText.Content
				tagName="h3"
				className="acme-card4__title"
				value={title}
			/>

			<RichText.Content
				tagName="p"
				className="acme-card4__text"
				value={text}
			/>

			{safeActions.length > 0 && (
				<div className="acme-card4__footer">
					{safeActions.map((action) =>
						action.url ? (
							<a
								key={action.id}
								className={`acme-card4__action acme-card4__action--${action.variant}`}
								href={action.url}
								target={action.opensInNewTab ? '_blank' : undefined}
								rel={
									action.opensInNewTab
										? 'noreferrer noopener'
										: undefined
								}
							>
								{action.text}
							</a>
						) : (
							<span
								key={action.id}
								className={`acme-card4__action acme-card4__action--${action.variant}`}
							>
								{action.text}
							</span>
						)
					)}
				</div>
			)}
		</article>
	);
}