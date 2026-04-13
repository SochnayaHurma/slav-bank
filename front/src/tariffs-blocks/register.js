import { registerBlockType } from '@wordpress/blocks';

import tariffsPageMeta from '../../../blocks/tariffs-page/block.json';
import tariffGroupMeta from '../../../blocks/tariff-group/block.json';
import tariffLinkItemMeta from '../../../blocks/tariff-link-item/block.json';

import TariffsPageEdit from './tariffs-page/edit';
import TariffsPageSave from './tariffs-page/save';

import TariffGroupEdit from './tariff-group/edit';
import TariffGroupSave from './tariff-group/save';

import TariffLinkItemEdit from './tariff-link-item/edit';
import TariffLinkItemSave from './tariff-link-item/save';

registerBlockType(tariffsPageMeta.name, {
  ...tariffsPageMeta,
  edit: TariffsPageEdit,
  save: TariffsPageSave,
});

registerBlockType(tariffGroupMeta.name, {
  ...tariffGroupMeta,
  edit: TariffGroupEdit,
  save: TariffGroupSave,
});

registerBlockType(tariffLinkItemMeta.name, {
  ...tariffLinkItemMeta,
  edit: TariffLinkItemEdit,
  save: TariffLinkItemSave,
});