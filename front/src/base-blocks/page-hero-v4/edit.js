import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
  SelectControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const {
    variant,
    title,
    description,
    imageUrl,
    imageLeft,
    imageTop,
    primaryText,
    primaryUrl,
    secondaryText,
    secondaryUrl,
    tertiaryText,
    tertiaryUrl
  } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Hero" initialOpen={true}>
          <SelectControl
            label="Вариант hero"
            value={variant || 'v4'}
            options={[
              { label: 'V4 / strip hero', value: 'v4' },
              { label: 'Simple / упрощённый hero', value: 'simple' }
            ]}
            onChange={(value) => setAttributes({ variant: value })}
          />

          <TextControl
            label="Заголовок"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />

          <TextareaControl
            label="Описание"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
          />

          {(variant || 'v4') === 'v4' ? (
            <>
              <TextControl
                label="Смещение картинки слева"
                value={imageLeft}
                onChange={(value) => setAttributes({ imageLeft: Number(value) || 0 })}
              />

              <TextControl
                label="Смещение картинки сверху"
                value={imageTop}
                onChange={(value) => setAttributes({ imageTop: Number(value) || 0 })}
              />

              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => setAttributes({ imageUrl: media?.url || '' })}
                  allowedTypes={['image']}
                  render={({ open }) => (
                    <Button variant="secondary" onClick={open}>
                      {imageUrl ? 'Заменить картинку' : 'Выбрать картинку'}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </>
          ) : null}

          <TextControl
            label="Текст кнопки 1"
            value={primaryText}
            onChange={(value) => setAttributes({ primaryText: value })}
          />
          <TextControl
            label="URL кнопки 1"
            value={primaryUrl}
            onChange={(value) => setAttributes({ primaryUrl: value })}
          />

          <TextControl
            label="Текст кнопки 2"
            value={secondaryText}
            onChange={(value) => setAttributes({ secondaryText: value })}
          />
          <TextControl
            label="URL кнопки 2"
            value={secondaryUrl}
            onChange={(value) => setAttributes({ secondaryUrl: value })}
          />

          <TextControl
            label="Текст кнопки 3"
            value={tertiaryText}
            onChange={(value) => setAttributes({ tertiaryText: value })}
          />
          <TextControl
            label="URL кнопки 3"
            value={tertiaryUrl}
            onChange={(value) => setAttributes({ tertiaryUrl: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({
          className: `sb-hero-editor sb-hero-editor--${variant || 'v4'}`
        })}
      >
        <div className="sb-hero-editor__copy">
          <strong className="sb-hero-editor__title">{title || 'Заголовок страницы'}</strong>
          {description ? <p className="sb-hero-editor__text">{description}</p> : null}

          <div className="sb-hero-editor__actions">
            {primaryText ? <span className="sb-hero-editor__pill">{primaryText}</span> : null}
            {secondaryText ? <span className="sb-hero-editor__pill">{secondaryText}</span> : null}
            {tertiaryText ? <span className="sb-hero-editor__pill">{tertiaryText}</span> : null}
          </div>

          {(variant || 'v4') === 'v4' && imageUrl ? (
            <div className="sb-hero-editor__meta">Картинка выбрана</div>
          ) : null}
        </div>
      </div>
    </>
  );
}