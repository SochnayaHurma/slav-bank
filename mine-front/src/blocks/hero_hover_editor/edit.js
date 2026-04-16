import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	BlockControls,
	LinkControl,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Popover,
	SelectControl,
	ToolbarButton,
	ToolbarGroup,
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

export default function Edit({ attributes, setAttributes, isSelected }) {
	const { title, text, badges = [], actions = [] } = attributes;
	const [addMenuAnchor, setAddMenuAnchor] = useState(null);

	const safeBadges = Array.isArray(badges) ? badges.map(normalizeBadge) : [];
	const safeActions = Array.isArray(actions) ? actions.map(normalizeAction) : [];

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
		setAddMenuAnchor(null);
	};

	const addAction = () => {
		const variant = safeActions.length === 0 ? 'primary' : 'secondary';
		updateActions([...safeActions, createAction(variant)]);
		setAddMenuAnchor(null);
	};

	const removeBadge = (badgeId) => {
		updateBadges(safeBadges.filter((badge) => badge.id !== badgeId));
	};

	const removeAction = (actionId) => {
		updateActions(safeActions.filter((action) => action.id !== actionId));
	};

	const blockProps = useBlockProps({
		className: 'acme-card5',
	});

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={__('Добавить элемент', 'acme-blocks')}
						onClick={(event) => setAddMenuAnchor(event.currentTarget)}
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls group="settings">
				<PanelBody
					title={__('Добавление элементов', 'acme-blocks')}
					initialOpen={true}
				>
					<div className="acme-card5-sidebar-actions">
						<Button variant="primary" onClick={addBadge}>
							{__('Добавить badge', 'acme-blocks')}
						</Button>

						<Button variant="secondary" onClick={addAction}>
							{__('Добавить action button', 'acme-blocks')}
						</Button>
					</div>
				</PanelBody>

				<PanelBody
					title={__('Badge-ссылки', 'acme-blocks')}
					initialOpen={false}
				>
					{safeBadges.length === 0 && (
						<p className="acme-card5-sidebar-empty">
							{__('Badge пока нет.', 'acme-blocks')}
						</p>
					)}

					{safeBadges.map((badge, index) => (
						<div className="acme-card5-sidebar-item" key={badge.id}>
							<div className="acme-card5-sidebar-item__meta">
								<strong>
									{sprintf(__('Badge %d', 'acme-blocks'), index + 1)}
								</strong>
								<span>
									{badge.text || __('Без текста', 'acme-blocks')}
								</span>
							</div>

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

							<Button
								variant="secondary"
								isDestructive
								onClick={() => removeBadge(badge.id)}
							>
								{__('Удалить badge', 'acme-blocks')}
							</Button>
						</div>
					))}
				</PanelBody>

				<PanelBody
					title={__('Action buttons', 'acme-blocks')}
					initialOpen={false}
				>
					{safeActions.length === 0 && (
						<p className="acme-card5-sidebar-empty">
							{__('Кнопок пока нет.', 'acme-blocks')}
						</p>
					)}

					{safeActions.map((action, index) => (
						<div
							className="acme-card5-sidebar-item acme-card5-sidebar-item--stack"
							key={action.id}
						>
							<div className="acme-card5-sidebar-item__meta">
								<strong>
									{sprintf(__('Кнопка %d', 'acme-blocks'), index + 1)}
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

							<LinkControl
								value={{
									url: action.url,
									opensInNewTab: action.opensInNewTab,
								}}
								onChange={(value) =>
									updateAction(action.id, {
										url: value?.url || '',
										opensInNewTab: !!value?.opensInNewTab,
									})
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
				</PanelBody>
			</InspectorControls>

			<article {...blockProps}>
				<Button
					className="acme-card5__quick-add"
					icon="plus-alt2"
					label={__('Добавить элемент', 'acme-blocks')}
					showTooltip
					onClick={(event) => setAddMenuAnchor(event.currentTarget)}
				/>

				{addMenuAnchor && (
					<Popover
						anchor={addMenuAnchor}
						onClose={() => setAddMenuAnchor(null)}
					>
						<div className="acme-card5__add-menu">
							<Button variant="primary" onClick={addBadge}>
								{__('Добавить badge', 'acme-blocks')}
							</Button>

							<Button variant="secondary" onClick={addAction}>
								{__('Добавить action button', 'acme-blocks')}
							</Button>
						</div>
					</Popover>
				)}

				{safeBadges.length > 0 && (
					<div className="acme-card5__corner">
						<div className="acme-card5__badges">
							{safeBadges.map((badge) => (
								<span className="acme-card5__badge" key={badge.id}>
									<RichText
										tagName="span"
										className="acme-card5__badge-label"
										value={badge.text}
										onChange={(value) =>
											updateBadge(badge.id, { text: value })
										}
										placeholder={__('Badge...', 'acme-blocks')}
										allowedFormats={[]}
									/>
								</span>
							))}
						</div>
					</div>
				)}

				<RichText
					tagName="h3"
					className="acme-card5__title"
					value={title}
					onChange={(value) => setAttributes({ title: value })}
					placeholder={__('Введите заголовок...', 'acme-blocks')}
				/>

				<RichText
					tagName="p"
					className="acme-card5__text"
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					placeholder={__('Введите текст...', 'acme-blocks')}
				/>

				{safeActions.length > 0 && (
					<div className="acme-card5__footer">
						{safeActions.map((action) => (
							<span
								className={`acme-card5__action acme-card5__action--${action.variant}`}
								key={action.id}
							>
								<RichText
									tagName="span"
									className="acme-card5__action-label"
									value={action.text}
									onChange={(value) =>
										updateAction(action.id, { text: value })
									}
									placeholder={__('Кнопка...', 'acme-blocks')}
									allowedFormats={[]}
								/>
							</span>
						))}
					</div>
				)}
			</article>
		</>
	);
}