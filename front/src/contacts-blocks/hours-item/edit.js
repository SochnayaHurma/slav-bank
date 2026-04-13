import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { label, items = [] } = attributes;
  const blockProps = useBlockProps({ className: 'sbc-item' });

  const updateItem = (index, key, value) => {
    const next = [...items];
    next[index] = { ...next[index], [key]: value };
    setAttributes({ items: next });
  };

  const addItem = () => {
    setAttributes({
      items: [...items, { title: '', text: '' }],
    });
  };

  const removeItem = (index) => {
    const next = [...items];
    next.splice(index, 1);
    setAttributes({ items: next.length ? next : [{ title: '', text: '' }] });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Режим работы" initialOpen={true}>
          <TextControl
            label="Заголовок"
            value={label}
            onChange={(v) => setAttributes({ label: v })}
          />

          {items.map((item, index) => (
            <div key={index} style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #ddd' }}>
              <TextControl
                label={`Подзаголовок ${index + 1}`}
                value={item.title}
                onChange={(v) => updateItem(index, 'title', v)}
              />
              <TextareaControl
                label={`Текст ${index + 1}`}
                value={item.text}
                onChange={(v) => updateItem(index, 'text', v)}
              />
              <Button variant="secondary" onClick={() => removeItem(index)}>
                Удалить подпункт
              </Button>
            </div>
          ))}

          <Button variant="primary" onClick={addItem}>
            Добавить подпункт
          </Button>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="kicker"><b>{label}</b></div>
        <div className="sbc-hours">
          {items.map((item, index) => (
            <div className="alert" key={index}>
              <div className="sbc-alert__dot" aria-hidden="true"></div>
              <div>
                <div className="sbc-alert__title">{item.title}</div>
                <div className="sbc-muted sbc-alert__text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}