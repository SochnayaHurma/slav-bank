import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const {
    kicker,
    title,
    text,
    primaryText,
    primaryUrl,
    primaryBlank,
    secondaryText,
    secondaryUrl,
    secondaryBlank
  } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Access card" initialOpen={true}>
          <TextControl label="Кикер" value={kicker} onChange={(value) => setAttributes({ kicker: value })} />
          <TextControl label="Заголовок" value={title} onChange={(value) => setAttributes({ title: value })} />
          <TextareaControl label="Текст" value={text} onChange={(value) => setAttributes({ text: value })} />

          <TextControl label="Текст кнопки 1" value={primaryText} onChange={(value) => setAttributes({ primaryText: value })} />
          <TextControl label="URL кнопки 1" value={primaryUrl} onChange={(value) => setAttributes({ primaryUrl: value })} />
          <ToggleControl label="Кнопка 1 в новой вкладке" checked={!!primaryBlank} onChange={(value) => setAttributes({ primaryBlank: !!value })} />

          <TextControl label="Текст кнопки 2" value={secondaryText} onChange={(value) => setAttributes({ secondaryText: value })} />
          <TextControl label="URL кнопки 2" value={secondaryUrl} onChange={(value) => setAttributes({ secondaryUrl: value })} />
          <ToggleControl label="Кнопка 2 в новой вкладке" checked={!!secondaryBlank} onChange={(value) => setAttributes({ secondaryBlank: !!value })} />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'access-card' })}>
        <div className="kicker">{kicker}</div>
        <div className="access-title">{title}</div>
        {text ? <div className="muted" style={{ marginTop: '6px' }}>{text}</div> : null}
      </div>
    </>
  );
}