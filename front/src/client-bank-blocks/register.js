import { registerBlockType } from '@wordpress/blocks';

import pageMeta from '../../../blocks/client-bank-page/block.json';
import groupMeta from '../../../blocks/client-bank-feature-group/block.json';
import noteMeta from '../../../blocks/client-bank-note/block.json';

import PageEdit from './client-bank-page/edit';
import PageSave from './client-bank-page/save';

import GroupEdit from './client-bank-feature-group/edit';
import GroupSave from './client-bank-feature-group/save';

import NoteEdit from './client-bank-note/edit';
import NoteSave from './client-bank-note/save';

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