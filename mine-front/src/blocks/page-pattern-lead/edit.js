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
	id: item?.id || `lead-item-${ index }`,
	text: item?.text || '',
} );

const createItem = () => ( {
	id: `lead-item-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	text: __( 'Новая строка', 'slav-bank' ),
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { kicker, title, text, items = [] } = attributes;
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
		className: 'v3-photo-card reveal is-in',
		'data-reveal': 'left',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={ __( 'Добавить строку', 'slav-bank' ) }
						onClick={ addItem }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Строки карточки', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить строку', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: lead row number. */
									__( 'Строка %d', 'slav-bank' ),
									index + 1
								) }
								initialOpen={ false }
							>
								<Button
									variant="secondary"
									isDestructive
									onClick={ () => removeItem( item.id ) }
								>
									{ __( 'Удалить строку', 'slav-bank' ) }
								</Button>
							</PanelBody>
						) ) }
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				<div className="v3-photo-caption glass">
					<RichText
						tagName="div"
						className="v3-kicker"
						value={ kicker }
						allowedFormats={ ALLOWED_FORMATS }
						onChange={ ( value ) =>
							setAttributes( { kicker: value } )
						}
					/>
					{ ( title || isSelected ) && (
						<RichText
							tagName="h3"
							value={ title }
							allowedFormats={ ALLOWED_FORMATS }
							onChange={ ( value ) =>
								setAttributes( { title: value } )
							}
							placeholder={ __( 'Заголовок', 'slav-bank' ) }
						/>
					) }
					<RichText
						tagName="div"
						className="v3-lead-text"
						value={ text }
						allowedFormats={ ALLOWED_FORMATS }
						onChange={ ( value ) =>
							setAttributes( { text: value } )
						}
						placeholder={ __( 'Текст карточки', 'slav-bank' ) }
					/>
					{ safeItems.map( ( item ) => (
						<RichText
							key={ item.id }
							tagName="p"
							value={ item.text }
							allowedFormats={ ALLOWED_FORMATS }
							onChange={ ( value ) =>
								updateItem( item.id, { text: value } )
							}
						/>
					) ) }
				</div>
			</div>
		</>
	);
}
