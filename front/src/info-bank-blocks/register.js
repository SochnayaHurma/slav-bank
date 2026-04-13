import { registerBlockType } from '@wordpress/blocks';

import meta from '../../../blocks/docs-tabs-board/block.json';
import Edit from './docs-tabs-board/edit';
import Save from './docs-tabs-board/save';

registerBlockType(meta.name, {
  ...meta,
  edit: Edit,
  save: Save,
});