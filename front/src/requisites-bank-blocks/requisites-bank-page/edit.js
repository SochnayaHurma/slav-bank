import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl
} from '@wordpress/components';
import { PREVIEW_LINK_PROPS } from '../../shared/previewLinkProps';

const PREVIEW_ROWS = [
  ['Наименование', 'АО НКБ «СЛАВЯНБАНК»'],
  ['БИК', '044525000'],
  ['Корр. счёт', '30101810...'],
  ['ИНН', '0000000000'],
];


export default function Edit({ attributes, setAttributes }) {
  const {
    heroKicker,
    heroTitle,
    heroDescription,
    primaryText,
    primaryUrl,
    secondaryText,
    secondaryUrl,
    badgeText,
    phoneText,
    phoneHref,
    emailText,
    emailHref,
    anchorTop,
    anchorTable
  } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Hero" initialOpen={true}>
          <TextControl
            label="Кикер"
            value={heroKicker}
            onChange={(value) => setAttributes({ heroKicker: value })}
          />
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
            label="Текст кнопки 1"
            value={primaryText}
            onChange={(value) => setAttributes({ primaryText: value })}
          />
          <TextControl
            label="URL кнопки 1"
            value={primaryUrl}
            onChange={(value) => setAttributes({ primaryUrl: value })}
          />
          <TextControl
            label="Текст кнопки 2"
            value={secondaryText}
            onChange={(value) => setAttributes({ secondaryText: value })}
          />
          <TextControl
            label="URL кнопки 2"
            value={secondaryUrl}
            onChange={(value) => setAttributes({ secondaryUrl: value })}
          />
        </PanelBody>

        <PanelBody title="Контактная плашка" initialOpen={false}>
          <TextControl
            label="Badge"
            value={badgeText}
            onChange={(value) => setAttributes({ badgeText: value })}
          />
          <TextControl
            label="Телефон"
            value={phoneText}
            onChange={(value) => setAttributes({ phoneText: value })}
          />
          <TextControl
            label="Ссылка телефона"
            value={phoneHref}
            onChange={(value) => setAttributes({ phoneHref: value })}
          />
          <TextControl
            label="Email"
            value={emailText}
            onChange={(value) => setAttributes({ emailText: value })}
          />
          <TextControl
            label="Ссылка email"
            value={emailHref}
            onChange={(value) => setAttributes({ emailHref: value })}
          />
        </PanelBody>

        <PanelBody title="Якоря" initialOpen={false}>
          <TextControl
            label="Anchor верхней части"
            value={anchorTop}
            onChange={(value) => setAttributes({ anchorTop: value })}
          />
          <TextControl
            label="Anchor таблицы"
            value={anchorTable}
            onChange={(value) => setAttributes({ anchorTable: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-requisites-page-editor' })}>
        <section className="block" id={anchorTop || 'key'}>
          <div className="container">
            <div className="hero-wrap" style={{ padding: 'var(--s-5)' }}>
              <div className="sb-hero-split-editor">
                <div className="sb-hero-split-editor__main">
                  <RichText
                    tagName="div"
                    className="kicker"
                    value={heroKicker}
                    onChange={(value) => setAttributes({ heroKicker: value })}
                    placeholder="Кикер"
                  />
                  <RichText
                    tagName="h2"
                    className="sb-hero-split-editor__title"
                    value={heroTitle}
                    onChange={(value) => setAttributes({ heroTitle: value })}
                    placeholder="Заголовок"
                  />
                  <RichText
                    tagName="p"
                    className="muted"
                    value={heroDescription}
                    onChange={(value) => setAttributes({ heroDescription: value })}
                    placeholder="Описание"
                  />

                  <div className="row" style={{ marginTop: '16px', flexWrap: 'wrap' }}>
                    <a className="btn primary" href={primaryUrl || '#'} {...PREVIEW_LINK_PROPS}>
                      <RichText
                        tagName="span"
                        value={primaryText}
                        onChange={(value) => setAttributes({ primaryText: value })}
                        placeholder="Кнопка 1"
                      />
                    </a>
                    <a className="btn outline" href={secondaryUrl || '#'} {...PREVIEW_LINK_PROPS}>
                      <RichText
                        tagName="span"
                        value={secondaryText}
                        onChange={(value) => setAttributes({ secondaryText: value })}
                        placeholder="Кнопка 2"
                      />
                    </a>
                  </div>
                </div>

                <div className="sb-hero-split-editor__pill">
                  <RichText
                    tagName="span"
                    className="sb-hero-split-editor__badge"
                    value={badgeText}
                    onChange={(value) => setAttributes({ badgeText: value })}
                    placeholder="Badge"
                  />
                  <a className="sb-hero-split-editor__mono" href={phoneHref || '#'} {...PREVIEW_LINK_PROPS}>
                    <RichText
                      tagName="span"
                      value={phoneText}
                      onChange={(value) => setAttributes({ phoneText: value })}
                      placeholder="Телефон"
                    />
                  </a>
                  <a href={emailHref || '#'} {...PREVIEW_LINK_PROPS}>
                    <RichText
                      tagName="span"
                      value={emailText}
                      onChange={(value) => setAttributes({ emailText: value })}
                      placeholder="Email"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block dashv2" id={anchorTable || 'full'}>
          <div className="container">
            <div className="bento">
              <div className="bento-card" style={{ padding: 'var(--s-4)' }}>
                <div className="muted" style={{ marginBottom: '12px' }}>
                  В проде итоговая страница собирается из PHP-паттерна (hero + секции + таблица реквизитов).
                </div>
                <table className="wp-block-table is-style-stripes">
                  <tbody>
                    {PREVIEW_ROWS.map(([key, value]) => (
                      <tr key={key}>
                        <td><strong>{key}</strong></td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
