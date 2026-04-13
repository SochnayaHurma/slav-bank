import { registerBlockType } from '@wordpress/blocks';

import meta from '../../../blocks/requisites-bank-page/block.json';
import Edit from './requisites-bank-page/edit';
import Save from './requisites-bank-page/save';

registerBlockType(meta.name, {
  ...meta,
  edit: Edit,
  save: Save,
});