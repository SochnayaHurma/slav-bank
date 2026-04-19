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



export default function Edit({attributes, setAttributes, isSelected}) {
	const {
		title,
		description,
		url,
		linkMode,
		pageId,
		opensInNewTab
	} = attributes;
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
	
	return (
<>
			{isSelected && (
				<InspectorControls group="settings">


					<PanelBody
						title={__('Изменить ссылку', 'acme-blocks')}
						initialOpen={false}
					>
							<div className="acme-card5-sidebar-item">
								<ToggleControl
									label="Ссылка на страницу текущего сайта"
									checked={linkMode}
									onChange={(value) =>
										setAttributes({
											linkMode: value,
										})
									}
								/>

								{!linkMode && (
									<LinkControl
										value={{
											url: url,
											opensInNewTab: opensInNewTab,
										}}
										onChange={(value) => ({
												url: value?.url || '',
												opensInNewTab: !!value?.opensInNewTab,
											})
										}
									/>
								)}

								{linkMode &&
									(!pages ? (
										<Spinner />
									) : (
										<SelectControl
											label="Страница"
											value={String(pageId || 0)}
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
												setAttributes({pageId: nextPageId, url: selectedPage?.link || ''})
											}}
										/>
									))}
							</div>
					</PanelBody>

				</InspectorControls>
			)}
		<h3 className='prose entry-content'>
			<RichText 
	tagName='span'
	value={title}
			/>
				
			<RichText 
				tagName='a'
				value={description}
				href={url}
			/>

		</h3>


</>
	);
}