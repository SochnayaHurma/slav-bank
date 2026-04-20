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

const ALLOWED_BLOCKS = ['slavbank/tariff-group'];

const TEMPLATE = [
  ['slavbank/tariff-group', { title: '— скачать:' }],
  ['slavbank/tariff-group', { title: '— открыть на сайте:' }],
];


export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    heroImageLeft,
    heroImageTop,
    anchorId,
    introTitle,
    introLinkText,
    introLinkUrl,
    finalCtaText,
    finalCtaUrl,
  } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Hero" initialOpen={true}>
          <TextControl label="Заголовок" value={heroTitle} onChange={(v) => setAttributes({ heroTitle: v })} />
          <TextareaControl label="Описание" value={heroDescription} onChange={(v) => setAttributes({ heroDescription: v })} />
          <TextControl label="Смещение картинки слева" value={heroImageLeft} onChange={(v) => setAttributes({ heroImageLeft: Number(v) || 0 })} />
          <TextControl label="Смещение картинки сверху" value={heroImageTop} onChange={(v) => setAttributes({ heroImageTop: Number(v) || 0 })} />
          <TextControl label="Anchor ID" value={anchorId} onChange={(v) => setAttributes({ anchorId: v })} />
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

        <PanelBody title="Тело страницы" initialOpen={false}>
          <TextControl label="Заголовок тела" value={introTitle} onChange={(v) => setAttributes({ introTitle: v })} />
          <TextControl label="Текст ссылки в заголовке" value={introLinkText} onChange={(v) => setAttributes({ introLinkText: v })} />
          <TextControl label="URL ссылки в заголовке" value={introLinkUrl} onChange={(v) => setAttributes({ introLinkUrl: v })} />
          <TextControl label="Текст нижней CTA" value={finalCtaText} onChange={(v) => setAttributes({ finalCtaText: v })} />
          <TextControl label="URL нижней CTA" value={finalCtaUrl} onChange={(v) => setAttributes({ finalCtaUrl: v })} />
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
                      style={{ left: `${heroImageLeft || 0}px`, top: `${heroImageTop || 0}px`, overflow: 'visible' }}
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
                      <a className="btn primary" href={`#${anchorId || 'pdf'}`} {...PREVIEW_LINK_PROPS}>Перейти к содержимому</a>
                      <a className="btn outline" href="/" {...PREVIEW_LINK_PROPS}>На главную</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block dashv2" id={anchorId || 'pdf'}>
          <div className="container">
            <div className="bento">
              <div className="bento-card" style={{ padding: 'var(--s-4)', position: 'relative' }}>
                <div className="prose">
                  <div className="entry-content">
                    <h2 className="kicker">
                      <br />
                      <RichText
                        tagName="span"
                        value={introTitle}
                        onChange={(value) => setAttributes({ introTitle: value })}
                        placeholder="Заголовок тела"
                      />
                      <strong>
                        {' '}
                        {introLinkUrl ? (
                          <a href={introLinkUrl} target="_blank" rel="noreferrer noopener" {...PREVIEW_LINK_PROPS}>
                            <RichText
                              tagName="span"
                              value={introLinkText}
                              onChange={(value) => setAttributes({ introLinkText: value })}
                              placeholder="Текст ссылки"
                            />
                          </a>
                        ) : (
                          <RichText
                            tagName="span"
                            value={introLinkText}
                            onChange={(value) => setAttributes({ introLinkText: value })}
                            placeholder="Текст ссылки"
                          />
                        )}
                      </strong>
                    </h2>

                    <InnerBlocks
                      allowedBlocks={ALLOWED_BLOCKS}
                      template={TEMPLATE}
                      templateLock={false}
                    />

                    <p className="has-text-align-center has-dark-blue-color has-text-color">
                      <strong>
                        {finalCtaUrl ? (
                          <a href={finalCtaUrl} target="_blank" rel="noreferrer noopener" {...PREVIEW_LINK_PROPS}>
                            <RichText
                              tagName="span"
                              value={finalCtaText}
                              onChange={(value) => setAttributes({ finalCtaText: value })}
                              placeholder="Нижний CTA"
                            />
                          </a>
                        ) : (
                          <RichText
                            tagName="span"
                            value={finalCtaText}
                            onChange={(value) => setAttributes({ finalCtaText: value })}
                            placeholder="Нижний CTA"
                          />
                        )}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
