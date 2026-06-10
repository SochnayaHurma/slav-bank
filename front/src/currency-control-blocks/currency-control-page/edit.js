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
  'slavbank/currency-point-group',
  'slavbank/currency-note'
];

const TEMPLATE = [
  [
    'slavbank/currency-point-group',
    {
      title: 'Что входит в сопровождение',
      items: [
        'постановка на учет внешнеэкономических контрактов и кредитных договоров;',
        'предоставление типовых форм документов в электронном виде;',
        'предоставление копий и дубликатов документов валютного контроля;',
        'электронный обмен документами валютного контроля.'
      ]
    }
  ],
  [
    'slavbank/currency-point-group',
    {
      title: 'По каким вопросам консультируем',
      items: [
        'соответствия проводимых клиентами валютных операций законодательным и нормативным актам Российской Федерации;',
        'составления внешнеэкономических контрактов и кредитных договоров;',
        'порядка представления и заполнения документов валютного контроля;',
        'выбора форм расчетов, применяемых во внешнеэкономической деятельности.'
      ]
    }
  ],
  [
    'slavbank/currency-note',
    {
      tone: 'strong',
      text: 'Мы организуем валютный контроль так, чтобы для клиента он был гарантированно успешным, а процедура подготовки документов не отнимала лишнего времени.'
    }
  ],
  [
    'slavbank/currency-note',
    {
      tone: 'soft',
      text: 'Весь документооборот по сделкам ВЭД можно осуществить через Клиент-Банк без бумажных копий и визитов в банк.'
    }
  ],
  [
    'slavbank/currency-note',
    {
      tone: 'strong',
      text: 'В случае необходимости Вы всегда сможете связаться по телефону непосредственно с сотрудником, ответственным за исполнение валютной сделки и расчетно-кассовому обслуживанию Вашего счета.'
    }
  ],
  [
    'slavbank/currency-note',
    {
      tone: 'strong',
      text: 'У нас проведение любой валютной операции возможно в минимальные сроки.'
    }
  ]
];

export default function Edit({ attributes, setAttributes }) {
  const {
    heroTitle,
    heroDescription,
    heroImageUrl,
    heroImageLeft,
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
          <TextControl
            label="Смещение картинки слева"
            value={heroImageLeft}
            onChange={(value) => setAttributes({ heroImageLeft: Number(value) || 0 })}
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
        <div className="sb-bank-editor-hero">
          <strong>{heroTitle}</strong>
          <p>{heroDescription}</p>
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

        <div className="sb-bank-editor-body">
          <div className="sb-bank-editor-alert">
            <strong>{alertTitle}</strong>
            <p>{alertText}</p>
          </div>

          <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            templateLock={false}
          />
        </div>
      </div>
    </>
  );
}