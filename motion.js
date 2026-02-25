(() => {
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        timer = setInterval(() => setIdx(idx + 1), 5200);
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
  const mega = $('#megaPanel');
  const megaLinks = $('#megaLinks');
  const navLinks = $$('nav .navlink[data-mega]');
  const menuBtn = $('#menuBtn');

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
    about: [
      { t:'О Банке', s:'Открыть раздел', href:'https://slavbank.ru/' },
      { t:'Информация банка', s:'О Банке', href:'https://slavbank.ru/o-banke-slavyanbank-html/info_bank-html.html' },
      { t:'Реквизиты банка', s:'О Банке', href:'https://slavbank.ru/o-banke-slavyanbank-html/rekvizity-banka.html' },
      { t:'Органы управления', s:'О Банке', href:'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html' },
      { t:'Отчетность', s:'О Банке', href:'https://slavbank.ru/o-banke-html/otchetnost.html' },
      { t:'Раскрытие информации для регулятивных целей', s:'О Банке', href:'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html' },
      { t:'Информация для нотариусов', s:'О Банке', href:'https://slavbank.ru/informacziya-dlya-notariusov.html' },
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
  function openMega(key){
    if (!mega || !megaLinks) return;
    megaLinks.innerHTML = '';
    (megaData[key] || []).forEach(x => {
      const a = document.createElement('a');
      a.href = x.href;
      a.innerHTML = `<span><strong>${x.t}</strong><br><small class="muted">${x.s}</small></span><span aria-hidden="true">→</span>`;
      megaLinks.appendChild(a);
    });
    mega.classList.add('open');
  }

  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const key = a.dataset.mega;
      const isOpen = a.getAttribute('aria-expanded') === 'true';
      closeMega();
      if (!isOpen){
        a.setAttribute('aria-expanded','true');
        openMega(key);
      }
    });
  });

  if (menuBtn){
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      closeMega();
      if (!isOpen){
        menuBtn.setAttribute('aria-expanded','true');
        openMega('about');
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