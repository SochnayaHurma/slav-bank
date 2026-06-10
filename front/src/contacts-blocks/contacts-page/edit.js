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

const ALLOWED_BLOCKS = [
  'slavbank/contact-item',
  'slavbank/address-item',
  'slavbank/hours-item',
  'slavbank/info-item',
];

const TEMPLATE = [
  [
    'slavbank/info-item',
    {
      label: '',
      items: [
        {
          title: 'Контакты банка',
          text: 'Ниже — основные каналы связи, адрес и режим работы. Для обращений используйте форму «Написать в банк».',
        },
      ],
    },
  ],
  [
    'slavbank/contact-item',
    {
      label: 'Телефон',
      value: '8162665247',
      href: 'tel:78162665247',
      note: 'Единый номер банка',
      copyValue: '8162665247',
      actionLabel: 'Позвонить',
    },
  ],
  [
    'slavbank/contact-item',
    {
      label: 'Электронная почта',
      value: 'nkb@slavbank.ru',
      href: 'mailto:nkb@slavbank.ru',
      note: 'Для общих вопросов и документов',
      copyValue: 'nkb@slavbank.ru',
      actionLabel: 'Написать',
    },
  ],
  [
    'slavbank/address-item',
    {
      label: 'Адрес',
      value: 'г. Великий Новгород, ул. Черемнова-Конюхова, дом 12',
      note: 'Головной офис',
      copyValue: 'г. Великий Новгород, ул. Черемнова-Конюхова, дом 12',
    },
  ],
  [
    'slavbank/hours-item',
    {
      label: 'Режим работы',
      items: [
        {
          title: 'С клиентами',
          text: 'пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без обеда, выходные — суббота, воскресенье',
        },
        {
          title: 'Поддержка',
          text: 'с 08:30 до 17:30 (пт до 16:30), обед 13:00–14:00; выходные — сб, вс',
        },
      ],
    },
  ],
];

export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    introTitle,
    introText,
    mapTitle,
    mapAddress,
  } = attributes;

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

  return (
    <>
      <InspectorControls>
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

        <PanelBody title="Hero" initialOpen={true}>
          <TextControl
            label="Заголовок"
            value={heroTitle}
            onChange={(value) => setAttributes({ heroTitle: value })}
          />
          <TextareaControl
            label="Описание"
            value={heroDescription}
            onChange={(value) => setAttributes({ heroDescription: value })}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ heroImageUrl: media?.url || '' })}
              allowedTypes={['image']}
              render={({ open }) => (
                <Button variant="secondary" onClick={open}>
                  {heroImageUrl ? 'Заменить картинку' : 'Выбрать картинку'}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title="Вводный блок" initialOpen={false}>
          <TextControl
            label="Заголовок"
            value={introTitle}
            onChange={(value) => setAttributes({ introTitle: value })}
          />
          <TextareaControl
            label="Текст"
            value={introText}
            onChange={(value) => setAttributes({ introText: value })}
          />
        </PanelBody>

        <PanelBody title="Карта" initialOpen={false}>
          <TextControl
            label="Заголовок"
            value={mapTitle}
            onChange={(value) => setAttributes({ mapTitle: value })}
          />
          <TextControl
            label="Адрес"
            value={mapAddress}
            onChange={(value) => setAttributes({ mapAddress: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sbc-page' })}>
        <section className="block">
          <div className="container">
            <div className="hero-wrap" style={{ padding: 'var(--s-5)' }}>
              <div className="v4-strips">
                <div className="v4-strip">
                  {heroImageUrl ? <img src={heroImageUrl} alt="" /> : null}

                  <div className="v4-strip-copy v4-glass">
                    <RichText
                      tagName="h3"
                      value={heroTitle}
                      onChange={(value) => setAttributes({ heroTitle: value })}
                      placeholder="Контакты"
                    />
                    <RichText
                      tagName="p"
                      value={heroDescription}
                      onChange={(value) => setAttributes({ heroDescription: value })}
                      placeholder="Описание страницы"
                    />
                    <div className="v4-strip-actions">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block dashv2">
          <div className="container">
            <div className="bento">
              <div className="bento-card" style={{ padding: 'var(--s-4)', position: 'relative' }}>
                <div className="prose">
                  <div className="entry-content">
                    <p className="muted" style={{ marginBottom: '12px' }}>
                      <strong>
                        <RichText
                          tagName="span"
                          value={introTitle}
                          onChange={(value) => setAttributes({ introTitle: value })}
                          placeholder="Контакты банка"
                        />
                      </strong>
                      {' — '}
                      <RichText
                        tagName="span"
                        value={introText}
                        onChange={(value) => setAttributes({ introText: value })}
                        placeholder="Вводный текст"
                      />
                    </p>

                    <InnerBlocks
                      allowedBlocks={ALLOWED_BLOCKS}
                      template={TEMPLATE}
                      templateLock={false}
                    />

                    <p className="muted" style={{ marginTop: '12px' }}>
                      <strong>
                        <RichText
                          tagName="span"
                          value={mapTitle}
                          onChange={(value) => setAttributes({ mapTitle: value })}
                          placeholder="Как нас найти"
                        />
                      </strong>
                      {' — '}
                      <RichText
                        tagName="span"
                        value={mapAddress}
                        onChange={(value) => setAttributes({ mapAddress: value })}
                        placeholder="Адрес"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
