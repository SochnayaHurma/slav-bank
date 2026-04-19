import { RichText } from '@wordpress/block-editor';
import {normalizeTiles} from './edit';



export default function save({attributes}) {
	const {
		tiles = []
	} = attributes;
	const safeFRefs = Array.isArray(tiles)
		? tiles.map(normalizeTiles)
		: [];
	return (
          <div className="tiles">
            {safeFRefs.length > 0 && safeFRefs.map((fRef) => (

              <a key={fRef.id} className="tile" href={fRef.url} target="_blank" rel="noopener">
                <RichText.Content
                  tagName='div'
                   className="tile-title"
                   value={fRef.title}
                />
                <RichText.Content
                  tagName='div'
                  className="muted"
                  style={{ marginTop: '6px' }}
                  value={fRef.urlTitle}
                />
            </a>
            ))}
            <a className="tile" href=" esc_url(sb_alpha_url('faq'))" target="_blank" rel="noopener">
              <div className="tile-title">Часто задаваемые вопросы</div>
              <div className="muted" style={{ marginTop: '6px' }}>Открыть раздел →</div>
            </a>

            <a className="tile" href="ecp-regeneration.html" target="_blank" rel="noopener">
              <div className="tile-title">Перегенерация ЭЦП</div>
              <div className="muted" style={{ marginTop: '6px' }}>Открыть раздел →</div>
            </a>

            <a className="tile" href="esc_url(sb_alpha_url('security'))" target="_blank" rel="noopener">
              <div className="tile-title">Рекомендации по безопасности</div>
              <div className="muted" style={{ marginTop: '6px' }}>Открыть раздел →</div>
            </a>
          </div>
	);
}