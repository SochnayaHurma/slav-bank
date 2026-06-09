import { Button, PanelBody, SelectControl, TextControl } from '@wordpress/components';

const BUTTON_STYLE_OPTIONS = [
  { label: 'Primary', value: 'primary' },
  { label: 'Outline', value: 'outline' }
];

export function normalizeHeroButtons(buttons, defaults = []) {
  const source = Array.isArray(buttons) ? buttons : defaults;

  return source.map((button, index) => ({
    text: button?.text || '',
    url: button?.url || '',
    style: button?.style === 'primary' ? 'primary' : 'outline',
    key: button?.key || `hero-button-${index}`
  }));
}

export function HeroButtonsControls({ buttons, defaults, onChange }) {
  const normalizedButtons = normalizeHeroButtons(buttons, defaults);

  const updateButton = (index, patch) => {
    onChange(normalizedButtons.map((button, buttonIndex) => (
      buttonIndex === index ? { ...button, ...patch } : button
    )));
  };

  const removeButton = (index) => {
    onChange(normalizedButtons.filter((button, buttonIndex) => buttonIndex !== index));
  };

  const addButton = () => {
    onChange([
      ...normalizedButtons,
      {
        text: 'Новая кнопка',
        url: '#',
        style: normalizedButtons.length === 0 ? 'primary' : 'outline',
        key: `hero-button-${Date.now()}`
      }
    ]);
  };

  return (
    <PanelBody title="Кнопки hero" initialOpen={false}>
      {normalizedButtons.map((button, index) => (
        <div key={button.key || index} style={{ marginBottom: '16px' }}>
          <TextControl
            label={`Текст кнопки ${index + 1}`}
            value={button.text}
            onChange={(value) => updateButton(index, { text: value })}
          />
          <TextControl
            label={`URL кнопки ${index + 1}`}
            value={button.url}
            onChange={(value) => updateButton(index, { url: value })}
          />
          <SelectControl
            label={`Стиль кнопки ${index + 1}`}
            value={button.style}
            options={BUTTON_STYLE_OPTIONS}
            onChange={(value) => updateButton(index, { style: value })}
          />
          <Button
            variant="secondary"
            isDestructive
            onClick={() => removeButton(index)}
          >
            Удалить кнопку
          </Button>
        </div>
      ))}

      <Button variant="primary" onClick={addButton}>
        Добавить кнопку
      </Button>
    </PanelBody>
  );
}
