import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button
} from '@wordpress/components';

const ALLOWED_BLOCKS = [
  'slavbank/client-bank-feature-group',
  'slavbank/client-bank-note'
];

const TEMPLATE = [
  [
    'slavbank/client-bank-feature-group',
    {
      title: 'Система «Клиент-Банк» позволяет:',
      items: [
        'отправлять в банк платёжные поручения',
        'посылать в банк официальные письма, заверенные электронной цифровой подписью',
        'получать выписки по расчётным счетам',
        'получать из банка сообщения, уведомления и другую справочную информацию',
        'отправлять в банк валютные переводы, справки о валютных операциях (для клиентов, имеющих валютные счета)',
        'получать из банка различные документы, справки и т.п.'
      ]
    }
  ],
  [
    'slavbank/client-bank-note',
    {
      tone: 'strong',
      text: 'Банк имеет все необходимые сертификаты для работы со средствами криптографической защиты информации.'
    }
  ]
];

export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    heroImageLeft,
    anchorId,
    accessKicker,
    accessTitle,
    accessText,
    accessPrimaryText,
    accessPrimaryUrl,
    accessSecondaryText,
    accessSecondaryUrl,
    leadText,
    entryLinkText,
    entryLinkUrl
  } = attributes;

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
          <TextControl
            label="Смещение картинки слева"
            value={heroImageLeft}
            onChange={(value) => setAttributes({ heroImageLeft: Number(value) || 0 })}
          />
          <TextControl
            label="Anchor ID"
            value={anchorId}
            onChange={(value) => setAttributes({ anchorId: value })}
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

        <PanelBody title="Карточка входа" initialOpen={false}>
          <TextControl
            label="Кикер"
            value={accessKicker}
            onChange={(value) => setAttributes({ accessKicker: value })}
          />
          <TextControl
            label="Заголовок"
            value={accessTitle}
            onChange={(value) => setAttributes({ accessTitle: value })}
          />
          <TextareaControl
            label="Описание"
            value={accessText}
            onChange={(value) => setAttributes({ accessText: value })}
          />
          <TextControl
            label="Текст основной кнопки"
            value={accessPrimaryText}
            onChange={(value) => setAttributes({ accessPrimaryText: value })}
          />
          <TextControl
            label="URL основной кнопки"
            value={accessPrimaryUrl}
            onChange={(value) => setAttributes({ accessPrimaryUrl: value })}
          />
          <TextControl
            label="Текст второй кнопки"
            value={accessSecondaryText}
            onChange={(value) => setAttributes({ accessSecondaryText: value })}
          />
          <TextControl
            label="URL второй кнопки"
            value={accessSecondaryUrl}
            onChange={(value) => setAttributes({ accessSecondaryUrl: value })}
          />
        </PanelBody>

        <PanelBody title="Текст под карточкой входа" initialOpen={false}>
          <TextareaControl
            label="Основной абзац"
            value={leadText}
            onChange={(value) => setAttributes({ leadText: value })}
          />
          <TextControl
            label="Текст ссылки входа"
            value={entryLinkText}
            onChange={(value) => setAttributes({ entryLinkText: value })}
          />
          <TextControl
            label="URL ссылки входа"
            value={entryLinkUrl}
            onChange={(value) => setAttributes({ entryLinkUrl: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-bank-editor-page' })}>
        <div className="sb-bank-editor-hero">
          <strong>{heroTitle}</strong>
          <p>{heroDescription}</p>
        </div>

        <div className="sb-bank-editor-body">
          <div className="sb-cb-editor-access">
            <div className="kicker">{accessKicker}</div>
            <strong>{accessTitle}</strong>
            <p>{accessText}</p>
          </div>

          {leadText ? <p>{leadText}</p> : null}
          {entryLinkText ? <div><strong>{entryLinkText}</strong></div> : null}

          <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            templateLock={false}
          />
        </div>
      </div>
    </>
  );
}