import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { title, items = [] } = attributes;

  const updateItem = (index, value) => {
    const next = [...items];
    next[index] = value;
    setAttributes({ items: next });
  };

  const addItem = () => {
    setAttributes({ items: [...items, ''] });
  };

  const removeItem = (index) => {
    const next = [...items];
    next.splice(index, 1);
    setAttributes({ items: next.length ? next : [''] });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Группа возможностей" initialOpen={true}>
          <TextControl
            label="Заголовок"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-cb-group-editor' })}>
        <h3>{title}</h3>

        <div className="sb-cb-editor-list">
          {items.map((item, index) => (
            <div className="sb-cb-editor-row" key={index}>
              <TextControl
                label={`Пункт ${index + 1}`}
                value={item}
                onChange={(value) => updateItem(index, value)}
              />
              <Button variant="secondary" onClick={() => removeItem(index)}>
                Удалить
              </Button>
            </div>
          ))}
        </div>

        <Button variant="primary" onClick={addItem}>
          Добавить пункт
        </Button>
      </div>
    </>
  );
}