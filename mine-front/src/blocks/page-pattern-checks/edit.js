import {
	BlockControls,
	InspectorControls,
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

const ALLOWED_FORMATS = [ 'core/bold', 'core/italic', 'core/link' ];

const normalizeItem = ( item, index ) => ( {
	id: item?.id || `page-check-${ index }`,
	text: item?.text || '',
} );

const createItem = () => ( {
	id: `page-check-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	text: __( 'Новый пункт', 'slav-bank' ),
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
		className: 'checks',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={ __( 'Добавить пункт', 'slav-bank' ) }
						onClick={ addItem }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Чек-лист', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить пункт', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: checklist item number. */
									__( 'Пункт %d', 'slav-bank' ),
									index + 1
								) }
								initialOpen={ false }
							>
								<Button
									variant="secondary"
									isDestructive
									onClick={ () => removeItem( item.id ) }
								>
									{ __( 'Удалить пункт', 'slav-bank' ) }
								</Button>
							</PanelBody>
						) ) }
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				{ safeItems.map( ( item ) => (
					<div key={ item.id } className="check">
						<span className="check-ic">✓</span>
						<RichText
							tagName="span"
							value={ item.text }
							allowedFormats={ ALLOWED_FORMATS }
							onChange={ ( value ) =>
								updateItem( item.id, { text: value } )
							}
						/>
					</div>
				) ) }
			</div>
		</>
	);
}
