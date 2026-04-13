import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  SelectControl,
  ToggleControl,
  Button
} from '@wordpress/components';

function legacyActions(attributes) {
  const result = [];

  if (attributes.primaryText && attributes.primaryUrl) {
    result.push({
      text: attributes.primaryText,
      url: attributes.primaryUrl,
      variant: 'primary',
      newTab: false,
    });
  }

  if (attributes.secondaryText && attributes.secondaryUrl) {
    result.push({
      text: attributes.secondaryText,
      url: attributes.secondaryUrl,
      variant: 'outline',
      newTab: false,
    });
  }

  if (attributes.tertiaryText && attributes.tertiaryUrl) {
    result.push({
      text: attributes.tertiaryText,
      url: attributes.tertiaryUrl,
      variant: 'outline',
      newTab: false,
    });
  }

  return result;
}

function legacyPillItems(attributes) {
  const result = [];

  if (attributes.badge) {
    result.push({ type: 'badge', text: attributes.badge });
  }

  if (attributes.phoneText && attributes.phoneHref) {
    result.push({
      type: 'link',
      text: attributes.phoneText,
      href: attributes.phoneHref,
      mono: true,
      muted: false,
      newTab: false,
    });
  }

  if (attributes.phoneText && attributes.phoneHref && attributes.emailText && attributes.emailHref) {
    result.push({ type: 'text', text: '·', muted: true });
  }

  if (attributes.emailText && attributes.emailHref) {
    result.push({
      type: 'link',
      text: attributes.emailText,
      href: attributes.emailHref,
      mono: false,
      muted: false,
      newTab: false,
    });
  }

  return result;
}

function createAction() {
  return {
    text: '',
    url: '',
    variant: 'outline',
    newTab: false,
  };
}

function createPillItem() {
  return {
    type: 'text',
    text: '',
    href: '',
    mono: false,
    muted: false,
    newTab: false,
  };
}

export default function Edit({ attributes, setAttributes }) {
  const {
    kicker,
    title,
    description
  } = attributes;

  const actions =
    Array.isArray(attributes.actions) && attributes.actions.length
      ? attributes.actions
      : legacyActions(attributes);

  const pillItems =
    Array.isArray(attributes.pillItems) && attributes.pillItems.length
      ? attributes.pillItems
      : legacyPillItems(attributes);

  const setActionField = (index, field, value) => {
    const next = [...actions];
    next[index] = { ...next[index], [field]: value };
    setAttributes({ actions: next });
  };

  const addAction = () => {
    setAttributes({ actions: [...actions, createAction()] });
  };

  const removeAction = (index) => {
    const next = [...actions];
    next.splice(index, 1);
    setAttributes({ actions: next });
  };

  const setPillField = (index, field, value) => {
    const next = [...pillItems];
    next[index] = { ...next[index], [field]: value };
    setAttributes({ pillItems: next });
  };

  const addPillItem = () => {
    setAttributes({ pillItems: [...pillItems, createPillItem()] });
  };

  const removePillItem = (index) => {
    const next = [...pillItems];
    next.splice(index, 1);
    setAttributes({ pillItems: next });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Hero split" initialOpen={true}>
          <TextControl
            label="Кикер"
            value={kicker}
            onChange={(value) => setAttributes({ kicker: value })}
          />
          <TextControl
            label="Заголовок"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
          <TextareaControl
            label="Описание"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
          />
        </PanelBody>

        <PanelBody title="Кнопки" initialOpen={false}>
          {actions.map((action, index) => (
            <div key={index} className="sb-editor-repeatable">
              <TextControl
                label={`Текст кнопки ${index + 1}`}
                value={action.text || ''}
                onChange={(value) => setActionField(index, 'text', value)}
              />
              <TextControl
                label="URL"
                value={action.url || ''}
                onChange={(value) => setActionField(index, 'url', value)}
              />
              <SelectControl
                label="Стиль"
                value={action.variant || 'outline'}
                options={[
                  { label: 'Primary', value: 'primary' },
                  { label: 'Outline', value: 'outline' }
                ]}
                onChange={(value) => setActionField(index, 'variant', value)}
              />
              <ToggleControl
                label="Открывать в новой вкладке"
                checked={!!action.newTab}
                onChange={(value) => setActionField(index, 'newTab', !!value)}
              />
              <Button variant="link" isDestructive onClick={() => removeAction(index)}>
                Удалить кнопку
              </Button>
            </div>
          ))}

          <Button variant="secondary" onClick={addAction}>
            + Кнопка
          </Button>
        </PanelBody>

        <PanelBody title="Правая pill-плашка" initialOpen={false}>
          {pillItems.map((item, index) => (
            <div key={index} className="sb-editor-repeatable">
              <SelectControl
                label={`Тип элемента ${index + 1}`}
                value={item.type || 'text'}
                options={[
                  { label: 'Badge', value: 'badge' },
                  { label: 'Link', value: 'link' },
                  { label: 'Text', value: 'text' }
                ]}
                onChange={(value) => setPillField(index, 'type', value)}
              />
              <TextControl
                label="Текст"
                value={item.text || ''}
                onChange={(value) => setPillField(index, 'text', value)}
              />
              {(item.type || 'text') === 'link' ? (
                <>
                  <TextControl
                    label="Ссылка"
                    value={item.href || ''}
                    onChange={(value) => setPillField(index, 'href', value)}
                  />
                  <ToggleControl
                    label="Моноширинный стиль"
                    checked={!!item.mono}
                    onChange={(value) => setPillField(index, 'mono', !!value)}
                  />
                  <ToggleControl
                    label="Открывать в новой вкладке"
                    checked={!!item.newTab}
                    onChange={(value) => setPillField(index, 'newTab', !!value)}
                  />
                </>
              ) : null}

              {(item.type || 'text') === 'text' ? (
                <ToggleControl
                  label="Приглушённый текст"
                  checked={!!item.muted}
                  onChange={(value) => setPillField(index, 'muted', !!value)}
                />
              ) : null}

              <Button variant="link" isDestructive onClick={() => removePillItem(index)}>
                Удалить элемент
              </Button>
            </div>
          ))}

          <Button variant="secondary" onClick={addPillItem}>
            + Элемент в pill
          </Button>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-hero-split-editor' })}>
        <div className="sb-hero-split-editor__main">
          {kicker ? <div className="kicker">{kicker}</div> : null}
          {title ? <h2 className="sb-hero-split-editor__title">{title}</h2> : null}
          {description ? <p className="muted">{description}</p> : null}
        </div>

        {pillItems.length ? (
          <div className="sb-hero-split-editor__pill">
            {pillItems.map((item, index) => {
              if ((item.type || 'text') === 'badge') {
                return (
                  <span key={index} className="sb-hero-split-editor__badge">
                    {item.text}
                  </span>
                );
              }

              return (
                <span key={index} className={item.mono ? 'sb-hero-split-editor__mono' : ''}>
                  {item.text}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}