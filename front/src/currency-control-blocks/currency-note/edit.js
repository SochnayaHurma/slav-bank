import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, SelectControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { text, tone } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Тезис" initialOpen={true}>
          <SelectControl
            label="Тип"
            value={tone}
            options={[
              { label: 'Акцентный', value: 'strong' },
              { label: 'Спокойный', value: 'soft' },
            ]}
            onChange={(value) => setAttributes({ tone: value })}
          />
          <TextareaControl
            label="Текст"
            value={text}
            onChange={(value) => setAttributes({ text: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({
          className: `sb-cc-note sb-cc-note--${tone || 'strong'}`
        })}
      >
        <p>{text}</p>
      </div>
    </>
  );
}