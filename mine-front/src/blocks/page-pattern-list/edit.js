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
	id: item?.id || `page-list-item-${ index }`,
	text: item?.text || '',
} );

const createItem = () => ( {
	id: `page-list-item-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	text: __( 'Новый пункт', 'slav-bank' ),
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { items = [], extraClass = '' } = attributes;
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
		className: [ 'wp-block-list', extraClass ]
			.filter( Boolean )
			.join( ' ' ),
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
						title={ __( 'Список', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить пункт', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: list item number. */
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

			<ul { ...blockProps }>
				{ safeItems.map( ( item ) => (
					<li key={ item.id }>
						<RichText
							tagName="span"
							value={ item.text }
							allowedFormats={ ALLOWED_FORMATS }
							onChange={ ( value ) =>
								updateItem( item.id, { text: value } )
							}
						/>
					</li>
				) ) }
			</ul>
		</>
	);
}
