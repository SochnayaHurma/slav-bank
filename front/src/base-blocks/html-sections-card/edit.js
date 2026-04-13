import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  TextareaControl,
  Button
} from '@wordpress/components';

function createSection() {
  return {
    tag: 'p',
    tone: 'body',
    html: ''
  };
}

export default function Edit({ attributes, setAttributes }) {
  const sections = Array.isArray(attributes.sections) ? attributes.sections : [];

  const updateSection = (index, field, value) => {
    const next = [...sections];
    next[index] = { ...next[index], [field]: value };
    setAttributes({ sections: next });
  };

  const addSection = () => {
    setAttributes({ sections: [...sections, createSection()] });
  };

  const removeSection = (index) => {
    const next = [...sections];
    next.splice(index, 1);
    setAttributes({ sections: next });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="HTML sections card" initialOpen={true}>
          {sections.map((section, index) => (
            <div key={index} className="sb-editor-repeatable">
              <SelectControl
                label={`Тег секции ${index + 1}`}
                value={section.tag || 'p'}
                options={[
                  { label: 'Paragraph', value: 'p' },
                  { label: 'Heading H3', value: 'h3' },
                  { label: 'Div', value: 'div' }
                ]}
                onChange={(value) => updateSection(index, 'tag', value)}
              />
              <SelectControl
                label="Тон"
                value={section.tone || 'body'}
                options={[
                  { label: 'Body', value: 'body' },
                  { label: 'Kicker', value: 'kicker' },
                  { label: 'Accent', value: 'accent' },
                  { label: 'Figure', value: 'figure' }
                ]}
                onChange={(value) => updateSection(index, 'tone', value)}
              />
              <TextareaControl
                label="HTML-содержимое"
                value={section.html || ''}
                onChange={(value) => updateSection(index, 'html', value)}
                help="Допустимы базовые теги: a, br, strong, em, span, div."
              />
              <Button variant="link" isDestructive onClick={() => removeSection(index)}>
                Удалить секцию
              </Button>
            </div>
          ))}

          <Button variant="secondary" onClick={addSection}>
            + Секция
          </Button>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-html-sections-editor' })}>
        {sections.length ? (
          sections.map((section, index) => (
            <div key={index} className="sb-html-sections-editor__item">
              <strong>{section.tag || 'p'} / {section.tone || 'body'}</strong>
              <div className="sb-html-sections-editor__preview">
                {section.html || 'Пустая секция'}
              </div>
            </div>
          ))
        ) : (
          <div className="sb-html-sections-editor__empty">Добавь секции контента.</div>
        )}
      </div>
    </>
  );
}