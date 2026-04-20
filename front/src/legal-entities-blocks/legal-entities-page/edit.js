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

const ALLOWED_BLOCKS = ['slavbank/legal-service-card'];

const TEMPLATE = [
  [
    'slavbank/legal-service-card',
    {
      title: 'Кредитование юридических лиц и предпринимателей',
      titleUrl: '/business-lending/',
      leadText: 'Является одним из ведущих направлений деятельности АО НКБ «СЛАВЯНБАНК». Банк предоставляет кредиты юридическим лицам в рублях и иностранной валюте.',
      detailsLabel: 'Подробнее с услугой можно ознакомиться здесь',
      detailsUrl: '/business-lending/',
      contactText: 'Более подробную информацию вы можете получить по телефонам: (8162) 66-52-56 или 66-52-63 в Управлении по кредитованию и инвестициям Банка.'
    }
  ]
];


export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    anchorId,
    alertTitle,
    alertText
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

        <PanelBody title="Alert" initialOpen={false}>
          <TextControl
            label="Заголовок alert"
            value={alertTitle}
            onChange={(value) => setAttributes({ alertTitle: value })}
          />
          <TextareaControl
            label="Текст alert"
            value={alertText}
            onChange={(value) => setAttributes({ alertText: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-bank-editor-page' })}>
        <section className="block">
          <div className="container">
            <div className="hero-wrap" style={{ padding: 'var(--s-5)' }}>
              <div className="v4-strips">
                <div className="v4-strip">
                  {heroImageUrl ? <img src={heroImageUrl} alt="" /> : null}
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
                      <a className="btn outline" href="/napisat-v-bank/#form" {...PREVIEW_LINK_PROPS}>Связаться</a>
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
                <div className="alert">
                  <div className="alert-dot" aria-hidden="true"></div>
                  <div>
                    <RichText
                      tagName="div"
                      style={{ fontWeight: 600 }}
                      value={alertTitle}
                      onChange={(value) => setAttributes({ alertTitle: value })}
                      placeholder="Заголовок alert"
                    />
                    <RichText
                      tagName="div"
                      className="muted"
                      style={{ marginTop: '4px' }}
                      value={alertText}
                      onChange={(value) => setAttributes({ alertText: value })}
                      placeholder="Текст alert"
                    />
                  </div>
                </div>

                <div className="sb-le-body">
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
