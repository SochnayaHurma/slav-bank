(() => {
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =========================================================
  // VAR20 — header sticky reveal (like original: header.header reveal is-in)
  // =========================================================
  const header = document.querySelector('.header.reveal');
  if (header){
    let lastY = window.scrollY || 0;
    const threshold = 10;
    let ticking = false;

    const apply = () => {
      const y = window.scrollY || 0;

      header.classList.toggle('scrolled', y > 8);

      // always show at top, show on scroll up, hide on scroll down
      if (y <= threshold || y < lastY){
        header.classList.add('is-in');
      } else {
        header.classList.remove('is-in');
        // close mega when header hides
        try{ closeMega(); }catch(e){}
      }

      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking){
        ticking = true;
        requestAnimationFrame(apply);
      }
    }, { passive:true });

    // initial
    header.classList.add('is-in');
    apply();
  }

  // Reveal
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  // Slider
  const slider = $('[data-slider]');
  if (slider){
    const track = $('[data-slider-track]', slider);
    const slides = $$('[data-slide]', slider);
    const dots = $$('[data-dot]', slider);
    const btnPrev = $('[data-prev]', slider);
    const btnNext = $('[data-next]', slider);
    const btnPlay = $('[data-play]', slider);
    const progress = $('[data-progress] i', slider);

    let idx = 0;
    let timer = null;
    let playing = !prefersReduced;

    const setIdx = (n, user=false) => {
      idx = (n + slides.length) % slides.length;
      track.style.transform = `translate3d(${-idx * 100}%,0,0)`;
      dots.forEach((d,i) => d.setAttribute('aria-current', String(i===idx)));
      slides.forEach((s,i) => {
        s.setAttribute('aria-hidden', String(i!==idx));
        s.toggleAttribute('data-active', i===idx);
        // retrigger SVG stroke animation by cloning the illustration wrapper
        if (i===idx){
          const ill = s.querySelector('[data-ill]');
          if (ill){
            const clone = ill.cloneNode(true);
            ill.replaceWith(clone);
          }
        }
      });

      if (progress){
        progress.style.width = '0%';
        if (playing && !prefersReduced){
          const start = performance.now();
          const dur = 5200;
          const tick = (t) => {
            if (!playing) return;
            const p = Math.min(1, (t - start) / dur);
            progress.style.width = `${(p*100).toFixed(1)}%`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }
      if (user) restart();
    };

    const restart = () => {
      if (timer) clearInterval(timer);
      if (playing && !prefersReduced){
        timer = setInterval(() => setIdx(idx + 1), 5400);
      }
    };

    btnNext && btnNext.addEventListener('click', () => setIdx(idx + 1, true));
    btnPrev && btnPrev.addEventListener('click', () => setIdx(idx - 1, true));
    dots.forEach((d,i) => d.addEventListener('click', () => setIdx(i, true)));

    document.addEventListener('visibilitychange', () => {
      if (document.hidden){
        if (timer) clearInterval(timer);
      } else {
        restart();
      }
    });

    slider.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
    slider.addEventListener('mouseleave', () => { restart(); });
    slider.addEventListener('focusin', () => { if (timer) clearInterval(timer); });
    slider.addEventListener('focusout', () => { restart(); });

    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft'){ e.preventDefault(); setIdx(idx - 1, true); }
      if (e.key === 'ArrowRight'){ e.preventDefault(); setIdx(idx + 1, true); }
    });

    if (btnPlay){
      const sync = () => {
        btnPlay.setAttribute('aria-pressed', String(playing));
        btnPlay.textContent = playing ? 'Пауза' : 'Плей';
        restart();
      };
      btnPlay.addEventListener('click', () => { playing = !playing; sync(); });
      sync();
    }

    setIdx(0);
    restart();
  }

  // A11y toggle
  const a11yBtn = $('#a11yBtn');
  if (a11yBtn){
    a11yBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const on = html.getAttribute('data-a11y') === '1';
      html.setAttribute('data-a11y', on ? '0' : '1');
      a11yBtn.setAttribute('aria-pressed', String(!on));
    });
  }

  // Search modal + shortcuts
  const overlay = $('#searchOverlay');
  const openSearch = () => { overlay.classList.add('open'); $('#searchInput').focus(); };
  const closeSearch = () => overlay.classList.remove('open');

  const openBtn = $('#searchOpen');
  const closeBtn = $('#searchClose');
  openBtn && openBtn.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  overlay && overlay.addEventListener('click', (e) => { if(e.target === overlay) closeSearch(); });

  const hints = $('#searchHints');
  hints && hints.addEventListener('click', (e) => {
    const b = e.target.closest('[data-hint]');
    if(!b) return;
    $('#searchInput').value = b.dataset.hint;
    $('#searchInput').focus();
  });

  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const ctrlK = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k';
    if (ctrlK){ e.preventDefault(); openSearch(); }
    if (e.key === 'Escape'){
      closeSearch();
      closeMega();
    }
  });

  // Mega menu
  // VAR20 — mega search + fintech cards
  const mega = $('#megaPanel');
  const megaLinks = $('#megaLinks');
  const navLinks = $$('nav .navlink[data-mega]');
  const menuBtn = $('#menuBtn');

  const MOBILE_BREAKPOINT = 980;
  const isMobileView = () => {
    if (window.matchMedia){
      try{
        return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
      }catch(e){}
    }
    return window.innerWidth <= MOBILE_BREAKPOINT;
  };

  const megaData = {
    all: [
      { t:'О БАНКЕ', s:'Раздел сайта', href:'https://slavbank.ru/' },
      { t:'НОВОСТИ', s:'Раздел сайта', href:'https://slavbank.ru/novosti.html' },
      { t:'ТАРИФЫ БАНКА', s:'Раздел сайта', href:'https://slavbank.ru/tarify-banka.html' },
      { t:'ЮРИДИЧЕСКИМ ЛИЦАМ', s:'Раздел сайта', href:'https://slavbank.ru/yuridicheskim-liczam.html' },
      { t:'ЧАСТНЫМ ЛИЦАМ', s:'Раздел сайта', href:'https://slavbank.ru/chastnym-liczam.html' },
      { t:'КЛИЕНТ-БАНК', s:'Раздел сайта', href:'https://slavbank.ru/klient-bank-online.html' },
      { t:'ПОДДЕРЖКА', s:'Раздел сайта', href:'https://slavbank.ru/podderzhka.html' },
      { t:'КОНТАКТЫ', s:'Раздел сайта', href:'https://slavbank.ru/kontakty.html' },
    ],

    news: [
      { t:'Новости', s:'Открыть раздел', href:'https://slavbank.ru/novosti.html' },
    ],
    tariffs: [
      { t:'Тарифы Банка', s:'Открыть раздел', href:'https://slavbank.ru/tarify-banka.html' },
      { t:'Тарифы по операциям в валюте РФ', s:'Тарифы Банка', href:'https://slavbank.ru/tarify-banka-html/tarify_rf.html' },
      { t:'Тарифы по операциям в рублях и иностранной валюте «Славный»', s:'Тарифы Банка', href:'https://slavbank.ru/tarify-banka-html/tarif_slavny.html' },
      { t:'Тарифы банка в валюте РФ и иностранной валюте «Приветственный»', s:'Тарифы Банка', href:'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html' },
      { t:'Тарифы по операциям в рублях и иностранной валюте «Депозитный»', s:'Тарифы Банка', href:'https://slavbank.ru/tarify-banka-html/tarif_depositny.html' },
      { t:'Тарифы по операциям в иностранной валюте', s:'Тарифы Банка', href:'https://slavbank.ru/tarify-banka-html/tarify_valuta.html' },
    ],
    corp: [
      { t:'Юридическим Лицам', s:'Открыть раздел', href:'https://slavbank.ru/yuridicheskim-liczam.html' },
      { t:'Депозиты для юридических лиц', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/deposity-dlya-yur-lic.html' },
      { t:'Кредитование юридических лиц', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html' },
      { t:'Обслуживание счетов в валюте РФ', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html' },
      { t:'Безналичные расчеты', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html' },
      { t:'Наличные расчеты', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html' },
      { t:'Платежные требования с акцептом', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html' },
      { t:'Обслуживание счетов в иностранной валюте', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html' },
      { t:'Валютный контроль', s:'Юридическим Лицам', href:'https://slavbank.ru/yuridicheskim-liczam-html/valutny-kontrol.html' },
      { t:'ПОД/ФТ/ФРОМУ/FATCA', s:'Юридическим Лицам', href:'https://slavbank.ru/pod-ft-fromu.html' },
      { t:'CRS — обмен с ФНС', s:'Юридическим Лицам', href:'https://slavbank.ru/crs-obmen-s-fns.html' },
      { t:'ВЭД', s:'Юридическим Лицам', href:'https://ved.slavbank.ru/' },
    ],
    retail: [
      { t:'Частным Лицам', s:'Открыть раздел', href:'https://slavbank.ru/chastnym-liczam.html' },
    ],
    dbo: [
      { t:'Клиент-Банк', s:'Открыть раздел', href:'https://slavbank.ru/klient-bank-online.html' },
      { t:'Инструкция по работе в системе Клиент-Банк', s:'Клиент-Банк', href:'https://slavbank.ru/podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html' },
      { t:'Часто задаваемые вопросы', s:'Клиент-Банк', href:'https://slavbank.ru/podderzhka-html/chasto-zadavaemye-voprosy.html' },
      { t:'Перегенерация ЭЦП', s:'Клиент-Банк', href:'https://slavbank.ru/podderzhka-html/regen.html' },
    ],
    support: [
      { t:'Поддержка', s:'Открыть раздел', href:'https://slavbank.ru/podderzhka.html' },
      { t:'Удаленное управление', s:'Поддержка', href:'https://www.ammyy.com/ru/' },
      { t:'Рекомендации по безопасности', s:'Поддержка', href:'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html' },
      { t:'Обращение по 123-ФЗ', s:'Поддержка', href:'https://slavbank.ru/obrashhenie-po-123-fz.html' },
      { t:'COVID19', s:'Поддержка', href:'https://slavbank.ru/covid19.html' },
    ],
    contacts: [
      { t:'Контакты', s:'Открыть раздел', href:'https://slavbank.ru/kontakty.html' },
      { t:'НАПИСАТЬ В БАНК', s:'Контакты', href:'https://slavbank.ru/forma-obratnoj-svyazi.html' },
      { t:'ВАКАНСИИ', s:'Контакты', href:'https://slavbank.ru/vakansii.html' },
    ],
  };

  function closeMega(){
    if (!mega) return;
    mega.classList.remove('open');
    navLinks.forEach(a => a.setAttribute('aria-expanded','false'));
    menuBtn && menuBtn.setAttribute('aria-expanded','false');
  }
  function openMega(key, trigger){
    if (!mega) return;

    mega.classList.add('open');

    // Позиционирование под пунктом меню на десктопе
    if (!isMobileView()){
      // если есть триггер (элемент меню), выравниваем по нему,
      // иначе сбрасываем к центру по умолчанию
      if (trigger && trigger.getBoundingClientRect && header){
        const headerRect = header.getBoundingClientRect();
        const triggerRect = trigger.getBoundingClientRect();

        // временно сбрасываем позиционирование, чтобы корректно измерить ширину
        mega.style.left = '0px';
        mega.style.right = 'auto';
        mega.style.transform = 'none';

        const megaWidth = mega.offsetWidth || 0;
        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        let left = triggerCenter - headerRect.left - megaWidth / 2;

        const padding = 8;
        const maxLeft = headerRect.width - megaWidth - padding;
        if (left < padding) left = padding;
        if (left > maxLeft) left = maxLeft;

        mega.style.left = `${left}px`;
      } else {
        mega.style.left = '';
        mega.style.right = '';
        mega.style.transform = '';
      }
    } else {
      // на мобильной версии оставляем позиционирование по CSS
      mega.style.left = '';
      mega.style.right = '';
      mega.style.transform = '';
    }
  }

  let hoverCloseTimer = null;
  function scheduleCloseMega(){
    if (isMobileView()) return;
    if (hoverCloseTimer) clearTimeout(hoverCloseTimer);
    hoverCloseTimer = setTimeout(() => {
      hoverCloseTimer = null;
      closeMega();
    }, 120);
  }

  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      // На мобильной версии оставляем открытие по клику
      if (!isMobileView()) return;
      e.preventDefault();
      const key = a.dataset.mega;
      const isOpen = a.getAttribute('aria-expanded') === 'true';
      closeMega();
      if (!isOpen){
        a.setAttribute('aria-expanded','true');
        openMega(key, a);
      }
    });

    // На десктопе открываем мегаменю по hover и по фокусу с клавиатуры
    a.addEventListener('mouseenter', () => {
      if (isMobileView()) return;
      const key = a.dataset.mega;
      if (!key) return;
      if (hoverCloseTimer){
        clearTimeout(hoverCloseTimer);
        hoverCloseTimer = null;
      }
      navLinks.forEach(link => link.setAttribute('aria-expanded','false'));
      a.setAttribute('aria-expanded','true');
      openMega(key, a);
    });

    a.addEventListener('mouseleave', () => {
      if (isMobileView()) return;
      scheduleCloseMega();
    });

    a.addEventListener('focus', () => {
      if (isMobileView()) return;
      const key = a.dataset.mega;
      if (!key) return;
      if (hoverCloseTimer){
        clearTimeout(hoverCloseTimer);
        hoverCloseTimer = null;
      }
      navLinks.forEach(link => link.setAttribute('aria-expanded','false'));
      a.setAttribute('aria-expanded','true');
      openMega(key, a);
    });

    a.addEventListener('blur', () => {
      if (isMobileView()) return;
      scheduleCloseMega();
    });
  });

  if (mega){
    mega.addEventListener('mouseenter', () => {
      if (hoverCloseTimer){
        clearTimeout(hoverCloseTimer);
        hoverCloseTimer = null;
      }
    });
    mega.addEventListener('mouseleave', () => {
      if (isMobileView()) return;
      scheduleCloseMega();
    });
  }

  if (menuBtn){
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      closeMega();
      if (!isOpen){
        menuBtn.setAttribute('aria-expanded','true');
        openMega('about', null);
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (!mega) return;
    const inside = mega.contains(e.target) || navLinks.some(a => a.contains(e.target)) || (menuBtn && menuBtn.contains(e.target));
    if(!inside) closeMega();
  });

  // News scroller
  const sc = $('#newsScroller');
  const prev = $('#newsPrev');
  const next = $('#newsNext');
  prev && prev.addEventListener('click', ()=> sc && sc.scrollBy({ left: -380, behavior: 'smooth' }));
  next && next.addEventListener('click', ()=> sc && sc.scrollBy({ left:  380, behavior: 'smooth' }));

  // Ticker pause (CSS)
  const pauseBtn = $('#tickerPause');
  const lane = document.querySelector('.ticker .lane');
  pauseBtn && pauseBtn.addEventListener('click', () => {
    const paused = pauseBtn.getAttribute('aria-pressed') === 'true';
    pauseBtn.setAttribute('aria-pressed', String(!paused));
    pauseBtn.textContent = paused ? 'Пауза' : 'Плей';
    if (lane) lane.style.animationPlayState = paused ? 'running' : 'paused';
  });


  // =========================================================
  // VAR4: illustration style switcher (A/B) for SVG slider
  // =========================================================
  const illBtns = $$('[data-ill-style]');
  const illNodes = $$('[data-ill][data-ill-key]');
  const getIllStyle = () => (localStorage.getItem('slavbank_ill_style') || 'a');

  function renderIll(node, style){
    const key = node.getAttribute('data-ill-key');
    const tpl = document.getElementById(`ill-${key}-${style}`);
    if (!tpl) return;
    const frag = tpl.content.cloneNode(true);
    node.innerHTML = '';
    node.appendChild(frag);
  }

  function renderAllIll(style){
    illNodes.forEach(n => renderIll(n, style));
    // retrigger animation on active slide
    const active = $('[data-active]') || $('.slide[aria-hidden="false"]');
    if (active){
      const ill = active.querySelector('[data-ill]');
      if (ill){
        const clone = ill.cloneNode(true);
        ill.replaceWith(clone);
      }
    }
  }

  function setIllStyle(style){
    localStorage.setItem('slavbank_ill_style', style);
    illBtns.forEach(b => b.setAttribute('aria-pressed', String(b.getAttribute('data-ill-style') === style)));
    renderAllIll(style);
  }

  if (illNodes.length){
    setIllStyle(getIllStyle());
    illBtns.forEach(b => b.addEventListener('click', () => setIllStyle(b.getAttribute('data-ill-style'))));
  }

  // =========================================================
  // VAR4: Accordions
  // =========================================================
  const accs = $$('[data-acc]');
  accs.forEach(acc => {
    const btn = acc.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = acc.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  // =========================================================
  // VAR4: Mobile drawer menu
  // =========================================================
  const drawerOpen = $('#drawerOpen');
  const drawer = $('#drawer');
  const drawerBackdrop = $('#drawerBackdrop');
  const drawerClose = $('#drawerClose');
  const drawerSearch = $('#drawerSearch');
  const drawerA11y = $('#drawerA11y');

  function openDrawer(){
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    drawerOpen && drawerOpen.setAttribute('aria-expanded', 'true');
    const first = drawer.querySelector('a,button');
    first && first.focus();
  }
  function closeDrawer(){
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    drawerOpen && drawerOpen.setAttribute('aria-expanded', 'false');
  }

  drawerOpen && drawerOpen.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawerBackdrop && drawerBackdrop.addEventListener('click', closeDrawer);

  drawer && drawer.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) closeDrawer();
  });

  drawerSearch && drawerSearch.addEventListener('click', () => { closeDrawer(); openSearch(); });
  drawerA11y && drawerA11y.addEventListener('click', () => { closeDrawer(); a11yBtn && a11yBtn.click(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

})();


/* VAR8: dashboard tabs (services section) */
(() => {
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const tabs = $$('[data-dash-tab]');
  const panels = $$('[data-dash-panel]');
  if (!tabs.length || !panels.length) return;

  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced){
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key){
    localStorage.setItem('slavbank_dash_tab', key);
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.dashTab === key)));
    panels.forEach(p => {
      const on = p.dataset.dashPanel === key;
      if (on){
        p.hidden = false;
        p.classList.add('is-active');
        // reset silk animation in media panel by cloning svg wrapper
        if (key === 'about'){
          const ill = document.querySelector('.media-card[data-ill] svg');
          if (ill){
            const clone = ill.cloneNode(true);
            ill.replaceWith(clone);
          }
        }
      } else {
        p.hidden = true;
        p.classList.remove('is-active');
      }
    });
  }

  tabs.forEach(t => t.addEventListener('click', () => withVT(() => setTab(t.dataset.dashTab))));
  const saved = localStorage.getItem('slavbank_dash_tab') || 'about';
  setTab(saved);
})();

