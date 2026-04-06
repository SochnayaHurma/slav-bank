(function (wp) {
  if (!wp || !wp.blocks || !wp.element || !wp.serverSideRender) {
    return;
  }

  const el = wp.element.createElement;
  const { registerBlockType } = wp.blocks;
  const { __ } = wp.i18n;
  const ServerSideRender = wp.serverSideRender;

  registerBlockType('slavbank/requisites-page-filled', {
    apiVersion: 2,
    title: __('SB Requisites Page Filled', 'slav-reqmig'),
    icon: 'id-alt',
    category: 'widgets',
    supports: {
      html: false,
      reusable: false,
    },
    edit: function () {
      return el(ServerSideRender, {
        block: 'slavbank/requisites-page-filled',
        attributes: {},
        method: 'POST',
      });
    },
    save: function () {
      return null;
    },
  });
})(window.wp);