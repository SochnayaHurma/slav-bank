import { registerBlockType } from '@wordpress/blocks';

import contactsPageMeta from '../../../blocks/contacts-page/block.json';
import contactItemMeta from '../../../blocks/contact-item/block.json';
import addressItemMeta from '../../../blocks/address-item/block.json';
import hoursItemMeta from '../../../blocks/hours-item/block.json';
import infoItemMeta from '../../../blocks/info-item/block.json';

import ContactsPageEdit from './contacts-page/edit';
import ContactsPageSave from './contacts-page/save';

import ContactItemEdit from './contact-item/edit';
import ContactItemSave from './contact-item/save';

import AddressItemEdit from './address-item/edit';
import AddressItemSave from './address-item/save';

import InfoItemEdit from './info-item/edit';
import InfoItemSave from './info-item/save';

import HoursItemEdit from './hours-item/edit';
import HoursItemSave from './hours-item/save';

registerBlockType(infoItemMeta.name, {
  ...infoItemMeta,
  edit: InfoItemEdit,
  save: InfoItemSave,
});

registerBlockType(contactsPageMeta.name, {
  ...contactsPageMeta,
  edit: ContactsPageEdit,
  save: ContactsPageSave,
});

registerBlockType(contactItemMeta.name, {
  ...contactItemMeta,
  edit: ContactItemEdit,
  save: ContactItemSave,
});

registerBlockType(addressItemMeta.name, {
  ...addressItemMeta,
  edit: AddressItemEdit,
  save: AddressItemSave,
});

registerBlockType(hoursItemMeta.name, {
  ...hoursItemMeta,
  edit: HoursItemEdit,
  save: HoursItemSave,
});