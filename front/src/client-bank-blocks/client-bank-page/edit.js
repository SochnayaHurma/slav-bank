import {
  useBlockProps,
  InnerBlocks,
  RichText,
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
import { PREVIEW_LINK_PROPS } from '../../shared/previewLinkProps';

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
        <section className="block">
          <div className="container">
            <div className="hero-wrap" style={{ padding: 'var(--s-5)' }}>
              <div className="v4-strips">
                <div className="v4-strip">
                  {heroImageUrl ? (
                    <img
                      style={{ left: `${heroImageLeft || 0}px` }}
                      src={heroImageUrl}
                      alt=""
                    />
                  ) : null}

                  <div className="v4-strip-copy v4-glass">
                    <RichText
                      tagName="h3"
                      value={heroTitle}
                      onChange={(value) => setAttributes({ heroTitle: value })}
                      placeholder="Заголовок hero"
                    />
                    <RichText
                      tagName="p"
                      value={heroDescription}
                      onChange={(value) => setAttributes({ heroDescription: value })}
                      placeholder="Описание hero"
                    />

                    <div className="v4-strip-actions">
                      <a className="btn primary" href={`#${anchorId || 'content'}`} {...PREVIEW_LINK_PROPS}>Содержание</a>
                      <a className="btn outline" href="/" {...PREVIEW_LINK_PROPS}>На главную</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block dashv2" id={anchorId || 'content'}>
          <div className="container">
            <div className="bento">
              <div className="bento-card" style={{ padding: 'var(--s-4)', position: 'relative' }}>
                <div className="access-card" style={{ marginTop: '10px' }}>
                  <RichText
                    tagName="div"
                    className="kicker"
                    value={accessKicker}
                    onChange={(value) => setAttributes({ accessKicker: value })}
                    placeholder="Кикер"
                  />
                  <RichText
                    tagName="div"
                    className="access-title"
                    value={accessTitle}
                    onChange={(value) => setAttributes({ accessTitle: value })}
                    placeholder="Заголовок карточки"
                  />
                  <RichText
                    tagName="div"
                    className="muted"
                    style={{ marginTop: '6px' }}
                    value={accessText}
                    onChange={(value) => setAttributes({ accessText: value })}
                    placeholder="Текст карточки"
                  />

                  <div className="row" style={{ marginTop: '12px', flexWrap: 'wrap' }}>
                    <a className="btn primary" href={accessPrimaryUrl || '#'} target="_blank" rel="noreferrer noopener" {...PREVIEW_LINK_PROPS}>
                      <RichText
                        tagName="span"
                        value={accessPrimaryText}
                        onChange={(value) => setAttributes({ accessPrimaryText: value })}
                        placeholder="Текст основной кнопки"
                      />
                    </a>
                    <a className="btn outline" href={accessSecondaryUrl || '#'} {...PREVIEW_LINK_PROPS}>
                      <RichText
                        tagName="span"
                        value={accessSecondaryText}
                        onChange={(value) => setAttributes({ accessSecondaryText: value })}
                        placeholder="Текст второй кнопки"
                      />
                    </a>
                  </div>
                </div>

                <div className="sb-cb-body">
                  <RichText
                    tagName="p"
                    className="sb-cb-lead"
                    value={leadText}
                    onChange={(value) => setAttributes({ leadText: value })}
                    placeholder="Основной абзац"
                  />
                  <div className="sb-cb-entry-link">
                    {entryLinkUrl ? (
                      <a href={entryLinkUrl} target="_blank" rel="noreferrer noopener" {...PREVIEW_LINK_PROPS}>
                        <strong>
                          <RichText
                            tagName="span"
                            value={entryLinkText}
                            onChange={(value) => setAttributes({ entryLinkText: value })}
                            placeholder="Текст ссылки входа"
                          />
                        </strong>
                      </a>
                    ) : (
                      <strong>
                        <RichText
                          tagName="span"
                          value={entryLinkText}
                          onChange={(value) => setAttributes({ entryLinkText: value })}
                          placeholder="Текст ссылки входа"
                        />
                      </strong>
                    )}
                  </div>

                  <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                    templateLock={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
