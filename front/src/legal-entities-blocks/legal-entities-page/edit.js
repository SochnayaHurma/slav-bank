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

const ALLOWED_BLOCKS = ['slavbank/legal-service-card'];

const TEMPLATE = [
  [
    'slavbank/legal-service-card',
    {
      title: 'Кредитование юридических лиц и предпринимателей',
      titleUrl: '/business-lending/',
      leadText: 'Является одним из ведущих направлений деятельности АО НКБ «СЛАВЯНБАНК». Банк предоставляет кредиты юридическим лицам в рублях и иностранной валюте.',
      detailsLabel: 'Подробнее с услугой можно ознакомиться здесь',
      detailsUrl: '/business-lending/',
      contactText: 'Более подробную информацию вы можете получить по телефонам: (8162) 66-52-56 или 66-52-63 в Управлении по кредитованию и инвестициям Банка.'
    }
  ]
];


export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    anchorId,
    alertTitle,
    alertText
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
          <TextControl
            label="Anchor ID"
            value={anchorId}
            onChange={(value) => setAttributes({ anchorId: value })}
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

        <PanelBody title="Alert" initialOpen={false}>
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

      <div {...useBlockProps({ className: 'sb-bank-editor-page' })}>
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
                      placeholder="Заголовок hero"
                    />
                    <RichText
                      tagName="p"
                      value={heroDescription}
                      onChange={(value) => setAttributes({ heroDescription: value })}
                      placeholder="Описание hero"
                    />
                    <div className="v4-strip-actions">
                                      <div className="crud-buttons-editor__preview">
                    {buttonsA.length === 0 && (
                        <p className="crud-buttons-editor__empty">
                            Кнопки пока не добавлены.
                        </p>
                    )}

                    
                </div>
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
        </section>

        <section className="block dashv2" id={anchorId || 'content'}>
          <div className="container">
            <div className="bento">
              <div className="bento-card" style={{ padding: 'var(--s-4)', position: 'relative' }}>
                <div className="alert">
                  <div className="alert-dot" aria-hidden="true"></div>
                  <div>
                    <RichText
                      tagName="div"
                      style={{ fontWeight: 600 }}
                      value={alertTitle}
                      onChange={(value) => setAttributes({ alertTitle: value })}
                      placeholder="Заголовок alert"
                    />
                    <RichText
                      tagName="div"
                      className="muted"
                      style={{ marginTop: '4px' }}
                      value={alertText}
                      onChange={(value) => setAttributes({ alertText: value })}
                      placeholder="Текст alert"
                    />
                  </div>
                </div>

                <div className="sb-le-body">
                  <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                    templateLock={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
