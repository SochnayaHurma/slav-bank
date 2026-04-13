document.addEventListener('click', (event) => {
  const tabButton = event.target.closest('[data-doc-tab]');
  if (!tabButton) return;

  const board = tabButton.closest('.sb-doctabs-board');
  if (!board) return;

  const tabId = tabButton.getAttribute('data-doc-tab');
  if (!tabId) return;

  const buttons = board.querySelectorAll('[data-doc-tab]');
  const panels = board.querySelectorAll('[data-doc-panel]');

  buttons.forEach((button) => {
    const active = button.getAttribute('data-doc-tab') === tabId;
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  panels.forEach((panel) => {
    const active = panel.getAttribute('data-doc-panel') === tabId;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
});