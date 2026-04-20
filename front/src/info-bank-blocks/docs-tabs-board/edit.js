import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  SelectControl,
  Button
} from '@wordpress/components';
import { useState } from '@wordpress/element';

function createListTab() {
  return {
    id: `tab-${Math.random().toString(36).slice(2, 8)}`,
    label: 'Новая вкладка',
    type: 'list',
    intro: '',
    rows: [
      { date: '', title: '', ext: '', url: '' }
    ]
  };
}

function createHeroTab() {
  return {
    id: `tab-${Math.random().toString(36).slice(2, 8)}`,
    label: 'Новая вкладка',
    type: 'hero',
    intro: '',
    heroTitle: '',
    heroSubtitle: '',
    heroUrl: ''
  };
}

function normalizeTabs(tabs) {
  if (!Array.isArray(tabs) || !tabs.length) {
    return [createListTab()];
  }
  return tabs;
}


export default function Edit({ attributes, setAttributes }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const title = attributes.title ?? 'Информация банка';
  const tabs = normalizeTabs(attributes.tabs);
  const activeTab = tabs[activeIndex] || tabs[0];

  const setTabs = (nextTabs) => {
    setAttributes({ tabs: nextTabs });
  };

  const updateTabField = (index, field, value) => {
    const next = [...tabs];
    next[index] = { ...next[index], [field]: value };
    setTabs(next);
  };

  const addListTab = () => {
    const next = [...tabs, createListTab()];
    setTabs(next);
    setActiveIndex(next.length - 1);
  };

  const addHeroTab = () => {
    const next = [...tabs, createHeroTab()];
    setTabs(next);
    setActiveIndex(next.length - 1);
  };

  const removeTab = (index) => {
    if (tabs.length === 1) return;
    const next = [...tabs];
    next.splice(index, 1);
    setTabs(next);
    setActiveIndex(Math.max(0, index - 1));
  };

  const updateRowField = (tabIndex, rowIndex, field, value) => {
    const next = [...tabs];
    const rows = Array.isArray(next[tabIndex].rows) ? [...next[tabIndex].rows] : [];
    rows[rowIndex] = { ...rows[rowIndex], [field]: value };
    next[tabIndex] = { ...next[tabIndex], rows };
    setTabs(next);
  };

  const addRow = (tabIndex) => {
    const next = [...tabs];
    const rows = Array.isArray(next[tabIndex].rows) ? [...next[tabIndex].rows] : [];
    rows.push({ date: '', title: '', ext: '', url: '' });
    next[tabIndex] = { ...next[tabIndex], rows };
    setTabs(next);
  };

  const removeRow = (tabIndex, rowIndex) => {
    const next = [...tabs];
    const rows = Array.isArray(next[tabIndex].rows) ? [...next[tabIndex].rows] : [];
    rows.splice(rowIndex, 1);
    next[tabIndex] = { ...next[tabIndex], rows: rows.length ? rows : [{ date: '', title: '', ext: '', url: '' }] };
    setTabs(next);
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Общие настройки" initialOpen={true}>
          <TextControl
            label="Заголовок блока"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: 'sb-doctabs-editor' })}>
        <div className="sb-doctabs-editor__header">
          <strong>
            <RichText
              tagName="span"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder="Информация банка"
            />
          </strong>
          <div className="sb-doctabs-editor__actions">
            <Button variant="secondary" onClick={addListTab}>+ Вкладка-список</Button>
            <Button variant="secondary" onClick={addHeroTab}>+ Hero-вкладка</Button>
          </div>
        </div>

        <div className="dash-tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id || index}
              type="button"
              className={`seg sb-doctabs-editor__tab ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label || `Вкладка ${index + 1}`}
            </button>
          ))}
        </div>

        {activeTab ? (
          <div className="sb-doctabs-editor__panel">
            <div className="sb-doctabs-editor__panel-head">
              <strong>Редактирование вкладки</strong>
              <Button variant="link" isDestructive onClick={() => removeTab(activeIndex)}>
                Удалить вкладку
              </Button>
            </div>

            <TextControl
              label="ID вкладки"
              value={activeTab.id || ''}
              onChange={(value) => updateTabField(activeIndex, 'id', value)}
            />

            <TextControl
              label="Название вкладки"
              value={activeTab.label || ''}
              onChange={(value) => updateTabField(activeIndex, 'label', value)}
            />

            <SelectControl
              label="Тип вкладки"
              value={activeTab.type || 'list'}
              options={[
                { label: 'Список документов', value: 'list' },
                { label: 'Главная карточка документа', value: 'hero' }
              ]}
              onChange={(value) => updateTabField(activeIndex, 'type', value)}
            />

            <TextareaControl
              label="Вводный текст"
              value={activeTab.intro || ''}
              onChange={(value) => updateTabField(activeIndex, 'intro', value)}
            />

            {(activeTab.type || 'list') === 'hero' ? (
              <>
                <TextControl
                  label="Заголовок hero-документа"
                  value={activeTab.heroTitle || ''}
                  onChange={(value) => updateTabField(activeIndex, 'heroTitle', value)}
                />
                <TextControl
                  label="Подпись hero-документа"
                  value={activeTab.heroSubtitle || ''}
                  onChange={(value) => updateTabField(activeIndex, 'heroSubtitle', value)}
                />
                <TextControl
                  label="Ссылка hero-документа"
                  value={activeTab.heroUrl || ''}
                  onChange={(value) => updateTabField(activeIndex, 'heroUrl', value)}
                />
              </>
            ) : (
              <>
                <div className="sb-doctabs-editor__rows-head">
                  <strong>Документы</strong>
                  <Button variant="secondary" onClick={() => addRow(activeIndex)}>
                    + Документ
                  </Button>
                </div>

                {(activeTab.rows || []).map((row, rowIndex) => (
                  <div className="sb-doctabs-editor__row" key={rowIndex}>
                    <TextControl
                      label="Дата / год"
                      value={row.date || ''}
                      onChange={(value) => updateRowField(activeIndex, rowIndex, 'date', value)}
                    />
                    <TextControl
                      label="Заголовок"
                      value={row.title || ''}
                      onChange={(value) => updateRowField(activeIndex, rowIndex, 'title', value)}
                    />
                    <TextControl
                      label="Формат"
                      value={row.ext || ''}
                      onChange={(value) => updateRowField(activeIndex, rowIndex, 'ext', value)}
                    />
                    <TextControl
                      label="Ссылка"
                      value={row.url || ''}
                      onChange={(value) => updateRowField(activeIndex, rowIndex, 'url', value)}
                    />
                    <Button
                      variant="link"
                      isDestructive
                      onClick={() => removeRow(activeIndex, rowIndex)}
                    >
                      Удалить документ
                    </Button>
                  </div>
                ))}
              </>
            )}
            <div className="sb-doctabs-editor__preview" style={{ marginTop: '16px' }}>
              <strong style={{ display: 'block', marginBottom: '8px' }}>Предпросмотр вкладки</strong>
              <RichText
                tagName="div"
                className="muted"
                style={{ lineHeight: 1.6 }}
                value={activeTab.intro || ''}
                onChange={(value) => updateTabField(activeIndex, 'intro', value)}
                placeholder="Вводный текст вкладки"
              />
              {(activeTab.type || 'list') === 'hero' ? (
                <div className="doc-hero" style={{ marginTop: '12px' }}>
                  <span className="ico" aria-hidden="true">📄</span>
                  <span>
                    <strong>
                      <RichText
                        tagName="span"
                        value={activeTab.heroTitle || ''}
                        onChange={(value) => updateTabField(activeIndex, 'heroTitle', value)}
                        placeholder="Заголовок hero-документа"
                      />
                    </strong>
                    <small className="muted">
                      <RichText
                        tagName="span"
                        value={activeTab.heroSubtitle || ''}
                        onChange={(value) => updateTabField(activeIndex, 'heroSubtitle', value)}
                        placeholder="Подпись hero-документа"
                      />
                    </small>
                  </span>
                  <span className="arrow" aria-hidden="true">→</span>
                </div>
              ) : (
                <div className="doc-list" style={{ marginTop: '12px' }}>
                  {(activeTab.rows || []).map((row, idx) => (
                    <div
                      className="doc-row"
                      key={`preview-${idx}`}
                    >
                      <span className="doc-date">
                        <RichText
                          tagName="span"
                          value={row.date || ''}
                          onChange={(value) => updateRowField(activeIndex, idx, 'date', value)}
                          placeholder="Дата"
                        />
                      </span>
                      <span className="doc-title">
                        <RichText
                          tagName="span"
                          value={row.title || ''}
                          onChange={(value) => updateRowField(activeIndex, idx, 'title', value)}
                          placeholder="Заголовок"
                        />
                      </span>
                      <span className="doc-ext">
                        <RichText
                          tagName="span"
                          value={row.ext || ''}
                          onChange={(value) => updateRowField(activeIndex, idx, 'ext', value)}
                          placeholder="Формат"
                        />
                      </span>
                      <span className="doc-arrow" aria-hidden="true">→</span>
                    </div>
                  ))}
                </div>
              )}
            </div>


          </div>
        ) : null}
      </div>
    </>
  );
}
