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
	id: item?.id || `consent-item-${ index }`,
	text: item?.text || '',
} );

const createItem = () => ( {
	id: `consent-item-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	text: __( 'Новый пункт', 'slav-bank' ),
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const {
		leadText,
		intro,
		text,
		processingText,
		purposeText,
		channelsText,
		durationText,
		rightsIntro,
		items = [],
		legalText,
		closingText,
	} = attributes;
	const durationValue = durationText || legalText;
	const firstParagraph =
		leadText || [ intro, text ].filter( Boolean ).join( '<br><br>' );
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
		className: 'form-consent',
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
						title={ __( 'Пункты согласия', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить пункт', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: consent item number. */
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

			<section { ...blockProps }>
				<RichText
					tagName="p"
					className="has-small-font-size"
					value={ firstParagraph }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { leadText: value } )
					}
					placeholder={ __( 'Первый абзац согласия', 'slav-bank' ) }
				/>
				<RichText
					tagName="p"
					className="has-small-font-size"
					value={ processingText }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { processingText: value } )
					}
				/>
				<RichText
					tagName="p"
					className="has-small-font-size"
					value={ purposeText }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { purposeText: value } )
					}
				/>
				<RichText
					tagName="p"
					className="has-small-font-size"
					value={ channelsText }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { channelsText: value } )
					}
				/>
				<RichText
					tagName="p"
					className="has-small-font-size"
					value={ durationValue }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { durationText: value } )
					}
				/>
				<RichText
					tagName="p"
					className="has-small-font-size"
					value={ rightsIntro }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { rightsIntro: value } )
					}
				/>
				<ul className="wp-block-list has-small-font-size">
					{ safeItems.map( ( item ) => (
						<li key={ item.id } className="has-small-font-size">
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
				<RichText
					tagName="p"
					className="has-small-font-size"
					value={ closingText }
					allowedFormats={ ALLOWED_FORMATS }
					onChange={ ( value ) =>
						setAttributes( { closingText: value } )
					}
				/>
			</section>
		</>
	);
}
