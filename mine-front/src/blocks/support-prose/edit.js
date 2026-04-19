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

export const normalizeItem = ( item, index ) => ( {
	id: item?.id || `support-prose-${ index }`,
	content: item?.content || '',
} );

export const createItem = () => ( {
	id: `support-prose-${ Date.now() }-${ Math.random()
		.toString( 36 )
		.slice( 2, 8 ) }`,
	content: 'Новый абзац',
} );

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { heading = '', items = [] } = attributes;
	const safeItems = Array.isArray( items ) ? items.map( normalizeItem ) : [];

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
		updateItems( [ ...safeItems, createItem() ] );
	};

	const removeItem = ( itemId ) => {
		updateItems( safeItems.filter( ( item ) => item.id !== itemId ) );
	};

	const blockProps = useBlockProps( {
		className: 'prose support-prose',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus-alt2"
						label={ __( 'Добавить абзац', 'slav-bank' ) }
						onClick={ addItem }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isSelected && (
				<InspectorControls group="settings">
					<PanelBody
						title={ __( 'Абзацы', 'slav-bank' ) }
						initialOpen={ true }
					>
						<Button variant="primary" onClick={ addItem }>
							{ __( 'Добавить абзац', 'slav-bank' ) }
						</Button>
						<p className="support-prose__hint">
							{ __(
								'Выделите любое слово в абзаце и используйте кнопку ссылки в панели форматирования.',
								'slav-bank'
							) }
						</p>
						{ safeItems.map( ( item, index ) => (
							<PanelBody
								key={ item.id }
								title={ sprintf(
									/* translators: %d: paragraph number. */
									__( 'Абзац %d', 'slav-bank' ),
									index + 1
								) }
								initialOpen={ false }
							>
								<Button
									variant="secondary"
									isDestructive
									onClick={ () => removeItem( item.id ) }
								>
									{ __( 'Удалить абзац', 'slav-bank' ) }
								</Button>
							</PanelBody>
						) ) }
					</PanelBody>
				</InspectorControls>
			) }

			<div { ...blockProps }>
				<div className="entry-content">
					<hr />
					<h2>
						<RichText
							tagName="strong"
							value={ heading }
							allowedFormats={ ALLOWED_FORMATS }
							placeholder={ __(
								'Введите заголовок',
								'slav-bank'
							) }
							onChange={ ( value ) =>
								setAttributes( { heading: value } )
							}
						/>
					</h2>
					{ safeItems.map( ( item ) => (
						<div
							key={ item.id }
							className="support-prose__editor-item"
						>
							<p>
								<RichText
									tagName="strong"
									value={ item.content }
									allowedFormats={ ALLOWED_FORMATS }
									placeholder={ __(
										'Введите текст абзаца',
										'slav-bank'
									) }
									onChange={ ( value ) =>
										updateItem( item.id, {
											content: value,
										} )
									}
								/>
							</p>
							<Button
								className="support-prose__remove"
								variant="secondary"
								isDestructive
								onClick={ () => removeItem( item.id ) }
							>
								{ __( 'Удалить', 'slav-bank' ) }
							</Button>
						</div>
					) ) }
					<Button
						className="support-prose__add"
						variant="secondary"
						onClick={ addItem }
					>
						{ __( 'Добавить абзац', 'slav-bank' ) }
					</Button>
				</div>
			</div>
		</>
	);
}
