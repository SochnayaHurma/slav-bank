import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { label, value, note, copyValue } = attributes;
  const blockProps = useBlockProps({ className: 'sbc-item' });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Адрес" initialOpen={true}>
          <TextControl label="Заголовок" value={label} onChange={(v) => setAttributes({ label: v })} />
          <TextControl label="Адрес" value={value} onChange={(v) => setAttributes({ value: v })} />
          <TextControl label="Примечание" value={note} onChange={(v) => setAttributes({ note: v })} />
          <TextControl label="Значение для копирования" value={copyValue} onChange={(v) => setAttributes({ copyValue: v })} />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="sbc-kicker"><b>{label}</b></div>
        <div className="sbc-item__value">{value}</div>
        {note ? <div className="sbc-muted">{note}</div> : null}
      </div>
    </>
  );
}