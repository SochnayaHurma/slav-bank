import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
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
	SelectControl,
} from '@wordpress/components';

const createBadge = () => ({
	id: `badge-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	text: __('Новый badge', 'acme-blocks'),
	url: '',
	opensInNewTab: false,
});

const createAction = (variant = 'primary') => ({
	id: `action-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	text: __('Новая кнопка', 'acme-blocks'),
	url: '',
	opensInNewTab: false,
	variant,
});

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

export default function Edit({ attributes, setAttributes }) {
	const { title, text, badges = [], actions = [] } = attributes;

	const [linkEditor, setLinkEditor] = useState(null);

	const safeBadges = Array.isArray(badges)
		? badges.map(normalizeBadge)
		: [];

	const safeActions = Array.isArray(actions)
		? actions.map(normalizeAction)
		: [];

	const updateBadges = (nextBadges) => {
		setAttributes({ badges: nextBadges });
	};

	const updateActions = (nextActions) => {
		setAttributes({ actions: nextActions });
	};

	const updateBadge = (badgeId, patch) => {
		updateBadges(
			safeBadges.map((badge) =>
				badge.id === badgeId ? { ...badge, ...patch } : badge
			)
		);
	};

	const updateAction = (actionId, patch) => {
		updateActions(
			safeActions.map((action) =>
				action.id === actionId ? { ...action, ...patch } : action
			)
		);
	};

	const addBadge = () => {
		updateBadges([...safeBadges, createBadge()]);
	};

	const removeBadge = (badgeId) => {
		updateBadges(safeBadges.filter((badge) => badge.id !== badgeId));
		if (linkEditor?.type === 'badge' && linkEditor?.id === badgeId) {
			setLinkEditor(null);
		}
	};

	const addAction = () => {
		const variant =
			safeActions.length === 0 ? 'primary' : 'secondary';

		updateActions([...safeActions, createAction(variant)]);
	};

	const removeAction = (actionId) => {
		updateActions(safeActions.filter((action) => action.id !== actionId));
		if (linkEditor?.type === 'action' && linkEditor?.id === actionId) {
			setLinkEditor(null);
		}
	};

	const blockProps = useBlockProps({
		className: 'acme-card4',
	});

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Badge-ссылки', 'acme-blocks')}
					initialOpen={true}
				>
					<div className="acme-card4-sidebar-list">
						{safeBadges.length === 0 && (
							<p className="acme-card4-sidebar-empty">
								{__('Пока нет badge.', 'acme-blocks')}
							</p>
						)}

						{safeBadges.map((badge, index) => (
							<div
								className="acme-card4-sidebar-item"
								key={badge.id}
							>
								<div className="acme-card4-sidebar-item__meta">
									<strong>
										{sprintf(
											__('Badge %d', 'acme-blocks'),
											index + 1
										)}
									</strong>
									<span>
										{badge.text || __('Без текста', 'acme-blocks')}
									</span>
								</div>

								<Button
									variant="secondary"
									isDestructive
									onClick={() => removeBadge(badge.id)}
								>
									{__('Удалить', 'acme-blocks')}
								</Button>
							</div>
						))}

						<Button
							variant="primary"
							icon="plus-alt2"
							onClick={addBadge}
						>
							{__('Добавить badge', 'acme-blocks')}
						</Button>
					</div>
				</PanelBody>

				<PanelBody
					title={__('Action buttons', 'acme-blocks')}
					initialOpen={true}
				>
					<div className="acme-card4-sidebar-list">
						{safeActions.length === 0 && (
							<p className="acme-card4-sidebar-empty">
								{__('Пока нет action buttons.', 'acme-blocks')}
							</p>
						)}

						{safeActions.map((action, index) => (
							<div
								className="acme-card4-sidebar-item acme-card4-sidebar-item--stack"
								key={action.id}
							>
								<div className="acme-card4-sidebar-item__meta">
									<strong>
										{sprintf(
											__('Кнопка %d', 'acme-blocks'),
											index + 1
										)}
									</strong>
									<span>
										{action.text || __('Без текста', 'acme-blocks')}
									</span>
								</div>

								<SelectControl
									label={__('Стиль', 'acme-blocks')}
									value={action.variant}
									options={[
										{
											label: __('Primary', 'acme-blocks'),
											value: 'primary',
										},
										{
											label: __('Secondary', 'acme-blocks'),
											value: 'secondary',
										},
										{
											label: __('Ghost', 'acme-blocks'),
											value: 'ghost',
										},
									]}
									onChange={(value) =>
										updateAction(action.id, { variant: value })
									}
								/>

								<Button
									variant="secondary"
									isDestructive
									onClick={() => removeAction(action.id)}
								>
									{__('Удалить кнопку', 'acme-blocks')}
								</Button>
							</div>
						))}

						<Button
							variant="primary"
							icon="plus-alt2"
							onClick={addAction}
						>
							{__('Добавить кнопку', 'acme-blocks')}
						</Button>
					</div>
				</PanelBody>
			</InspectorControls>

			<article {...blockProps}>
				{safeBadges.length > 0 && (
					<div className="acme-card4__corner">
						<div className="acme-card4__badges">
							{safeBadges.map((badge) => (
								<div className="acme-card4__badge-item" key={badge.id}>
									<span className="acme-card4__badge">
										<RichText
											tagName="span"
											className="acme-card4__badge-label"
											value={badge.text}
											onChange={(value) =>
												updateBadge(badge.id, { text: value })
											}
											placeholder={__('Badge...', 'acme-blocks')}
											allowedFormats={[]}
										/>
									</span>

									<div className="acme-card4__item-tools">
										<Button
											className="acme-card4__tool-button"
											icon="admin-links"
											size="small"
											variant="secondary"
											label={__('Ссылка badge', 'acme-blocks')}
											showTooltip
											onClick={(event) =>
												setLinkEditor({
													type: 'badge',
													id: badge.id,
													anchor: event.currentTarget,
												})
											}
										/>
									</div>

									{linkEditor?.type === 'badge' &&
										linkEditor?.id === badge.id && (
											<Popover
												anchor={linkEditor.anchor}
												onClose={() => setLinkEditor(null)}
											>
												<div className="acme-card4__popover">
													<LinkControl
														value={{
															url: badge.url,
															opensInNewTab:
																badge.opensInNewTab,
														}}
														onChange={(value) =>
															updateBadge(badge.id, {
																url: value?.url || '',
																opensInNewTab:
																	!!value?.opensInNewTab,
															})
														}
													/>
												</div>
											</Popover>
										)}
								</div>
							))}
						</div>
					</div>
				)}

				<RichText
					tagName="h3"
					className="acme-card4__title"
					value={title}
					onChange={(value) => setAttributes({ title: value })}
					placeholder={__('Введите заголовок...', 'acme-blocks')}
				/>

				<RichText
					tagName="p"
					className="acme-card4__text"
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					placeholder={__('Введите текст...', 'acme-blocks')}
				/>

				{safeActions.length > 0 && (
					<div className="acme-card4__footer">
						{safeActions.map((action) => (
							<div
								className={`acme-card4__action-item is-${action.variant}`}
								key={action.id}
							>
								<span
									className={`acme-card4__action acme-card4__action--${action.variant}`}
								>
									<RichText
										tagName="span"
										className="acme-card4__action-label"
										value={action.text}
										onChange={(value) =>
											updateAction(action.id, { text: value })
										}
										placeholder={__('Кнопка...', 'acme-blocks')}
										allowedFormats={[]}
									/>
								</span>

								<div className="acme-card4__item-tools">
									<Button
										className="acme-card4__tool-button"
										icon="admin-links"
										size="small"
										variant="secondary"
										label={__('Ссылка кнопки', 'acme-blocks')}
										showTooltip
										onClick={(event) =>
											setLinkEditor({
												type: 'action',
												id: action.id,
												anchor: event.currentTarget,
											})
										}
									/>
								</div>

								{linkEditor?.type === 'action' &&
									linkEditor?.id === action.id && (
										<Popover
											anchor={linkEditor.anchor}
											onClose={() => setLinkEditor(null)}
										>
											<div className="acme-card4__popover">
												<LinkControl
													value={{
														url: action.url,
														opensInNewTab:
															action.opensInNewTab,
													}}
													onChange={(value) =>
														updateAction(action.id, {
															url: value?.url || '',
															opensInNewTab:
																!!value?.opensInNewTab,
														})
													}
												/>
											</div>
										</Popover>
									)}
							</div>
						))}
					</div>
				)}
			</article>
		</>
	);
}