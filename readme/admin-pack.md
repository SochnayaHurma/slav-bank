

# Администрирование
## Типовые импорты
```js
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
```


## pages

```js


```

## Создание крад для панельки

```js
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


```


## Встроенный в дизайн виджет

```js
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

```
