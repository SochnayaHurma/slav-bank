import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const DOCS = [
	{
		id: 'rub',
		title:
			'Информация о переводах денежных средств по поручению клиентов-физических без открытия банковских счетов в валюте РФ >>>',
		shortTitle:
			'Информация о переводах денежных средств по поручению клиентов-физических',
		url: 'https://slavbank.ru/wp-content/uploads/informacziya-po-perevodam-10-mr-2025-rubli.doc',
		format: 'DOC',
	},
	{
		id: 'currency',
		title:
			'Информация о трансграничных переводах денежных средств по поручению клиентов-физических лиц без открытия банковских счетов в иностанной валюте >>>',
		shortTitle:
			'Информация о трансграничных переводах денежных средств по поручению клиентов',
		url: 'https://slavbank.ru/wp-content/uploads/informacziya-po-perevodam-10-mr-2025-valyuta.doc',
		format: 'DOC',
	},
	{
		id: 'english',
		title:
			'Information on cross-border monetary funds transfers on behalf of individual clients without opening bank accounts',
		shortTitle:
			'Information on cross-border monetary funds transfers on behalf of individuals',
		url: 'https://slavbank.ru/wp-content/uploads/informacziya-o-transgranichnyh-perevodah_ang-prav.docx',
		format: 'DOCX',
	},
];

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Частным лицам' } ],
	[ 'slav-bank/private-persons-services', { items: DOCS } ],
	[ 'slav-bank/kicker', { text: 'Документы' } ],
	[ 'slav-bank/private-persons-documents', { items: DOCS } ],
	[ 'slav-bank/kicker', { text: 'Текст страницы' } ],
	[ 'slav-bank/private-persons-text', {} ],
];

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'bento-card',
		style: { padding: 'var(--s-4)', position: 'relative' },
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks template={ TEMPLATE } />
		</div>
	);
}
