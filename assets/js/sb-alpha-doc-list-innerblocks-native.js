(function (blocks, blockEditor, components, element, i18n) {
  var el = element.createElement;
  var InnerBlocks = blockEditor.InnerBlocks;
  var RichText = blockEditor.RichText;
  var BlockControls = blockEditor.BlockControls;
  var URLInputButton = blockEditor.URLInputButton;
  var ToolbarGroup = components.ToolbarGroup;
  var __ = i18n.__;

  blocks.registerBlockType('sb-alpha/doc-list', {
    apiVersion: 2,
    title: __('SB Alpha / Doc list', 'sb-alpha'),
    icon: 'list-view',
    category: 'sb-alpha',
    supports: {
      html: false,
      reusable: false,
    },
    edit: function () {
      return el(
        'div',
        { className: 'doc-list service-links', style: { marginTop: '12px' } },
        el(InnerBlocks, {
          allowedBlocks: ['sb-alpha/doc-row'],
          template: [['sb-alpha/doc-row', {}]],
          orientation: 'vertical',
          renderAppender: InnerBlocks.ButtonBlockAppender,
        })
      );
    },
    save: function () {
      return el(
        'div',
        { className: 'doc-list service-links', style: { marginTop: '12px' } },
        el(InnerBlocks.Content)
      );
    }
  });

  blocks.registerBlockType('sb-alpha/doc-row', {
    apiVersion: 2,
    title: __('SB Alpha / Doc row', 'sb-alpha'),
    icon: 'media-document',
    category: 'sb-alpha',
    parent: ['sb-alpha/doc-list'],
    supports: {
      html: false,
      reusable: false,
    },
    attributes: {
      date: {
        type: 'string',
        default: '29.09.2021',
      },
      title: {
        type: 'string',
        default: 'Список аффилированных лиц',
      },
      kind: {
        type: 'string',
        default: 'XLS',
      },
      url: {
        type: 'string',
        default: '#',
      },
      opensInNewTab: {
        type: 'boolean',
        default: true,
      }
    },
    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;

      return el(
        element.Fragment,
        {},
        el(
          BlockControls,
          {},
          el(
            ToolbarGroup,
            {},
            el(URLInputButton, {
              url: attributes.url,
              onChange: function (url) {
                setAttributes({ url: url || '#' });
              }
            })
          )
        ),
        el(
          'div',
          { className: 'doc-row service-link' },
          el(RichText, {
            tagName: 'span',
            className: 'doc-date',
            value: attributes.date,
            allowedFormats: [],
            placeholder: __('Дата', 'sb-alpha'),
            onChange: function (value) {
              setAttributes({ date: value });
            }
          }),
          el(RichText, {
            tagName: 'span',
            className: 'doc-title',
            value: attributes.title,
            allowedFormats: [],
            placeholder: __('Название документа', 'sb-alpha'),
            onChange: function (value) {
              setAttributes({ title: value });
            }
          }),
          el(RichText, {
            tagName: 'span',
            className: 'doc-ext route-chip',
            value: attributes.kind,
            allowedFormats: [],
            placeholder: __('Тип', 'sb-alpha'),
            onChange: function (value) {
              setAttributes({ kind: value });
            }
          }),
          el('span', { className: 'doc-arrow', 'aria-hidden': true }, '→')
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;
      var rel = attributes.opensInNewTab ? 'noopener' : undefined;
      var target = attributes.opensInNewTab ? '_blank' : undefined;

      return el(
        'a',
        {
          className: 'doc-row service-link',
          href: attributes.url || '#',
          target: target,
          rel: rel
        },
        el(RichText.Content, {
          tagName: 'span',
          className: 'doc-date',
          value: attributes.date
        }),
        el(RichText.Content, {
          tagName: 'span',
          className: 'doc-title',
          value: attributes.title
        }),
        el(RichText.Content, {
          tagName: 'span',
          className: 'doc-ext route-chip',
          value: attributes.kind
        }),
        el('span', { className: 'doc-arrow', 'aria-hidden': true }, '→')
      );
    }
  });
})(
  window.wp.blocks,
  window.wp.blockEditor,
  window.wp.components,
  window.wp.element,
  window.wp.i18n
);
