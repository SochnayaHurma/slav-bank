import { useBlockProps, InnerBlocks, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';

const ALLOWED_BLOCKS = [
  'slavbank/contact-item',
  'slavbank/address-item',
  'slavbank/hours-item',
  'slavbank/info-item',
];

const TEMPLATE = [
    [
    'slavbank/info-item',
    {
      label: '',
      items: [
        {
          title: 'Контакты банка',
          text: 'Ниже — основные каналы связи, адрес и режим работы. Для обращений используйте форму «Написать в банк».',
        },
      ],
    },
  ],
  [
    'slavbank/contact-item',
    {
      label: 'Телефон',
      value: '8162665247',
      href: 'tel:78162665247',
      note: 'Единый номер банка',
      copyValue: '8162665247',
      actionLabel: 'Позвонить',
    },
  ],
  [
    'slavbank/contact-item',
    {
      label: 'Электронная почта',
      value: 'nkb@slavbank.ru',
      href: 'mailto:nkb@slavbank.ru',
      note: 'Для общих вопросов и документов',
      copyValue: 'nkb@slavbank.ru',
      actionLabel: 'Написать',
    },
  ],
  [
    'slavbank/address-item',
    {
      label: 'Адрес',
      value: 'г. Великий Новгород, ул. Черемнова-Конюхова, дом 12',
      note: 'Головной офис',
      copyValue: 'г. Великий Новгород, ул. Черемнова-Конюхова, дом 12',
    },
  ],
  [
    'slavbank/hours-item',
    {
      label: 'Режим работы',
      items: [
        {
          title: 'С клиентами',
          text: 'пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без обеда, выходные — суббота, воскресенье',
        },
        {
          title: 'Поддержка',
          text: 'с 08:30 до 17:30 (пт до 16:30), обед 13:00–14:00; выходные — сб, вс',
        },
      ],
    },
  ],
];

export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    introTitle,
    introText,
    mapTitle,
    mapAddress,
  } = attributes;

  const blockProps = useBlockProps({
    className: 'sbc-editor-page',
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Hero" initialOpen={true}>
          <TextControl
            label="Заголовок"
            value={heroTitle}
            onChange={(value) => setAttributes({ heroTitle: value })}
          />
          <TextareaControl
            label="Описание"
            value={heroDescription}
            onChange={(value) => setAttributes({ heroDescription: value })}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ heroImageUrl: media?.url || '' })}
              allowedTypes={['image']}
              render={({ open }) => (
                <Button variant="secondary" onClick={open}>
                  {heroImageUrl ? 'Заменить картинку' : 'Выбрать картинку'}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title="Вводный блок" initialOpen={false}>
          <TextControl
            label="Заголовок"
            value={introTitle}
            onChange={(value) => setAttributes({ introTitle: value })}
          />
          <TextareaControl
            label="Текст"
            value={introText}
            onChange={(value) => setAttributes({ introText: value })}
          />
        </PanelBody>

        <PanelBody title="Карта" initialOpen={false}>
          <TextControl
            label="Заголовок"
            value={mapTitle}
            onChange={(value) => setAttributes({ mapTitle: value })}
          />
          <TextControl
            label="Адрес"
            value={mapAddress}
            onChange={(value) => setAttributes({ mapAddress: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="sbc-editor-hero">
          <strong>{heroTitle || 'Контакты'}</strong>
          <p>{heroDescription || ''}</p>
          {heroImageUrl ? <div className="sbc-editor-note">Картинка выбрана</div> : null}
        </div>

        <div className="sbc-editor-main">
          <div className="sbc-editor-intro">
            <strong>{introTitle || 'Контакты банка'}</strong>
            <p>{introText || ''}</p>
          </div>

          <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            templateLock={false}
          />

          <div className="sbc-editor-map">
            <strong>{mapTitle || 'Как нас найти'}</strong>
            <p>{mapAddress || ''}</p>
          </div>
        </div>
      </div>
    </>
  );
}