import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

const ALLOWED_BLOCKS = ['slavbank/tariff-link-item'];

export default function Edit({ attributes, setAttributes }) {
  const { title } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Группа тарифов" initialOpen={true}>
          <TextControl label="Заголовок группы" value={title} onChange={(v) => setAttributes({ title: v })} />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-tariff-group-editor' })}>
        <p><strong>{title}</strong></p>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} templateLock={false} />
      </div>
    </>
  );
}