import { registerBlockType } from '@wordpress/blocks';

import pageMeta from '../../../blocks/currency-control-page/block.json';
import groupMeta from '../../../blocks/currency-point-group/block.json';
import noteMeta from '../../../blocks/currency-note/block.json';

import PageEdit from './currency-control-page/edit';
import PageSave from './currency-control-page/save';

import GroupEdit from './currency-point-group/edit';
import GroupSave from './currency-point-group/save';

import NoteEdit from './currency-note/edit';
import NoteSave from './currency-note/save';

registerBlockType(pageMeta.name, {
  ...pageMeta,
  edit: PageEdit,
  save: PageSave,
});

registerBlockType(groupMeta.name, {
  ...groupMeta,
  edit: GroupEdit,
  save: GroupSave,
});

registerBlockType(noteMeta.name, {
  ...noteMeta,
  edit: NoteEdit,
  save: NoteSave,
});