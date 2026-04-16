import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	LinkControl,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Popover,
	TextControl,
} from '@wordpress/components';

const createBadge = () => ({
	id: `badge-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	text: __('Новый бадж', 'acme-blocks'),
	url: '',
	opensInNewTab: false,
});

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		text,
		buttonText,
		url,
		badges = [],
	} = attributes;

	const [badgeEditor, setBadgeEditor] = useState(null);

	const safeBadges = Array.isArray(badges)
		? badges.map((badge, index) => ({
				id: badge?.id || `legacy-${index}`,
				text: badge?.text || '',
				url: badge?.url || '',
				opensInNewTab: !!badge?.opensInNewTab,
		  }))
		: [];

	const updateBadges = (nextBadges) => {
		setAttributes({ badges: nextBadges });
	};

	const updateBadge = (badgeId, patch) => {
		updateBadges(
			safeBadges.map((badge) =>
				badge.id === badgeId ? { ...badge, ...patch } : badge
			)
		);
	};

	const addBadge = () => {
		updateBadges([...safeBadges, createBadge()]);
	};

	const removeBadge = (badgeId) => {
		updateBadges(safeBadges.filter((badge) => badge.id !== badgeId));
		if (badgeEditor?.id === badgeId) {
			setBadgeEditor(null);
		}
	};

	const blockProps = useBlockProps({
		className: 'acme-card',
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Настройки карточки', 'acme-blocks')}>
					<TextControl
						label={__('Ссылка основной кнопки', 'acme-blocks')}
						value={url}
						onChange={(value) => setAttributes({ url: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<article {...blockProps}>
				<div className="acme-card__corner">
					<div className="acme-card__badges">
						{safeBadges.map((badge) => (
							<div className="acme-card__badge-item" key={badge.id}>
								<span className="acme-card__badge">
									<RichText
										tagName="span"
										value={badge.text}
										onChange={(value) =>
											updateBadge(badge.id, { text: value })
										}
										placeholder={__('Бадж...', 'acme-blocks')}
										allowedFormats={[]}
									/>
								</span>

								<div className="acme-card__badge-item-actions">
									<Button
										className="acme-card__badge-icon"
										icon="admin-links"
										size="small"
										variant="secondary"
										label={__('Редактировать ссылку', 'acme-blocks')}
										showTooltip
										onClick={(event) =>
											setBadgeEditor({
												id: badge.id,
												anchor: event.currentTarget,
											})
										}
									/>

									<Button
										className="acme-card__badge-icon"
										icon="no-alt"
										size="small"
										variant="secondary"
										label={__('Удалить бадж', 'acme-blocks')}
										showTooltip
										isDestructive
										onClick={() => removeBadge(badge.id)}
									/>
								</div>

								{badgeEditor?.id === badge.id && (
									<Popover
										anchor={badgeEditor.anchor}
										onClose={() => setBadgeEditor(null)}
									>
										<div className="acme-card__badge-popover">
											<TextControl
												label={__('Текст баджа', 'acme-blocks')}
												value={badge.text}
												onChange={(value) =>
													updateBadge(badge.id, { text: value })
												}
											/>

											<LinkControl
												value={{
													url: badge.url,
													opensInNewTab: badge.opensInNewTab,
												}}
												onChange={(value) =>
													updateBadge(badge.id, {
														url: value?.url || '',
														opensInNewTab: !!value?.opensInNewTab,
													})
												}
											/>
										</div>
									</Popover>
								)}
							</div>
						))}
					</div>

					<div className="acme-card__corner-actions">
						<Button
							className="acme-card__add-badge"
							icon="plus-alt2"
							size="small"
							variant="secondary"
							label={__('Добавить бадж', 'acme-blocks')}
							showTooltip
							onClick={addBadge}
						/>
					</div>
				</div>

				<RichText
					tagName="h3"
					className="acme-card__title"
					value={title}
					onChange={(value) => setAttributes({ title: value })}
					placeholder={__('Введите заголовок...', 'acme-blocks')}
				/>

				<RichText
					tagName="p"
					className="acme-card__text"
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					placeholder={__('Введите текст...', 'acme-blocks')}
				/>

				<div className="acme-card__footer">
					<RichText
						tagName="span"
						className="acme-card__button"
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
						placeholder={__('Текст кнопки...', 'acme-blocks')}
						allowedFormats={[]}
					/>
				</div>
			</article>
		</>
	);
}