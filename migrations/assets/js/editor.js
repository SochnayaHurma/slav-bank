(function (blocks, element, components, blockEditor, serverSideRender) {
const el = element.createElement;
const Fragment = element.Fragment;
const useBlockProps = blockEditor.useBlockProps;
const { TextControl, TextareaControl, Button, SelectControl, ToggleControl, PanelBody } = components;
const { InspectorControls } = blockEditor;
const ServerSideRender = serverSideRender;

const VARIANTS = [
  { label: 'Primary', value: 'primary' },
  { label: 'Outline', value: 'outline' },
  { label: 'Glass', value: 'glass' },
  { label: 'Soft', value: 'soft' },
  { label: 'Badge', value: 'badge' },
  { label: 'Mono', value: 'mono' },
  { label: 'Muted', value: 'muted' },
  { label: 'Default', value: 'default' },
];

function updateList(list, index, patch) { return list.map((item, i) => (i === index ? { ...item, ...patch } : item)); }
function moveItem(list, index, direction) {
  const next = list.slice();
  const target = direction === 'up' ? index - 1 : index + 1;
  if (target < 0 || target >= next.length) return list;
  const temp = next[index]; next[index] = next[target]; next[target] = temp; return next;
}

function Repeater({ title, items, onChange, createItem, renderItem, addLabel }) {
  return el('div', { style: { marginTop: '12px', border: '1px solid #ddd', padding: '12px', borderRadius: '8px' } },
    el('h3', { style: { marginTop: 0 } }, title),
    (items || []).map((item, index) =>
      el('div', { key: index, style: { border: '1px solid #e5e7eb', padding: '10px', marginBottom: '10px', borderRadius: '6px', background: '#fff' } },
        renderItem(item, index),
        el('div', { style: { display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' } },
          el(Button, { variant: 'secondary', onClick: () => onChange(moveItem(items, index, 'up')), disabled: index === 0 }, '↑ Вверх'),
          el(Button, { variant: 'secondary', onClick: () => onChange(moveItem(items, index, 'down')), disabled: index === items.length - 1 }, '↓ Вниз'),
          el(Button, { isDestructive: true, onClick: () => onChange(items.filter((_, i) => i !== index)) }, 'Удалить')
        )
      )
    ),
    el(Button, { variant: 'primary', onClick: () => onChange([...(items || []), createItem()]) }, addLabel || 'Добавить')
  );
}

function ButtonListEditor(label, items, setItems) {
  return el(Repeater, {
    title: label, items, onChange: setItems,
    createItem: () => ({ label: '', href: '', variant: 'outline', isText: false }),
    addLabel: 'Добавить элемент',
    renderItem: (item, index) => el(Fragment, {},
      el(TextControl, { label: 'Текст', value: item.label || '', onChange: (v) => setItems(updateList(items, index, { label: v })) }),
      el(TextControl, { label: 'Href', value: item.href || '', onChange: (v) => setItems(updateList(items, index, { href: v })) }),
      el(SelectControl, { label: 'Вариант', value: item.variant || 'outline', options: VARIANTS, onChange: (v) => setItems(updateList(items, index, { variant: v })) }),
      el(ToggleControl, { label: 'Только текст / span', checked: !!item.isText, onChange: (v) => setItems(updateList(items, index, { isText: v })) })
    )
  });
}

function RowsEditor(label, rows, setRows) {
  return el(Repeater, {
    title: label, items: rows, onChange: setRows,
    createItem: () => ({ label: '', value: '', url: '', copy: '' }),
    addLabel: 'Добавить строку',
    renderItem: (row, index) => el(Fragment, {},
      el(TextControl, { label: 'Параметр', value: row.label || '', onChange: (v) => setRows(updateList(rows, index, { label: v })) }),
      el(TextareaControl, { label: 'Значение', value: row.value || '', onChange: (v) => setRows(updateList(rows, index, { value: v })) }),
      el(TextControl, { label: 'Ссылка', value: row.url || '', onChange: (v) => setRows(updateList(rows, index, { url: v })) }),
      el(TextControl, { label: 'Текст для copy', value: row.copy || '', onChange: (v) => setRows(updateList(rows, index, { copy: v })) })
    )
  });
}

blocks.registerBlockType('slavyanbank-embedded/requisites-page', {
  title: 'SB Embedded Requisites Page',
  icon: 'id',
  category: 'slavyanbank-embedded-migration',
  edit: function (props) {
    const a = props.attributes; const set = props.setAttributes; const blockProps = useBlockProps();
    return el('div', blockProps,
      el(InspectorControls, {},
        el(PanelBody, { title: 'Основное', initialOpen: true },
          el(TextControl, { label: 'Hero kicker', value: a.heroKicker || '', onChange: (v) => set({ heroKicker: v }) }),
          el(TextControl, { label: 'Hero title', value: a.heroTitle || '', onChange: (v) => set({ heroTitle: v }) }),
          el(TextControl, { label: 'Заголовок аудитора', value: a.auditorHeading || '', onChange: (v) => set({ auditorHeading: v }) }),
          el(TextControl, { label: 'Заголовок регистратора', value: a.registrarHeading || '', onChange: (v) => set({ registrarHeading: v }) })
        )
      ),
      ButtonListEditor('Hero buttons', a.heroButtons || [], (items) => set({ heroButtons: items })),
      ButtonListEditor('Hero pill items', a.heroPillItems || [], (items) => set({ heroPillItems: items })),
      el(TextareaControl, { label: 'HTML блока аудитора', value: a.auditorHtml || '', onChange: (v) => set({ auditorHtml: v }) }),
      el(TextareaControl, { label: 'HTML блока регистратора', value: a.registrarHtml || '', onChange: (v) => set({ registrarHtml: v }) }),
      el(TextareaControl, { label: 'HTML блока надзора', value: a.supervisionHtml || '', onChange: (v) => set({ supervisionHtml: v }) }),
      RowsEditor('Таблица реквизитов', a.rows || [], (rows) => set({ rows })),
      el(ServerSideRender, { block: 'slavyanbank-embedded/requisites-page', attributes: a, httpMethod: 'POST' })
    );
  },
  save: function () { return null; }
});

function InfoTabsEditor(tabs, setTabs) {
  return el(Repeater, {
    title: 'Tabs', items: tabs, onChange: setTabs,
    createItem: () => ({ key: 'tab' + Date.now(), label: 'Новая вкладка', intro: '', mode: 'rows', rows: [] }),
    addLabel: 'Добавить вкладку',
    renderItem: (tab, index) => {
      const rows = tab.rows || [];
      return el(Fragment, {},
        el(TextControl, { label: 'Key', value: tab.key || '', onChange: (v) => setTabs(updateList(tabs, index, { key: v })) }),
        el(TextControl, { label: 'Label', value: tab.label || '', onChange: (v) => setTabs(updateList(tabs, index, { label: v })) }),
        el(TextareaControl, { label: 'Intro', value: tab.intro || '', onChange: (v) => setTabs(updateList(tabs, index, { intro: v })) }),
        el(SelectControl, { label: 'Mode', value: tab.mode || 'rows', options: [{ label: 'Rows', value: 'rows' }, { label: 'Hero', value: 'hero' }], onChange: (v) => setTabs(updateList(tabs, index, { mode: v })) }),
        (tab.mode || 'rows') === 'hero'
          ? el(Fragment, {},
              el(TextControl, { label: 'Hero title', value: tab.heroTitle || '', onChange: (v) => setTabs(updateList(tabs, index, { heroTitle: v })) }),
              el(TextControl, { label: 'Hero subtitle', value: tab.heroSubtitle || '', onChange: (v) => setTabs(updateList(tabs, index, { heroSubtitle: v })) }),
              el(TextControl, { label: 'Hero URL', value: tab.heroUrl || '', onChange: (v) => setTabs(updateList(tabs, index, { heroUrl: v })) }),
              el(ToggleControl, { label: 'Открывать hero в новой вкладке', checked: !!tab.heroNewTab, onChange: (v) => setTabs(updateList(tabs, index, { heroNewTab: v })) })
            )
          : el(Repeater, {
              title: 'Документы', items: rows,
              onChange: (newRows) => setTabs(updateList(tabs, index, { rows: newRows })),
              createItem: () => ({ date: '', title: '', url: '', kind: 'PDF', newTab: true }),
              addLabel: 'Добавить документ',
              renderItem: (row, rowIndex) => el(Fragment, {},
                el(TextControl, { label: 'Дата', value: row.date || '', onChange: (v) => { const newRows = updateList(rows, rowIndex, { date: v }); setTabs(updateList(tabs, index, { rows: newRows })); } }),
                el(TextControl, { label: 'Заголовок', value: row.title || '', onChange: (v) => { const newRows = updateList(rows, rowIndex, { title: v }); setTabs(updateList(tabs, index, { rows: newRows })); } }),
                el(TextControl, { label: 'URL', value: row.url || '', onChange: (v) => { const newRows = updateList(rows, rowIndex, { url: v }); setTabs(updateList(tabs, index, { rows: newRows })); } }),
                el(TextControl, { label: 'Kind', value: row.kind || '', onChange: (v) => { const newRows = updateList(rows, rowIndex, { kind: v }); setTabs(updateList(tabs, index, { rows: newRows })); } }),
                el(ToggleControl, { label: 'Новая вкладка', checked: !!row.newTab, onChange: (v) => { const newRows = updateList(rows, rowIndex, { newTab: v }); setTabs(updateList(tabs, index, { rows: newRows })); } })
              )
            })
      );
    }
  });
}

blocks.registerBlockType('slavyanbank-embedded/info-bank-page', {
  title: 'SB Embedded Info Bank Page',
  icon: 'media-document',
  category: 'slavyanbank-embedded-migration',
  edit: function (props) {
    const a = props.attributes; const set = props.setAttributes; const blockProps = useBlockProps();
    return el('div', blockProps,
      el(TextControl, { label: 'Kicker', value: a.pageKicker || '', onChange: (v) => set({ pageKicker: v }) }),
      el(TextControl, { label: 'Title', value: a.pageTitle || '', onChange: (v) => set({ pageTitle: v }) }),
      el(TextareaControl, { label: 'Lead', value: a.pageLead || '', onChange: (v) => set({ pageLead: v }) }),
      ButtonListEditor('Buttons', a.buttons || [], (items) => set({ buttons: items })),
      InfoTabsEditor(a.tabs || [], (tabs) => set({ tabs })),
      el(ServerSideRender, { block: 'slavyanbank-embedded/info-bank-page', attributes: a, httpMethod: 'POST' })
    );
  },
  save: function () { return null; }
});

function LabeledCardsEditor(title, items, setItems) {
  return el(Repeater, {
    title, items, onChange: setItems,
    createItem: () => ({ label: '', tag: '', url: '', newTab: true }),
    addLabel: 'Добавить карточку',
    renderItem: (item, index) => el(Fragment, {},
      el(TextControl, { label: 'Текст', value: item.label || '', onChange: (v) => setItems(updateList(items, index, { label: v })) }),
      el(TextControl, { label: 'Правая метка', value: item.tag || '', onChange: (v) => setItems(updateList(items, index, { tag: v })) }),
      el(TextControl, { label: 'Href', value: item.url || '', onChange: (v) => setItems(updateList(items, index, { url: v })) }),
      el(ToggleControl, { label: 'Новая вкладка', checked: !!item.newTab, onChange: (v) => setItems(updateList(items, index, { newTab: v })) })
    )
  });
}

blocks.registerBlockType('slavyanbank-embedded/tariffs-root-page', {
  title: 'SB Embedded Tariffs Root Page',
  icon: 'money-alt',
  category: 'slavyanbank-embedded-migration',
  edit: function (props) {
    const a = props.attributes; const set = props.setAttributes; const blockProps = useBlockProps();
    return el('div', blockProps,
      el(TextareaControl, { label: 'Intro HTML', value: a.introHtml || '', onChange: (v) => set({ introHtml: v }) }),
      el(TextControl, { label: 'Download label', value: a.downloadLabel || '', onChange: (v) => set({ downloadLabel: v }) }),
      LabeledCardsEditor('Скачать', a.downloadItems || [], (items) => set({ downloadItems: items })),
      el(TextControl, { label: 'View label', value: a.viewLabel || '', onChange: (v) => set({ viewLabel: v }) }),
      LabeledCardsEditor('Открыть на сайте', a.viewItems || [], (items) => set({ viewItems: items })),
      el(TextControl, { label: 'CTA label', value: a.ctaLabel || '', onChange: (v) => set({ ctaLabel: v }) }),
      el(TextControl, { label: 'CTA href', value: a.ctaUrl || '', onChange: (v) => set({ ctaUrl: v }) }),
      el(ToggleControl, { label: 'CTA открывать в новой вкладке', checked: !!a.ctaNewTab, onChange: (v) => set({ ctaNewTab: v }) }),
      el(ServerSideRender, { block: 'slavyanbank-embedded/tariffs-root-page', attributes: a, httpMethod: 'POST' })
    );
  },
  save: function () { return null; }
});
})(window.wp.blocks, window.wp.element, window.wp.components, window.wp.blockEditor, window.wp.serverSideRender);
