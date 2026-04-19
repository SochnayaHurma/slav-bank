import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'theme-shell',
	});
	return (
            <a className="tile" href=" esc_url(sb_alpha_url('faq'))" target="_blank" rel="noopener">
              <div className="tile-title">Часто задаваемые вопросы</div>
              <div className="muted" style={{ marginTop: '6px' }}>Открыть раздел →</div>
            </a>
	);
}