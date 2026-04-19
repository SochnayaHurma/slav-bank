import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const TEMPLATE = [
	[
		'slav-bank/bento-shell-sidebar',
		{}
	]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'theme-shell',
	});

	return (
            <a className="tile" href=" esc_url(sb_alpha_url('faq'))" target="_blank" rel="noopener">
              <div className="tile-title">Часто задаваемые вопросы</div>
              <div className="muted" style={{ marginTop: '6px' }}>Открыть раздел →</div>
            </a>
	);
}