document.addEventListener('click', async (event) => {
  const button = event.target.closest('.sb-copy-trigger');
  if (!button) return;

  const value = button.getAttribute('data-copy') || '';
  if (!value) return;

  let ok = false;

  try {
    await navigator.clipboard.writeText(value);
    ok = true;
  } catch (e) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      ok = true;
    } catch (_) {}
  }

  const container = button.closest('.wp-block-slavbank-keyvalue-copy-table') || document;
  let toast = container.querySelector('.toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.setAttribute('aria-atomic', 'true');
    document.body.appendChild(toast);
  }

  toast.hidden = false;
  toast.textContent = ok ? 'Скопировано' : 'Не удалось скопировать';
  toast.classList.add('is-visible');

  clearTimeout(window.__sbCopyToastTimer);
  window.__sbCopyToastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.hidden = true;
  }, 1800);
});