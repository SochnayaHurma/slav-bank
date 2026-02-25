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
    about: [
      { t:'О банке', s:'Информация, реквизиты, отчётность', href:'#about' },
      { t:'Документы', s:'Раскрытие информации и формы', href:'#docs' },
      { t:'Контакты', s:'Телефон, email, обращения', href:'#support' },
    ],
    biz: [
      { t:'РКО для бизнеса', s:'Счёт, платежи, выписки', href:'#services' },
      { t:'ВЭД и контракты', s:'Экспертиза, расчёты, контроль', href:'#fx' },
      { t:'Тарифы', s:'Комиссии и обслуживание', href:'#tariffs' },
    ],
    fx: [
      { t:'Экспертиза контрактов', s:'Проверка условий и рисков', href:'#fx' },
      { t:'Международные расчёты', s:'SWIFT/валютные переводы', href:'#fx' },
      { t:'Валютный контроль', s:'Сопровождение и документы', href:'#fx' },
    ],
    docs: [
      { t:'Раскрытие информации', s:'Регулятивные сведения', href:'#docs' },
      { t:'ПОД/ФТ', s:'Политики и документы', href:'#docs' },
      { t:'CRS/FATCA', s:'Информация и формы', href:'#docs' },
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
})();