>block.json
```json
        "buttonsA": {
      "type": "array",
      "default": [{"id": 1, "text":"Содержание", "url": "#content", "enabled": true}, {"id": 2, "text": "На главную", "url": "/", "enabled": true}]
    },
        "buttonsB": {
      "type": "array",
      "default": []
    }
```
> edit.js ui
```js
          <div>
            {buttonsA
                        .filter((button) => button.enabled)
                        .map((button) => (
                            <a
                                key={button.id}
                                href={button.url || '#'}
                                className={`btn ${button.style}`}
                                onClick={(event) => event.preventDefault()}
                            >
                                {button.text || 'Кнопка'}
                            </a>
                        ))}
          </div>
```
> edit.js imports
```js
import {
  useBlockProps,
  InnerBlocks,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,  
    URLInputButton
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,  
    SelectControl,
    ToggleControl
} from '@wordpress/components';
import { PREVIEW_LINK_PROPS } from '../../shared/previewLinkProps';
import { __ } from '@wordpress/i18n';

```

> edit.js crud
```js

const { buttonsA = [] } = attributes;

    const addButton = () => {
        const newButton = {
            id: String(Date.now()),
            text: 'Новая кнопка',
            url: '',
            style: 'primary',
            enabled: true,
            newTab: false
        };

        setAttributes({
            buttonsA: [...buttonsA, newButton]
        });
    };

    const updateButton = (index, field, value) => {
        const updatedButtons = buttonsA.map((button, currentIndex) => {
            if (currentIndex !== index) {
                return button;
            }

            return {
                ...button,
                [field]: value
            };
        });

        setAttributes({
            buttonsA: updatedButtons
        });
    };

    const removeButton = (index) => {
        setAttributes({
            buttonsA: buttonsA.filter((_, currentIndex) => currentIndex !== index)
        });
    };

    const moveButtonUp = (index) => {
        if (index === 0) {
            return;
        }

        const updatedButtons = [...buttonsA];

        const previous = updatedButtons[index - 1];
        updatedButtons[index - 1] = updatedButtons[index];
        updatedButtons[index] = previous;

        setAttributes({
            buttonsA: updatedButtons
        });
    };

    const moveButtonDown = (index) => {
        if (index === buttonsA.length - 1) {
            return;
        }

        const updatedButtons = [...buttonsA];

        const next = updatedButtons[index + 1];
        updatedButtons[index + 1] = updatedButtons[index];
        updatedButtons[index] = next;

        setAttributes({
            buttonsA: updatedButtons
        });
    };

```

> edit.js panel
```js
<PanelBody title="Кнопки блока" initialOpen={true}>
                    <Button variant="primary" onClick={addButton}>
                        Добавить кнопку
                    </Button>



                <div className="crud-buttons-editor__list">
                    {buttonsA.map((button, index) => (
                        <div className="crud-buttons-editor__item" key={button.id}>
                            <TextControl
                                label="Текст кнопки"
                                value={button.text || ''}
                                onChange={(value) => {
                                    updateButton(index, 'text', value);
                                }}
                            />

                            <div className="crud-buttons-editor__url">
                                <span>Ссылка кнопки</span>

                                <URLInputButton
                                    url={button.url || ''}
                                    onChange={(url) => {
                                        updateButton(index, 'url', url);
                                    }}
                                />
                            </div>

                            <SelectControl
                                label="Стиль кнопки"
                                value={button.style || 'primary'}
                                options={[
                                    {
                                        label: 'Основная',
                                        value: 'primary'
                                    },
                                    {
                                        label: 'Вторичная',
                                        value: 'secondary'
                                    },
                                    {
                                        label: 'Контурная',
                                        value: 'outline'
                                    }
                                ]}
                                onChange={(value) => {
                                    updateButton(index, 'style', value);
                                }}
                            />

                            <ToggleControl
                                label="Показывать кнопку"
                                checked={button.enabled !== false}
                                onChange={(value) => {
                                    updateButton(index, 'enabled', value);
                                }}
                            />

                            <ToggleControl
                                label="Открывать в новой вкладке"
                                checked={button.newTab === true}
                                onChange={(value) => {
                                    updateButton(index, 'newTab', value);
                                }}
                            />

                            <div className="crud-buttons-editor__actions">
                                <Button
                                    variant="secondary"
                                    onClick={() => moveButtonUp(index)}
                                    disabled={index === 0}
                                >
                                    Выше
                                </Button>

                                <Button
                                    variant="secondary"
                                    onClick={() => moveButtonDown(index)}
                                    disabled={index === buttonsA.length - 1}
                                >
                                    Ниже
                                </Button>

                                <Button
                                    variant="secondary"
                                    isDestructive
                                    onClick={() => removeButton(index)}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                </PanelBody>

```


> render.php for

```php
                                    <?php foreach ($buttonsA as $button): ?>
        <?php
        $enabled = $button['enabled'] ?? true;
        $text = $button['text'] ?? '';
        $url = $button['url'] ?? '';
        $style = $button['style'] ?? 'primary';

        if (!$enabled || !$text || !$url) {
            continue;
        }

        if (!in_array($style, $allowed_styles, true)) {
            $style = 'primary';
        }
        ?>
        <a class="btn <?php echo esc_attr($style); ?>" href="<?php echo esc_url($url); ?>">
            <?php echo esc_html($text); ?>
        </a>
    <?php endforeach; ?>
```

> render.php styles creds
```php
$buttonsA = $attributes['buttonsA'] ?? [];
$buttonsB = $attributes['buttonsB'] ?? [];
$allowed_styles = [
    'primary',
    'secondary',
    'outline',
];
```