document.addEventListener('click', async (event) => {
  const button = event.target.closest('.sbc-copy');
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

  const toast = document.querySelector('.sbc-toast');
  if (toast) {
    toast.hidden = false;
    toast.textContent = ok ? 'Скопировано' : 'Не удалось скопировать';
    toast.classList.add('is-visible');

    window.clearTimeout(window.__sbcToastTimer);
    window.__sbcToastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.hidden = true;
    }, 1800);
  }
});