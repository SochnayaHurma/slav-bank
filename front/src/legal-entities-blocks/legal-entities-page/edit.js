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
  ],
  [
    'slavbank/legal-service-card',
    {
      title: 'Обслуживание счетов в валюте РФ',
      titleUrl: 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html',
      itemsRaw: 'Открытие и ведение банковского счета в валюте Российской Федерации\nНаличные и безналичные расчеты\nПрием и отправка платежных документов на инкассо\nУчет денежных средств на счете и выдача выписок по счету\nВыдача справок, дубликатов платежно-расчетных документов, дубликатов выписок по счету\nОформление карточек с образцами подписей и оттиска печати\nЗакрытие счета',
      detailsLabel: 'Подробнее с услугой можно ознакомиться здесь',
      detailsUrl: 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html',
      contactText: 'Более подробную информацию по обслуживанию счетов в валюте РФ Вы можете получить по тел. (8162) 66-52-05, +7-921-201-47-00.',
      buttonText: 'ОТПРАВИТЬ ЗАПРОС НА ОТКРЫТИЕ РАСЧЕТНОГО СЧЕТА',
      buttonUrl: '/zapros-na-otkrytie-raschetnogo-scheta/'
    }
  ],
  [
    'slavbank/legal-service-card',
    {
      title: 'Обслуживание счетов в иностранной валюте',
      titleUrl: '/fx-account-service/',
      itemsRaw: 'Открытие и ведение счета в иностранной валюте юридическим лицам\nОформление платежных документов при расчетах в валюте РФ',
      contactText: 'Более подробную информацию по обслуживанию счетов в иностранной валюте Вы можете получить в Управлении валютных операций и контроля и по тел. (8162) 66-52-54.'
    }
  ],
  [
    'slavbank/legal-service-card',
    {
      title: 'Валютный контроль',
      titleUrl: '/currency-control/',
      leadText: 'Коммерческий банк АО НКБ «СЛАВЯНБАНК» предоставляет широкий спектр банковских услуг, связанных с выполнением Банком функций агента валютного контроля.',
      detailsLabel: 'Подробнее с услугой можно ознакомиться здесь',
      detailsUrl: '/currency-control/',
      contactText: 'Кроме того, клиенты Банка имеют возможность бесплатно воспользоваться консультациями профессиональных специалистов по вопросам проведения валютных операций. Проведение любой валютной операции возможно в минимальные сроки.'
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