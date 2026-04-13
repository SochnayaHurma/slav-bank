import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button
} from '@wordpress/components';

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

  return (
    <>
      <InspectorControls>
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