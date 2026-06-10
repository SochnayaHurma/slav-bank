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

const ALLOWED_BLOCKS = ['slavbank/tariff-group'];

const TEMPLATE = [
  ['slavbank/tariff-group', { title: '— скачать:' }],
  ['slavbank/tariff-group', { title: '— открыть на сайте:' }],
];


export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    heroImageLeft,
    heroImageTop,
    anchorId,
    introTitle,
    introLinkText,
    introLinkUrl,
    finalCtaText,
    finalCtaUrl,
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
          <TextControl label="Заголовок" value={heroTitle} onChange={(v) => setAttributes({ heroTitle: v })} />
          <TextareaControl label="Описание" value={heroDescription} onChange={(v) => setAttributes({ heroDescription: v })} />
          <TextControl label="Смещение картинки слева" value={heroImageLeft} onChange={(v) => setAttributes({ heroImageLeft: Number(v) || 0 })} />
          <TextControl label="Смещение картинки сверху" value={heroImageTop} onChange={(v) => setAttributes({ heroImageTop: Number(v) || 0 })} />
          <TextControl label="Anchor ID" value={anchorId} onChange={(v) => setAttributes({ anchorId: v })} />
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

        <PanelBody title="Тело страницы" initialOpen={false}>
          <TextControl label="Заголовок тела" value={introTitle} onChange={(v) => setAttributes({ introTitle: v })} />
          <TextControl label="Текст ссылки в заголовке" value={introLinkText} onChange={(v) => setAttributes({ introLinkText: v })} />
          <TextControl label="URL ссылки в заголовке" value={introLinkUrl} onChange={(v) => setAttributes({ introLinkUrl: v })} />
          <TextControl label="Текст нижней CTA" value={finalCtaText} onChange={(v) => setAttributes({ finalCtaText: v })} />
          <TextControl label="URL нижней CTA" value={finalCtaUrl} onChange={(v) => setAttributes({ finalCtaUrl: v })} />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-bank-editor-page' })}>
        <section className="block">
          <div className="container">
            <div className="hero-wrap" style={{ padding: 'var(--s-5)' }}>
              <div className="v4-strips">
                <div className="v4-strip">
                  {heroImageUrl ? (
                    <img
                      style={{ left: `${heroImageLeft || 0}px`, top: `${heroImageTop || 0}px`, overflow: 'visible' }}
                      src={heroImageUrl}
                      alt=""
                    />
                  ) : null}

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

        <section className="block dashv2" id={anchorId || 'pdf'}>
          <div className="container">
            <div className="bento">
              <div className="bento-card" style={{ padding: 'var(--s-4)', position: 'relative' }}>
                <div className="prose">
                  <div className="entry-content">
                    <h2 className="kicker">
                      <br />
                      <RichText
                        tagName="span"
                        value={introTitle}
                        onChange={(value) => setAttributes({ introTitle: value })}
                        placeholder="Заголовок тела"
                      />
                      <strong>
                        {' '}
                        {introLinkUrl ? (
                          <a href={introLinkUrl} target="_blank" rel="noreferrer noopener" {...PREVIEW_LINK_PROPS}>
                            <RichText
                              tagName="span"
                              value={introLinkText}
                              onChange={(value) => setAttributes({ introLinkText: value })}
                              placeholder="Текст ссылки"
                            />
                          </a>
                        ) : (
                          <RichText
                            tagName="span"
                            value={introLinkText}
                            onChange={(value) => setAttributes({ introLinkText: value })}
                            placeholder="Текст ссылки"
                          />
                        )}
                      </strong>
                    </h2>

                    <InnerBlocks
                      allowedBlocks={ALLOWED_BLOCKS}
                      template={TEMPLATE}
                      templateLock={false}
                    />

                    <p className="has-text-align-center has-dark-blue-color has-text-color">
                      <strong>
                        {finalCtaUrl ? (
                          <a href={finalCtaUrl} target="_blank" rel="noreferrer noopener" {...PREVIEW_LINK_PROPS}>
                            <RichText
                              tagName="span"
                              value={finalCtaText}
                              onChange={(value) => setAttributes({ finalCtaText: value })}
                              placeholder="Нижний CTA"
                            />
                          </a>
                        ) : (
                          <RichText
                            tagName="span"
                            value={finalCtaText}
                            onChange={(value) => setAttributes({ finalCtaText: value })}
                            placeholder="Нижний CTA"
                          />
                        )}
                      </strong>
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
