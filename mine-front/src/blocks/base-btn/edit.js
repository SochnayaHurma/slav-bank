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



export default function Edit({ attributes, setAttributes, isSelected }) {
	const {
		variant,
		url,
		text,
		pageId,
		linkMode,
		opensInNewTab,
		blockWidth

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
						title={__('Настройки кнопки', 'acme-blocks')}
						initialOpen={false}
					>
							<div className="acme-card5-sidebar-item">
																<SelectControl
									label={__('Стиль', 'acme-blocks')}
									value={variant}
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
										setAttributes( { variant: value })
									}
								/>
								<SelectControl
                        label={ __( 'Ширина кнопки (%)', 'text-domain' ) }
                        value={ blockWidth }
                        options={ [
                            { label: '25%', value: '25' },
                            { label: '50%', value: '50' },
                            { label: '75%', value: '75' },
                            { label: '100%', value: '100' },
                        ] }
                        onChange={ ( value ) => setAttributes( { blockWidth: value } ) }
                    />

								<ToggleControl
									label="Ссылка на страницу текущего сайта"
									checked={linkMode}
									onChange={(value) => setAttributes({
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
										onChange={(value) => setAttributes({
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

												setAttributes({
													pageId: nextPageId,
													url: selectedPage?.link || '',
												});
											}}
										/>
									))}
							</div>
					</PanelBody>
				</InspectorControls>
			)}

			<RichText
{ ...useBlockProps({
                style: { width: blockWidth + '%' }
            }) }
				tagName="div"
				className={`btn ${variant || 'primary'}`}
				href={url || ''}
				value={text}
				onChange={(value) => setAttributes({ text: value })}
			/>

		</>
	);
}