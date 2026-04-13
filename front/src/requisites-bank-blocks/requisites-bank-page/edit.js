import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const {
    heroKicker,
    heroTitle,
    heroDescription,
    primaryText,
    primaryUrl,
    secondaryText,
    secondaryUrl,
    badgeText,
    phoneText,
    phoneHref,
    emailText,
    emailHref,
    anchorTop,
    anchorTable
  } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Hero" initialOpen={true}>
          <TextControl
            label="Кикер"
            value={heroKicker}
            onChange={(value) => setAttributes({ heroKicker: value })}
          />
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
        </PanelBody>

        <PanelBody title="Контактная плашка" initialOpen={false}>
          <TextControl
            label="Badge"
            value={badgeText}
            onChange={(value) => setAttributes({ badgeText: value })}
          />
          <TextControl
            label="Телефон"
            value={phoneText}
            onChange={(value) => setAttributes({ phoneText: value })}
          />
          <TextControl
            label="Ссылка телефона"
            value={phoneHref}
            onChange={(value) => setAttributes({ phoneHref: value })}
          />
          <TextControl
            label="Email"
            value={emailText}
            onChange={(value) => setAttributes({ emailText: value })}
          />
          <TextControl
            label="Ссылка email"
            value={emailHref}
            onChange={(value) => setAttributes({ emailHref: value })}
          />
        </PanelBody>

        <PanelBody title="Якоря" initialOpen={false}>
          <TextControl
            label="Anchor верхней части"
            value={anchorTop}
            onChange={(value) => setAttributes({ anchorTop: value })}
          />
          <TextControl
            label="Anchor таблицы"
            value={anchorTable}
            onChange={(value) => setAttributes({ anchorTable: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-requisites-page-editor' })}>
        <div className="sb-hero-split-editor">
          <div className="sb-hero-split-editor__main">
            {heroKicker ? <div className="kicker">{heroKicker}</div> : null}
            {heroTitle ? <h2 className="sb-hero-split-editor__title">{heroTitle}</h2> : null}
            {heroDescription ? <p className="muted">{heroDescription}</p> : null}

            <div className="row" style={{ marginTop: '16px', flexWrap: 'wrap' }}>
              {primaryText ? <span className="btn primary">{primaryText}</span> : null}
              {secondaryText ? <span className="btn outline">{secondaryText}</span> : null}
            </div>
          </div>

          <div className="sb-hero-split-editor__pill">
            {badgeText ? <span className="sb-hero-split-editor__badge">{badgeText}</span> : null}
            {phoneText ? <span className="sb-hero-split-editor__mono">{phoneText}</span> : null}
            {emailText ? <span>{emailText}</span> : null}
          </div>
        </div>

        <div className="sb-requisites-page-editor__note">
          Верхний контент и таблица реквизитов сейчас рендерятся в PHP по текущему стабильному паттерну страницы.
        </div>
      </div>
    </>
  );
}