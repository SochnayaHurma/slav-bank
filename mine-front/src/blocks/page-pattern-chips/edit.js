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

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `page-chip-${ index }`,
	text: item?.text || '',
	url: item?.url || '',
	opensInNewTab: item?.opensInNewTab !== false,
} );

const createItem = () => ( {
	id: `page-chip-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	text: __( 'Новый чип', 'slav-bank' ),
	url: '',
	opensInNewTab: true,
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];

	const updateItems = ( nextItems ) => setAttributes( { items: nextItems } );
	const addItem = () => updateItems( [ ...safeItems, createItem() ] );
	const removeItem = ( itemId ) =>
		updateItems( safeItems.filter( ( item ) => item.id !== itemId ) );
	const updateItem = ( itemId, patch ) =>
		updateItems(
			safeItems.map( ( item ) =>
				item.id === itemId ? { ...item, ...patch } : item
			)
		);

	const blockProps = useBlockProps( {
		className: 'chip-row',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={ __( 'Добавить чип', 'slav-bank' ) }
						onClick={ addItem }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Чипы', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить чип', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: chip number. */
									__( 'Чип %d', 'slav-bank' ),
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
									{ __( 'Удалить чип', 'slav-bank' ) }
								</Button>
							</PanelBody>
						) ) }
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				{ safeItems.map( ( item ) => (
					<RichText
						key={ item.id }
						tagName="span"
						className="chip"
						value={ item.text }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						onChange={ ( value ) =>
							updateItem( item.id, { text: value } )
						}
					/>
				) ) }
			</div>
		</>
	);
}
