import {
	BlockControls,
	InspectorControls,
	LinkControl,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

export const normalizeDocumentItem = ( item, index ) => ( {
	id: item?.id || `private-document-${ index }`,
	title: item?.title || '',
	url: item?.url || '',
	format: item?.format || 'DOC',
	symbol: item?.symbol || '→',
	opensInNewTab: item?.opensInNewTab !== false,
} );

export const createDocumentItem = () => ( {
	id: `private-document-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	title: 'Новый документ',
	url: '',
	format: 'DOC',
	symbol: '→',
	opensInNewTab: true,
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items )
		? items.map( normalizeDocumentItem )
		: [];

	const updateItems = ( nextItems ) => {
		setAttributes( { items: nextItems } );
	};

	const updateItem = ( itemId, patch ) => {
		updateItems(
			safeItems.map( ( item ) =>
				item.id === itemId ? { ...item, ...patch } : item
			)
		);
	};

	const addItem = () => {
		updateItems( [ ...safeItems, createDocumentItem() ] );
	};

	const removeItem = ( itemId ) => {
		updateItems( safeItems.filter( ( item ) => item.id !== itemId ) );
	};

	const blockProps = useBlockProps( {
		className: 'doc-shelf',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={ __( 'Добавить документ', 'slav-bank' ) }
						onClick={ addItem }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Документы', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить документ', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: document card number. */
									__( 'Документ %d', 'slav-bank' ),
									index + 1
								) }
								initialOpen={ false }
							>
								<LinkControl
									value={ {
										url: item.url,
										opensInNewTab: item.opensInNewTab,
									} }
									onChange={ ( value ) =>
										updateItem( item.id, {
											url: value?.url || '',
											opensInNewTab:
												value?.opensInNewTab !== false,
										} )
									}
								/>
								<Button
									variant="secondary"
									isDestructive
									onClick={ () => removeItem( item.id ) }
								>
									{ __( 'Удалить', 'slav-bank' ) }
								</Button>
							</PanelBody>
						) ) }
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				{ safeItems.map( ( item ) => (
					<div key={ item.id } className="doc-card">
						<RichText
							tagName="span"
							className="doc-ext"
							value={ item.format }
							allowedFormats={ [] }
							onChange={ ( value ) =>
								updateItem( item.id, { format: value } )
							}
						/>
						<RichText
							tagName="span"
							className="doc-title"
							value={ item.title }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( value ) =>
								updateItem( item.id, { title: value } )
							}
						/>
						<RichText
							tagName="span"
							className="doc-arrow"
							value={ item.symbol }
							allowedFormats={ [] }
							onChange={ ( value ) =>
								updateItem( item.id, { symbol: value } )
							}
						/>
						<Button
							className="private-persons-documents__remove"
							variant="secondary"
							isDestructive
							onClick={ () => removeItem( item.id ) }
						>
							{ __( 'Удалить', 'slav-bank' ) }
						</Button>
					</div>
				) ) }
			</div>
		</>
	);
}
