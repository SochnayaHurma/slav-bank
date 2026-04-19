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



export const normalizeTiles = (faqRef, index) => ({
	id: faqRef?.id || `fRef-${index}`,
	title: faqRef?.title || '',
	url: faqRef?.url || '',
	linkMode: !!faqRef?.linkMode,
	pageId: Number(faqRef?.pageId) || 0,
	symbol: faqRef?.symbol || '',
	format: faqRef?.format || '',
});

export const createTile = () => ({
  	id: `fRef-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  	title:  'Скачать здесь >>',
    url: '',
    // opensInNewTab: false,
    linkMode: false,
    pageId: 0,
	symbol: '→',
	format: 'PDF',
});


export default function Edit({attributes, setAttributes, isSelected}) {
	const {tiles} = attributes;
	const [addMenuAnchor, setAddMenuAnchor] = useState(null);
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

	const safeFRefs = Array.isArray(tiles)
		? tiles.map(normalizeTiles)
		: [];
	const updateFRefs = (nextBadges) => {
		setAttributes({ tiles: nextBadges });
	};

	const updateFRef = (fRefId, patch) => {
		updateFRefs(
			safeFRefs.map((fRef) =>
				fRef.id === fRefId ? { ...fRef, ...patch } : fRef
			)
		);
	};
  const addFRef = () => {
	updateFRefs([...safeFRefs, createTile()]);
	setAddMenuAnchor(null);
  };
  
	const removeFRefs = (fRefId) => {
	  updateFRefs(safeFRefs.filter((fRef) => fRef.id !== fRefId));
	};

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
						title={__('Ссылки плитки', 'acme-blocks')}
						initialOpen={true}
					>
						<div className="acme-card5-sidebar-actions">
							<Button variant="primary" onClick={addFRef}>
								{__('Добавить плитку', 'acme-blocks')}
							</Button>
						</div>
						{safeFRefs.map((badge, index) => (
							<PanelBody  key={badge.id}>
								<div className="acme-card5-sidebar-item__meta">
									<strong>
										{sprintf(__('Плитка %d', 'acme-blocks'), index + 1)}
									</strong>
								</div>
								<div className="acme-card5-sidebar-item__meta">
									<strong>
										{badge.title || __('Без текста', 'acme-blocks')}
									</strong>
								</div>
                
								<ToggleControl
									label="Ссылка на страницу текущего сайта"
									checked={badge.linkMode}
									onChange={(value) =>
										updateFRef(badge.id, {
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
											updateFRef(badge.id, {
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

												updateFRef(badge.id, {
													pageId: nextPageId,
													url: selectedPage?.link || '',
												});
											}}
										/>
									))}

								<Button
									variant="secondary"
									isDestructive
									onClick={() => removeFRefs(badge.id)}
								>
									{__('Удалить', 'acme-blocks')}
								</Button>
							</PanelBody>
						))}
					</PanelBody>

				</InspectorControls>
			)}
		{safeFRefs.length > 0 && safeFRefs.map((tile) => (
          <div key={tile.id} className="doc-shelf">
            <div className="doc-card"
              href={tile.url}
              target="_blank" rel="noopener">
              <RichText className="doc-ext"
			  	value={tile.format}
				onChange={(value) => updateFRef(tile.id, {format: value})}
			  />
			  
              <RichText 
			  	className="doc-title"
			  	value={tile.title}
				onChange={(value) => updateFRef(tile.id, {title: value})}
			  />
              <RichText className="doc-arrow"
			  	value={tile.symbol}
				onChange={(value) => updateFRef(tile.id, {symbol: value})}
			  />
            </div>
          </div>
		))}
    </>

	);
}