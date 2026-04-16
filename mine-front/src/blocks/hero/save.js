import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		title,
		text,
		buttonText,
		url,
		badges = [],
	} = attributes;

	const safeBadges = Array.isArray(badges) ? badges : [];

	const blockProps = useBlockProps.save({
		className: 'acme-card',
	});

	return (
		<article {...blockProps}>
			{safeBadges.length > 0 && (
				<div className="acme-card__corner">
					<div className="acme-card__badges">
						{safeBadges.map((badge, index) => {
							const key = badge?.id || index;
							const label = badge?.text || '';
							const badgeUrl = badge?.url || '';
							const opensInNewTab = !!badge?.opensInNewTab;

							return badgeUrl ? (
								<a
									key={key}
									className="acme-card__badge"
									href={badgeUrl}
									target={opensInNewTab ? '_blank' : undefined}
									rel={opensInNewTab ? 'noreferrer noopener' : undefined}
								>
									{label}
								</a>
							) : (
								<span key={key} className="acme-card__badge">
									{label}
								</span>
							);
						})}
					</div>
				</div>
			)}

			<RichText.Content
				tagName="h3"
				className="acme-card__title"
				value={title}
			/>

			<RichText.Content
				tagName="p"
				className="acme-card__text"
				value={text}
			/>

			<div className="acme-card__footer">
				{url ? (
					<a className="acme-card__button" href={url}>
						{buttonText}
					</a>
				) : (
					<span className="acme-card__button">{buttonText}</span>
				)}
			</div>
		</article>
	);
}