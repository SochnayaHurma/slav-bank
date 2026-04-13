import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const {
    title,
    titleUrl,
    leadText,
    itemsRaw,
    detailsLabel,
    detailsUrl,
    contactText,
    buttonText,
    buttonUrl,
    openInNewTab
  } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Карточка услуги" initialOpen={true}>
          <TextControl
            label="Заголовок"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
          <TextControl
            label="Ссылка заголовка"
            value={titleUrl}
            onChange={(value) => setAttributes({ titleUrl: value })}
          />
          <TextareaControl
            label="Вводный текст"
            value={leadText}
            onChange={(value) => setAttributes({ leadText: value })}
          />
          <TextareaControl
            label="Список услуг (каждый пункт с новой строки)"
            value={itemsRaw}
            onChange={(value) => setAttributes({ itemsRaw: value })}
          />
          <TextControl
            label="Подпись ссылки «Подробнее»"
            value={detailsLabel}
            onChange={(value) => setAttributes({ detailsLabel: value })}
          />
          <TextControl
            label="Ссылка «Подробнее»"
            value={detailsUrl}
            onChange={(value) => setAttributes({ detailsUrl: value })}
          />
          <TextareaControl
            label="Контактный/информационный блок"
            value={contactText}
            onChange={(value) => setAttributes({ contactText: value })}
          />
          <TextControl
            label="Текст кнопки"
            value={buttonText}
            onChange={(value) => setAttributes({ buttonText: value })}
          />
          <TextControl
            label="Ссылка кнопки"
            value={buttonUrl}
            onChange={(value) => setAttributes({ buttonUrl: value })}
          />
          <ToggleControl
            label="Открывать ссылки в новой вкладке"
            checked={!!openInNewTab}
            onChange={(value) => setAttributes({ openInNewTab: !!value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-le-service-editor' })}>
        <h3>{title || 'Название услуги'}</h3>
        {leadText ? <p>{leadText}</p> : null}
        {itemsRaw ? <div className="sb-le-editor-items">{itemsRaw}</div> : null}
        {contactText ? <div className="sb-le-editor-callout">{contactText}</div> : null}
        {buttonText ? <div className="sb-le-editor-button">{buttonText}</div> : null}
      </div>
    </>
  );
}