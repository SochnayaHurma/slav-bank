import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[ 'slav-bank/body-ecp-regeneration', {} ],
	[ 'slav-bank/bento-shell-sidebar', {} ],
];

const normalizeFaqRefs = ( faqRef, index ) => ( {
	id: faqRef?.id || `fRef-${ index }`,
	title: faqRef?.text || '',
	urlTitle: faqRef?.text || '',
	url: faqRef?.url || '',
	linkMode: !! faqRef?.linkMode,
	pageId: Number( faqRef?.pageId ) || 0,
} );

export const createFRef = () => ( {
	id: `fRef-${ Date.now() }-${ Math.random().toString( 36 ).slice( 2, 8 ) }`,
	text: __( 'Заголовок...', 'acme-blocks' ),
	url: '',
	opensInNewTab: false,
	linkMode: false,
	pageId: 0,
} );

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		className: 'block dashv2',
		id: 'content',
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'bento',
		},
		{
			template: TEMPLATE,
		}
	);

	return (
		<section className="block dashv2" id="content">
			<div className="container">
				<div { ...innerBlocksProps } />
			</div>
		</section>
	);
}
