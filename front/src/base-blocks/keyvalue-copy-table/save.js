import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button
} from '@wordpress/components';

function createRow() {
  return {
    key: '',
    value: '',
    copyValue: ''
  };
}

export default function Edit({ attributes, setAttributes }) {
  const {
    anchorId,
    headerKey,
    headerValue,
    rows = []
  } = attributes;

  const updateRow = (index, field, value) => {
    const next = [...rows];
    next[index] = { ...next[index], [field]: value };
    setAttributes({ rows: next });
  };

  const addRow = () => {
    setAttributes({ rows: [...rows, createRow()] });
  };

  const removeRow = (index) => {
    const next = [...rows];
    next.splice(index, 1);
    setAttributes({ rows: next });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Таблица реквизитов" initialOpen={true}>
          <TextControl
            label="Anchor ID"
            value={anchorId}
            onChange={(value) => setAttributes({ anchorId: value })}
          />
          <TextControl
            label="Заголовок колонки 1"
            value={headerKey}
            onChange={(value) => setAttributes({ headerKey: value })}
          />
          <TextControl
            label="Заголовок колонки 2"
            value={headerValue}
            onChange={(value) => setAttributes({ headerValue: value })}
          />

          {rows.map((row, index) => (
            <div key={index} className="sb-editor-repeatable">
              <TextareaControl
                label={`Параметр ${index + 1}`}
                value={row.key || ''}
                onChange={(value) => updateRow(index, 'key', value)}
              />
              <TextareaControl
                label="Значение"
                value={row.value || ''}
                onChange={(value) => updateRow(index, 'value', value)}
              />
              <TextareaControl
                label="Текст для копирования"
                value={row.copyValue || ''}
                onChange={(value) => updateRow(index, 'copyValue', value)}
              />
              <Button variant="link" isDestructive onClick={() => removeRow(index)}>
                Удалить строку
              </Button>
            </div>
          ))}

          <Button variant="secondary" onClick={addRow}>
            + Строка
          </Button>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-kv-table-editor' })}>
        <strong>{headerKey} / {headerValue}</strong>
        <div className="sb-kv-table-editor__rows">
          {rows.length ? rows.map((row, index) => (
            <div key={index} className="sb-kv-table-editor__row">
              <div>{row.key || 'Пустой параметр'}</div>
              <div>{row.value || 'Пустое значение'}</div>
            </div>
          )) : (
            <div className="sb-kv-table-editor__empty">Добавь строки таблицы.</div>
          )}
        </div>
      </div>
    </>
  );
}