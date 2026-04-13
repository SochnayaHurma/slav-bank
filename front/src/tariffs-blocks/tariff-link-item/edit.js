import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { title, url, date, targetBlank } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Документ тарифа" initialOpen={true}>
          <TextControl label="Название" value={title} onChange={(v) => setAttributes({ title: v })} />
          <TextControl label="Ссылка" value={url} onChange={(v) => setAttributes({ url: v })} />
          <TextControl label="Дата / метка" value={date} onChange={(v) => setAttributes({ date: v })} />
          <ToggleControl label="Открывать в новой вкладке" checked={!!targetBlank} onChange={(v) => setAttributes({ targetBlank: !!v })} />
        </PanelBody>
      </InspectorControls>

      <li {...useBlockProps({ className: 'sb-tariff-link-item-editor' })}>
        <div className="doc-card">
          <span className="doc-title"><strong>{title || 'Название документа'}</strong></span>
          <span className="doc-arrow doc-ext">{date || 'дата'}</span>
        </div>
      </li>
    </>
  );
}