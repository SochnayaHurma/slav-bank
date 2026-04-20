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

export const normalizeServiceItem = ( item, index ) => ( {
	id: item?.id || `private-service-${ index }`,
	title: item?.shortTitle || item?.title || '',
	url: item?.url || '',
	label: item?.label || 'Подробнее →',
	opensInNewTab: item?.opensInNewTab !== false,
} );

export const createServiceItem = () => ( {
	id: `private-service-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	title: 'Новая услуга',
	url: '',
	label: 'Подробнее →',
	opensInNewTab: true,
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items )
		? items.map( normalizeServiceItem )
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
		updateItems( [ ...safeItems, createServiceItem() ] );
	};

	const removeItem = ( itemId ) => {
		updateItems( safeItems.filter( ( item ) => item.id !== itemId ) );
	};

	const blockProps = useBlockProps( {
		className: 'services',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={ __( 'Добавить карточку', 'slav-bank' ) }
						onClick={ addItem }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Карточки услуг', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить карточку', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: service card number. */
									__( 'Карточка %d', 'slav-bank' ),
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
					<div key={ item.id } className="service-card">
						<RichText
							tagName="div"
							className="service-title"
							value={ item.title }
							allowedFormats={ [ 'core/bold', 'core/link' ] }
							placeholder={ __( 'Название услуги', 'slav-bank' ) }
							onChange={ ( value ) =>
								updateItem( item.id, { title: value } )
							}
						/>
						<RichText
							tagName="div"
							className="muted"
							style={ { marginTop: '6px' } }
							value={ item.label }
							allowedFormats={ [] }
							placeholder={ __( 'Подробнее →', 'slav-bank' ) }
							onChange={ ( value ) =>
								updateItem( item.id, { label: value } )
							}
						/>

					</div>
				) ) }
			</div>
		</>
	);
}
