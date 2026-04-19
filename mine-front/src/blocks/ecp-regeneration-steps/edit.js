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

export const normalizeStepItem = ( item, index ) => ( {
	id: item?.id || `ecp-step-${ index }`,
	num: item?.num || String( index + 1 ).padStart( 2, '0' ),
	title: item?.title || '',
	text: item?.text || '',
} );

export const createStepItem = ( index ) => ( {
	id: `ecp-step-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	num: String( index + 1 ).padStart( 2, '0' ),
	title: __( 'Новый шаг', 'slav-bank' ),
	text: '',
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { items = [] } = attributes;
	const safeItems = Array.isArray( items )
		? items.map( normalizeStepItem )
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
		updateItems( [ ...safeItems, createStepItem( safeItems.length ) ] );
	};

	const removeItem = ( itemId ) => {
		updateItems( safeItems.filter( ( item ) => item.id !== itemId ) );
	};

	const blockProps = useBlockProps( {
		className: 'steps',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={ __( 'Добавить шаг', 'slav-bank' ) }
						onClick={ addItem }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Шаги инструкции', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить шаг', 'slav-bank' ) }
						</Button>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: step number. */
									__( 'Шаг %d', 'slav-bank' ),
									index + 1
								) }
								initialOpen={ false }
							>
								<Button
									variant="secondary"
									isDestructive
									onClick={ () => removeItem( item.id ) }
								>
									{ __( 'Удалить шаг', 'slav-bank' ) }
								</Button>
							</PanelBody>
						) ) }
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				{ safeItems.map( ( item ) => (
					<div key={ item.id } className="step-card">
						<RichText
							tagName="div"
							className="step-num"
							value={ item.num }
							allowedFormats={ [] }
							onChange={ ( value ) =>
								updateItem( item.id, { num: value } )
							}
						/>
						<div>
							<RichText
								tagName="div"
								className="step-title"
								value={ item.title }
								allowedFormats={ [
									'core/bold',
									'core/italic',
									'core/link',
								] }
								onChange={ ( value ) =>
									updateItem( item.id, { title: value } )
								}
							/>
							<RichText
								tagName="div"
								className="muted"
								style={ { marginTop: '6px' } }
								value={ item.text }
								placeholder={ __(
									'Описание шага…',
									'slav-bank'
								) }
								allowedFormats={ [
									'core/bold',
									'core/italic',
									'core/link',
								] }
								onChange={ ( value ) =>
									updateItem( item.id, { text: value } )
								}
							/>
						</div>
					</div>
				) ) }
			</div>
		</>
	);
}