/* VAR9: document tabs (info-bank page) */
(() => {
  const tabs = Array.from(document.querySelectorAll('[data-doc-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-doc-panel]'));
  if (!tabs.length || !panels.length) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced){
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key){
    localStorage.setItem('slavbank_docs_tab', key);
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.docTab === key)));
    panels.forEach(p => {
      const on = p.dataset.docPanel === key;
      p.hidden = !on;
      if (on) p.classList.add('is-active'); else p.classList.remove('is-active');
    });
  }

  tabs.forEach(t => t.addEventListener('click', () => withVT(() => setTab(t.dataset.docTab))));
  setTab(localStorage.getItem('slavbank_docs_tab') || 'aff');
})();


/* VAR10: copy-to-clipboard for requisites/table */
(() => {
  const toast = document.querySelector('.toast');
  function showToast(msg){
    if (!toast) return;
    toast.textContent = msg || 'Скопировано';
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 1200);
  }

  async function copyText(txt){
    try{
      await navigator.clipboard.writeText(txt);
      showToast('Скопировано');
    }catch(e){
      // fallback
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.position='fixed';
      ta.style.left='-9999px';
      document.body.appendChild(ta);
      ta.select();
      try{ document.execCommand('copy'); showToast('Скопировано'); }
      finally{ ta.remove(); }
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('button.copy[data-copy]');
    if (!btn) return;
    const txt = btn.getAttribute('data-copy') || '';
    if (!txt) return;
    copyText(txt);
  });
})();



/* VAR14: local form submit demo (no backend) */
(() => {
  function showToast(msg){
    const toast = document.querySelector('.toast');
    if(!toast) return;
    toast.textContent = msg || 'Готово';
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 1400);
  }

  document.addEventListener('submit', (e) => {
    const form = e.target;
    if(!form || !form.closest) return;
    if(!form.closest('[data-form-shell]')) return;
    e.preventDefault();
    showToast('Сообщение подготовлено');
    // clear common inputs
    form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea').forEach(el => el.value = '');
  });
})();
