


import { registerBlockType } from '@wordpress/blocks';

import heroMeta from '../../../blocks/page-hero-v4/block.json';
import shellMeta from '../../../blocks/page-shell-stack/block.json';
import accessMeta from '../../../blocks/access-card/block.json';
import checklistMeta from '../../../blocks/checklist-group/block.json';
import noteMeta from '../../../blocks/text-note/block.json';

import HeroEdit from './page-hero-v4/edit';
import HeroSave from './page-hero-v4/save';

import ShellEdit from './page-shell-stack/edit';
import ShellSave from './page-shell-stack/save';

import AccessEdit from './access-card/edit';
import AccessSave from './access-card/save';

import ChecklistEdit from './checklist-group/edit';
import ChecklistSave from './checklist-group/save';

import NoteEdit from './text-note/edit';
import NoteSave from './text-note/save';

import splitHeroMeta from '../../../blocks/page-hero-split/block.json';
import SplitHeroEdit from './page-hero-split/edit';
import SplitHeroSave from './page-hero-split/save';

import htmlSectionsMeta from '../../../blocks/html-sections-card/block.json';
import HtmlSectionsEdit from './html-sections-card/edit';
import HtmlSectionsSave from './html-sections-card/save';

import tableMeta from '../../../blocks/keyvalue-copy-table/block.json';
import TableEdit from './keyvalue-copy-table/edit';
import TableSave from './keyvalue-copy-table/save';

registerBlockType(heroMeta.name, {
  ...heroMeta,
  edit: HeroEdit,
  save: HeroSave,
});

registerBlockType(shellMeta.name, {
  ...shellMeta,
  edit: ShellEdit,
  save: ShellSave,
});

registerBlockType(accessMeta.name, {
  ...accessMeta,
  edit: AccessEdit,
  save: AccessSave,
});

registerBlockType(checklistMeta.name, {
  ...checklistMeta,
  edit: ChecklistEdit,
  save: ChecklistSave,
});

registerBlockType(noteMeta.name, {
  ...noteMeta,
  edit: NoteEdit,
  save: NoteSave,
});



registerBlockType(splitHeroMeta.name, {
  ...splitHeroMeta,
  edit: SplitHeroEdit,
  save: SplitHeroSave,
});




registerBlockType(htmlSectionsMeta.name, {
  ...htmlSectionsMeta,
  edit: HtmlSectionsEdit,
  save: HtmlSectionsSave,
});

registerBlockType(tableMeta.name, {
  ...tableMeta,
  edit: TableEdit,
  save: TableSave,
});