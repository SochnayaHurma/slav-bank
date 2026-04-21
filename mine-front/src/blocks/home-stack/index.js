import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import save from './save';

registerBlockType(metadata.name, {
	edit: () => <div {...useBlockProps()}>Home Stack</div>,
	save,
});
