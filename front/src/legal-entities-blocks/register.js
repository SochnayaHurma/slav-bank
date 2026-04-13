import { registerBlockType } from '@wordpress/blocks';

import pageMeta from '../../../blocks/legal-entities-page/block.json';
import cardMeta from '../../../blocks/legal-service-card/block.json';

import PageEdit from './legal-entities-page/edit';
import PageSave from './legal-entities-page/save';

import CardEdit from './legal-service-card/edit';
import CardSave from './legal-service-card/save';

registerBlockType(pageMeta.name, {
  ...pageMeta,
  edit: PageEdit,
  save: PageSave,
});

registerBlockType(cardMeta.name, {
  ...cardMeta,
  edit: CardEdit,
  save: CardSave,
});