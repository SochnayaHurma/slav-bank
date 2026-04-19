import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

const TEMPLATE = [

	[
		'slav-bank/body-support',
		{}
	],
		[
		'slav-bank/bento-shell-sidebar',
		{}
	],
];

const normalizeFaqRefs = (faqRef, index) => ({
	id: faqRef?.id || `fRef-${index}`,
	title: faqRef?.text || '',
	urlTitle: faqRef?.text || '',
	url: faqRef?.url || '',
	linkMode: !!faqRef?.linkMode,
	pageId: Number(faqRef?.pageId) || 0,
});

export const createFRef = () => ({
  id: `fRef-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  text: __('Заголовок...', 'acme-blocks'),
  url: '',
  opensInNewTab: false,
  linkMode: false,
  pageId: 0,
});

export default function Edit({attributes, setAttributes}) {
  const blockProps = useBlockProps({
		className: 'block dashv2',
		id: "content"
	});

	return (
  <section {...blockProps} >
    <div className="container">
      <div className="bento">
		<InnerBlocks template={TEMPLATE}/>
      </div>
    </div>
  </section>
	);
}