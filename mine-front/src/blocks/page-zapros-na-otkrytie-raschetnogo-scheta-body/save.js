import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    return (

    <div
        className="bento-card"
        style={ { padding: 'var(--s-4)', position: 'relative' } }>
    <InnerBlocks.Content/>
                        </div>

    );
}
