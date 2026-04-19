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
  <>
      {safeFRefs.length > 0 && safeFRefs.map((tile) => (
            <div key={tile.id} className="doc-shelf">
              <div className="doc-card"
                href={tile.url}
                target="_blank" rel="noopener">
                <span className="doc-ext">{tile.format}</span>
                <span className="doc-title">{tile.title}</span>
                <span className="doc-arrow">{tile.symbol}</span>
              </div>
            </div>
      ))}
  </>
	);
}