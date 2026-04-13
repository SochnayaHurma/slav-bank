import {
  useBlockProps,
  InnerBlocks,
  InspectorControls
} from '@wordpress/block-editor';
import {
  PanelBody,
  ToggleControl,
  TextControl,
  TextareaControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { anchorId, showAlert, alertTitle, alertText } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Page shell" initialOpen={true}>
          <TextControl
            label="Anchor ID"
            value={anchorId}
            onChange={(value) => setAttributes({ anchorId: value })}
          />
          <ToggleControl
            label="Показывать alert"
            checked={!!showAlert}
            onChange={(value) => setAttributes({ showAlert: !!value })}
          />
          <TextControl
            label="Заголовок alert"
            value={alertTitle}
            onChange={(value) => setAttributes({ alertTitle: value })}
          />
          <TextareaControl
            label="Текст alert"
            value={alertText}
            onChange={(value) => setAttributes({ alertText: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-shell-editor' })}>
        {showAlert ? (
          <div className="sb-bank-editor-alert">
            <strong>{alertTitle || 'Alert'}</strong>
            <p>{alertText || ''}</p>
          </div>
        ) : null}

        <InnerBlocks />
      </div>
    </>
  );
}