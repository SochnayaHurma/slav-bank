(function (wp) {
  const { registerBlockType } = wp.blocks;
  const { __ } = wp.i18n;
  const el = wp.element.createElement;
  const Fragment = wp.element.Fragment;
  const {
    InspectorControls,
    BlockControls,
    InnerBlocks,
    RichText,
    MediaUpload,
    MediaUploadCheck,
    URLInputButton,
    useBlockProps,
  } = wp.blockEditor;
  const {
    PanelBody,
    Button,
    RangeControl,
    ToolbarGroup,
    ToolbarButton,
    Popover,
  } = wp.components;
  const { useState } = wp.element;

  const LinkControl = (wp.blockEditor && (wp.blockEditor.LinkControl || wp.blockEditor.__experimentalLinkControl)) || null;
  const DEFAULT_BG = (window.SBAlphaExampleCardBlockData && window.SBAlphaExampleCardBlockData.defaultImageUrl) || '';

  function normalizeLinkValue(attributes) {
    return {
      url: attributes.linkUrl || '',
      opensInNewTab: !!attributes.opensInNewTab,
    };
  }

  registerBlockType('sb-alpha/repeater-card-container', {
    apiVersion: 2,
    title: __('SB Alpha / Card Container', 'sb-alpha'),
    icon: 'screenoptions',
    category: 'design',
    description: __('Контейнер с повторяемыми карточками внутри. Добавление стандартным плюсом, удаление стандартной корзинкой WordPress.', 'sb-alpha'),
    supports: {
      html: false,
      reusable: false,
    },
    edit: function () {
      const blockProps = useBlockProps({ className: 'sb-alpha-card-repeater section-card' });

      return el(
        'div',
        blockProps,
        el(
          'div',
          { className: 'sb-alpha-card-repeater__items' },
          el(InnerBlocks, {
            allowedBlocks: ['sb-alpha/repeater-card-item'],
            orientation: 'horizontal',
            template: [['sb-alpha/repeater-card-item']],
            renderAppender: InnerBlocks.ButtonBlockAppender,
          })
        )
      );
    },
    save: function () {
      const blockProps = useBlockProps.save({ className: 'sb-alpha-card-repeater section-card' });

      return el(
        'div',
        blockProps,
        el(
          'div',
          { className: 'sb-alpha-card-repeater__items' },
          el(InnerBlocks.Content)
        )
      );
    },
  });

  registerBlockType('sb-alpha/repeater-card-item', {
    apiVersion: 2,
    title: __('SB Alpha / Card Item', 'sb-alpha'),
    icon: 'format-image',
    category: 'design',
    parent: ['sb-alpha/repeater-card-container'],
    description: __('Карточка с ссылкой, фоновым изображением, span и h4.', 'sb-alpha'),
    supports: {
      html: false,
      reusable: false,
    },
    attributes: {
      eyebrow: {
        type: 'string',
        default: 'Категория',
      },
      title: {
        type: 'string',
        default: 'Заголовок карточки',
      },
      linkUrl: {
        type: 'string',
        default: '',
      },
      opensInNewTab: {
        type: 'boolean',
        default: false,
      },
      backgroundUrl: {
        type: 'string',
        default: '',
      },
      minHeight: {
        type: 'number',
        default: 220,
      },
    },
    edit: function (props) {
      const { attributes, setAttributes } = props;
      const [isLinkPickerOpen, setIsLinkPickerOpen] = useState(false);
      const backgroundUrl = attributes.backgroundUrl || DEFAULT_BG;
      const blockProps = useBlockProps({
        className: 'sb-alpha-card-item',
        style: {
          backgroundImage: backgroundUrl ? 'url("' + backgroundUrl + '")' : undefined,
          minHeight: attributes.minHeight ? attributes.minHeight + 'px' : undefined,
        },
      });

      function setLinkValue(nextValue) {
        if (!nextValue) {
          setAttributes({ linkUrl: '', opensInNewTab: false });
          return;
        }

        setAttributes({
          linkUrl: nextValue.url || '',
          opensInNewTab: !!nextValue.opensInNewTab,
        });
      }

      return el(
        Fragment,
        null,
        el(
          BlockControls,
          null,
          el(
            ToolbarGroup,
            null,
            el(ToolbarButton, {
              icon: 'admin-links',
              label: __('Изменить ссылку', 'sb-alpha'),
              onClick: function () {
                setIsLinkPickerOpen(!isLinkPickerOpen);
              },
              isPressed: isLinkPickerOpen,
            })
          )
        ),
        isLinkPickerOpen
          ? el(
              Popover,
              {
                position: 'bottom center',
                onClose: function () {
                  setIsLinkPickerOpen(false);
                },
              },
              LinkControl
                ? el(LinkControl, {
                    value: normalizeLinkValue(attributes),
                    onChange: setLinkValue,
                    settings: [
                      {
                        id: 'opensInNewTab',
                        title: __('Открывать в новой вкладке', 'sb-alpha'),
                      },
                    ],
                  })
                : el(URLInputButton, {
                    url: attributes.linkUrl,
                    onChange: function (url) {
                      setAttributes({ linkUrl: url || '' });
                    },
                  })
            )
          : null,
        el(
          InspectorControls,
          null,
          el(
            PanelBody,
            { title: __('Фон карточки', 'sb-alpha'), initialOpen: true },
            el(MediaUploadCheck, null,
              el(MediaUpload, {
                onSelect: function (media) {
                  setAttributes({ backgroundUrl: media && media.url ? media.url : '' });
                },
                allowedTypes: ['image'],
                render: function (obj) {
                  return el(
                    Button,
                    { variant: 'secondary', onClick: obj.open },
                    attributes.backgroundUrl ? __('Заменить фон', 'sb-alpha') : __('Выбрать фон', 'sb-alpha')
                  );
                },
              })
            ),
            attributes.backgroundUrl
              ? el(
                  Button,
                  {
                    variant: 'tertiary',
                    onClick: function () {
                      setAttributes({ backgroundUrl: '' });
                    },
                    style: { marginTop: '12px' },
                  },
                  __('Сбросить на asset из темы', 'sb-alpha')
                )
              : null,
            el(RangeControl, {
              label: __('Минимальная высота', 'sb-alpha'),
              value: attributes.minHeight || 220,
              onChange: function (value) {
                setAttributes({ minHeight: value || 220 });
              },
              min: 160,
              max: 420,
              step: 10,
            })
          ),
          LinkControl
            ? el(
                PanelBody,
                { title: __('Ссылка карточки', 'sb-alpha'), initialOpen: false },
                el(LinkControl, {
                  value: normalizeLinkValue(attributes),
                  onChange: setLinkValue,
                  settings: [
                    {
                      id: 'opensInNewTab',
                      title: __('Открывать в новой вкладке', 'sb-alpha'),
                    },
                  ],
                })
              )
            : el(
                PanelBody,
                { title: __('Ссылка карточки', 'sb-alpha'), initialOpen: false },
                el(URLInputButton, {
                  url: attributes.linkUrl,
                  onChange: function (url) {
                    setAttributes({ linkUrl: url || '' });
                  },
                })
              )
        ),
        el(
          'div',
          blockProps,
          el(
            'a',
            {
              className: 'sb-alpha-card-item__link',
              href: attributes.linkUrl || '#',
              target: attributes.opensInNewTab ? '_blank' : undefined,
              rel: attributes.opensInNewTab ? 'noopener noreferrer' : undefined,
            },
            el(
              'span',
              { className: 'sb-alpha-card-item__content' },
              el(RichText, {
                tagName: 'span',
                className: 'sb-alpha-card-item__eyebrow',
                value: attributes.eyebrow,
                allowedFormats: [],
                placeholder: __('Метка', 'sb-alpha'),
                onChange: function (value) {
                  setAttributes({ eyebrow: value });
                },
              }),
              el(RichText, {
                tagName: 'h4',
                className: 'sb-alpha-card-item__title',
                value: attributes.title,
                allowedFormats: [],
                placeholder: __('Заголовок карточки', 'sb-alpha'),
                onChange: function (value) {
                  setAttributes({ title: value });
                },
              })
            )
          )
        )
      );
    },
    save: function (props) {
      const { attributes } = props;
      const backgroundUrl = attributes.backgroundUrl || DEFAULT_BG;
      const blockProps = useBlockProps.save({
        className: 'sb-alpha-card-item',
        style: {
          backgroundImage: backgroundUrl ? 'url("' + backgroundUrl + '")' : undefined,
          minHeight: attributes.minHeight ? attributes.minHeight + 'px' : undefined,
        },
      });

      return el(
        'div',
        blockProps,
        el(
          'a',
          {
            className: 'sb-alpha-card-item__link',
            href: attributes.linkUrl || '#',
            target: attributes.opensInNewTab ? '_blank' : undefined,
            rel: attributes.opensInNewTab ? 'noopener noreferrer' : undefined,
          },
          el(
            'span',
            { className: 'sb-alpha-card-item__content' },
            el(RichText.Content, {
              tagName: 'span',
              className: 'sb-alpha-card-item__eyebrow',
              value: attributes.eyebrow,
            }),
            el(RichText.Content, {
              tagName: 'h4',
              className: 'sb-alpha-card-item__title',
              value: attributes.title,
            })
          )
        )
      );
    },
  });
})(window.wp);
