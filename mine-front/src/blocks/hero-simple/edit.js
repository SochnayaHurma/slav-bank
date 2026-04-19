import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
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
	ToggleControl,
	Spinner,
} from '@wordpress/components';

export const createBadge = () => ({
	id: `badge-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	text: __('Новый badge', 'acme-blocks'),
	url: '',
	opensInNewTab: false,
	linkMode: false,
	pageId: 0,
});

export const createAction = (variant = 'primary') => ({
	id: `action-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	text: __('Новая кнопка', 'acme-blocks'),
	url: '',
	opensInNewTab: false,
	linkMode: true,
	pageId: 0,
	variant,
});

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

export default function Edit({ attributes, setAttributes, isSelected }) {
	const {
		title,
		description,
		kicker,
		pillItems = [],
		actions = [],
	} = attributes;

	const [addMenuAnchor, setAddMenuAnchor] = useState(null);

	const safeBadges = Array.isArray(pillItems)
		? pillItems.map(normalizeBadge)
		: [];

	const safeActions = Array.isArray(actions)
		? actions.map(normalizeAction)
		: [];

	const pages = useSelect(
		(select) =>
			select(coreDataStore).getEntityRecords('postType', 'page', {
				per_page: 100,
				orderby: 'title',
				order: 'asc',
				_fields: 'id,title,link',
			}),
		[]
	);

	const pagesById = Object.fromEntries((pages || []).map((page) => [page.id, page]));

	const updateBadges = (nextBadges) => {
		setAttributes({ pillItems: nextBadges });
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
		setAddMenuAnchor(null);
	};

	const removeBadge = (badgeId) => {
		updateBadges(safeBadges.filter((badge) => badge.id !== badgeId));
	};

	const updateActions = (nextActions) => {
		setAttributes({ actions: nextActions });
	};

	const updateAction = (actionId, patch) => {
		updateActions(
			safeActions.map((action) =>
				action.id === actionId ? { ...action, ...patch } : action
			)
		);
	};

	const addAction = () => {
		const variant = safeActions.length === 0 ? 'primary' : 'secondary';
		updateActions([...safeActions, createAction(variant)]);
		setAddMenuAnchor(null);
	};

	const removeAction = (actionId) => {
		updateActions(safeActions.filter((action) => action.id !== actionId));
	};

	const blockProps = useBlockProps({
		className: 'theme-shell block',
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

			{isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={__('Добавление элементов', 'acme-blocks')}
						initialOpen={true}
					>
						<div className="acme-card5-sidebar-actions">
							<Button variant="primary" onClick={addBadge}>
								{__('Добавить бадж', 'acme-blocks')}
							</Button>

							<Button variant="secondary" onClick={addAction}>
								{__('Добавить кнопку', 'acme-blocks')}
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

								<ToggleControl
									label="Ссылка на страницу текущего сайта"
									checked={badge.linkMode}
									onChange={(value) =>
										updateBadge(badge.id, {
											linkMode: value,
										})
									}
								/>

								{!badge.linkMode && (
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
								)}

								{badge.linkMode &&
									(!pages ? (
										<Spinner />
									) : (
										<SelectControl
											label="Страница"
											value={String(badge.pageId || 0)}
											options={[
												{ label: 'Выберите страницу', value: '0' },
												...(pages || []).map((page) => ({
													label: page?.title?.rendered || `(ID: ${page.id})`,
													value: String(page.id),
												})),
											]}
											onChange={(value) => {
												const nextPageId = Number(value);
												const selectedPage = pagesById[nextPageId];

												updateBadge(badge.id, {
													pageId: nextPageId,
													url: selectedPage?.link || '',
												});
											}}
										/>
									))}

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
											label: __('Outline', 'acme-blocks'),
											value: 'outline',
										},
										{
											label: __('Soft', 'acme-blocks'),
											value: 'soft',
										},
										{
											label: __('Glass', 'acme-blocks'),
											value: 'glass',
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
			)}

			<section className='block'>
				<div className="container">
					<div className="hero-wrap" style={{ padding: 'var(--s-5)' }}>
						<div
							className="row"
							style={{
								alignItems: 'flex-start',
								gap: 'var(--s-4)',
								flexWrap: 'wrap',
							}}
						>
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
											{__('Добавить бадж', 'acme-blocks')}
										</Button>

										<Button variant="secondary" onClick={addAction}>
											{__('Добавить кнопку', 'acme-blocks')}
										</Button>
									</div>
								</Popover>
							)}

							<div style={{ minWidth: '280px', flex: '1 1 520px' }}>
								<RichText
									className="kicker"
									value={kicker}
									tagName="div"
									onChange={(value) => setAttributes({ kicker: value })}
								/>

								<RichText
									value={title}
									style={{ margin: '8px 0 10px' }}
									tagName="h1"
									onChange={(value) => setAttributes({ title: value })}
								/>

								<RichText
									className="muted"
									style={{ maxWidth: '78ch' }}
									value={description}
									tagName="p"
									onChange={(value) => setAttributes({ description: value })}
								/>

								<div
									className="row"
									style={{ marginTop: 'var(--s-4)', flexWrap: 'wrap' }}
								>
									{safeActions.length > 0 &&
										safeActions.map((action) => (
											<RichText
												key={action.id}
												tagName="a"
												className={`btn ${action.variant || 'primary'}`}
												href={action.url || ''}
												value={action.text}
												onChange={(value) =>
													updateAction(action.id, { text: value })
												}
											/>
										))}


								</div>
							</div>

							<div className="pill" style={{ alignSelf: 'flex-start' }}>
								{safeBadges.length > 0 &&
									safeBadges.map((badge) => {
										const badgeHref = badge.linkMode
											? pagesById[badge.pageId]?.link || ''
											: badge.url;

										return (
											<RichText
												key={badge.id}
												tagName="a"
												className="mono badge"
												href={badgeHref}
												value={badge.text}
												onChange={(value) =>
													updateBadge(badge.id, { text: value })
												}
											/>
										);
									})}

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}