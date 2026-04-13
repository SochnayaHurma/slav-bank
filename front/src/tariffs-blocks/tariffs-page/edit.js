
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
        <div className="sb-bank-editor-hero">
          <strong>{heroTitle}</strong>
          <p>{heroDescription}</p>
        </div>

        <div className="sb-bank-editor-body">
          <strong>{introTitle}</strong>

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