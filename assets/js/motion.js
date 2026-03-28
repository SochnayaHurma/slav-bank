(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.header.reveal');
  if (header) {
    let lastY = window.scrollY || 0;
    const threshold = 10;
    let ticking = false;

    const apply = () => {
      const y = window.scrollY || 0;

      header.classList.toggle('scrolled', y > 8);

      if (y <= threshold || y < lastY) {
        header.classList.add('is-in');
      } else {
        header.classList.remove('is-in');
        try { closeMega(); } catch (e) { }
      }

      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }, { passive: true });

    header.classList.add('is-in');
    apply();
  }

  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  const slider = $('[data-slider]');
  if (slider) {
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

    const setIdx = (n, user = false) => {
      idx = (n + slides.length) % slides.length;
      track.style.transform = `translate3d(${-idx * 100}%,0,0)`;
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === idx)));
      slides.forEach((s, i) => {
        s.setAttribute('aria-hidden', String(i !== idx));
        s.toggleAttribute('data-active', i === idx);
        if (i === idx) {
          const ill = s.querySelector('[data-ill]');
          if (ill) {
            const clone = ill.cloneNode(true);
            ill.replaceWith(clone);
          }
        }
      });

      if (progress) {
        progress.style.width = '0%';
        if (playing && !prefersReduced) {
          const start = performance.now();
          const dur = 5200;
          const tick = (t) => {
            if (!playing) return;
            const p = Math.min(1, (t - start) / dur);
            progress.style.width = `${(p * 100).toFixed(1)}%`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }
      if (user) restart();
    };

    const restart = () => {
      if (timer) clearInterval(timer);
      if (playing && !prefersReduced) {
        timer = setInterval(() => setIdx(idx + 1), 5400);
      }
    };

    btnNext && btnNext.addEventListener('click', () => setIdx(idx + 1, true));
    btnPrev && btnPrev.addEventListener('click', () => setIdx(idx - 1, true));
    dots.forEach((d, i) => d.addEventListener('click', () => setIdx(i, true)));

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
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
      if (e.key === 'ArrowLeft') { e.preventDefault(); setIdx(idx - 1, true); }
      if (e.key === 'ArrowRight') { e.preventDefault(); setIdx(idx + 1, true); }
    });

    if (btnPlay) {
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

  const a11yBtn = $('#a11yBtn');
  if (a11yBtn) {
    a11yBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const on = html.getAttribute('data-a11y') === '1';
      html.setAttribute('data-a11y', on ? '0' : '1');
      a11yBtn.setAttribute('aria-pressed', String(!on));
    });
  }

  const overlay = $('#searchOverlay');
  const openSearch = () => { overlay.classList.add('open'); $('#searchInput').focus(); };
  const closeSearch = () => overlay.classList.remove('open');

  const openBtn = $('#searchOpen');
  const closeBtn = $('#searchClose');
  openBtn && openBtn.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  overlay && overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });

  const hints = $('#searchHints');
  hints && hints.addEventListener('click', (e) => {
    const b = e.target.closest('[data-hint]');
    if (!b) return;
    $('#searchInput').value = b.dataset.hint;
    $('#searchInput').focus();
  });

  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const ctrlK = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k';
    if (ctrlK) { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') {
      closeSearch();
      closeMega();
    }
  });

  const mega = $('#megaPanel');
  const megaLinks = $('#megaLinks');
  const navLinks = $$('nav .navlink[data-mega]');
  const menuBtn = $('#menuBtn');
  const megaGroups = mega && megaLinks
    ? Array.from(megaLinks.querySelectorAll('[data-mega-group]'))
    : [];

  const MOBILE_BREAKPOINT = 980;
  const isMobileView = () => {
    if (window.matchMedia) {
      try {
        return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
      } catch (e) { }
    }
    return window.innerWidth <= MOBILE_BREAKPOINT;
  };

  const menuRoots = $$('[data-mega-root]');
  const megaMenus = menuRoots.map((root, i) => {
    const mega = root.querySelector('[data-mega-panel]');
    const megaLinks = root.querySelector('[data-mega-links]');
    const navLinks = $$('nav .navlink[data-mega]', root);
    const menuBtn = root.querySelector('[data-mega-btn]');
    const backdrop = root.querySelector('[data-mega-backdrop]');
    const closeBtn = root.querySelector('[data-mega-close]');

    // Optional: mobile drilldown (used in v4)
    const mobileRoot = root.querySelector('[data-mega-mobile-root]');
    const mobileHead = root.querySelector('[data-mega-mobile-head]');
    const mobileTitle = root.querySelector('[data-mega-mobile-title]');
    const mobileBack = root.querySelector('[data-mega-mobile-back]');

    const megaGroups = megaLinks
      ? Array.from(megaLinks.querySelectorAll('[data-mega-group]'))
      : [];

    return {
      root, mega, megaLinks, navLinks, menuBtn, backdrop, closeBtn, megaGroups,
      mobileRoot, mobileHead, mobileTitle, mobileBack,
      _id: i
    };
  }).filter(m => m.mega && m.megaLinks);

  const hoverTimers = new Map();
  function clearHoverTimer(m) {
    const t = hoverTimers.get(m._id);
    if (t) clearTimeout(t);
    hoverTimers.delete(m._id);
  }

  function setBackdrop(m, on) {
    if (!m.backdrop) return;
    m.backdrop.classList.toggle('open', !!on);
    m.backdrop.setAttribute('aria-hidden', on ? 'false' : 'true');
  }

  function closeMega() {
    megaMenus.forEach(m => {
      if (!m.mega) return;
      m.mega.classList.remove('open');
      setBackdrop(m, false);
      m.navLinks.forEach(a => a.setAttribute('aria-expanded', 'false'));
      m.menuBtn && m.menuBtn.setAttribute('aria-expanded', 'false');

      // reset v4 mobile drilldown state
      m.root && m.root.removeAttribute('data-mobile-view');

      // reset positioning tweaks
      m.mega.style.left = '';
      m.mega.style.right = '';
      m.mega.style.transform = '';

      clearHoverTimer(m);
    });
  }

  function hasDrilldown(m) {
    return !!(m && m.root && m.mobileRoot && m.root.getAttribute('data-mega-mobile') === 'drilldown');
  }

  function setMobileView(m, view, title) {
    if (!m || !m.root) return;
    if (!isMobileView() || !hasDrilldown(m)) return;
    m.root.setAttribute('data-mobile-view', view);
    if (m.mobileTitle && typeof title === 'string') {
      m.mobileTitle.textContent = title;
    }
  }

  function buildMobileRoot(m) {
    if (!m || !m.mobileRoot || !m.root) return;
    if (!hasDrilldown(m)) return;
    if (m.mobileRoot.dataset.built === '1') return;

    const links = $$('nav .navlink', m.root);
    const frag = document.createDocumentFragment();

    links.forEach((a) => {
      const txt = (a.textContent || '').trim().replace(/\s+/g, ' ');
      const key = a.dataset.mega;
      if (key) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'mega-rootlink';
        btn.setAttribute('data-mega-mobile-open', key);
        btn.setAttribute('aria-label', `${txt}: открыть`);
        btn.innerHTML = `
          <span class="mega-rootic" aria-hidden="true">◈</span>
          <span class="mega-roottext">${txt}</span>
          <span class="mega-rootchev" aria-hidden="true">›</span>
        `;
        frag.appendChild(btn);
      } else {
        const link = document.createElement('a');
        link.className = 'mega-rootlink';
        link.href = a.getAttribute('href') || '#';
        link.innerHTML = `
          <span class="mega-rootic" aria-hidden="true">◈</span>
          <span class="mega-roottext">${txt}</span>
          <span class="mega-rootchev" aria-hidden="true">→</span>
        `;
        frag.appendChild(link);
      }
    });

    m.mobileRoot.appendChild(frag);
    m.mobileRoot.dataset.built = '1';

    // bind drilldown open handlers
    const openBtns = $$('[data-mega-mobile-open]', m.mobileRoot);
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!isMobileView() || !hasDrilldown(m)) return;
        const key = btn.getAttribute('data-mega-mobile-open');
        const tNode = btn.querySelector && btn.querySelector('.mega-roottext');
        const title = ((tNode && tNode.textContent) || (btn.textContent || '')).trim().replace(/\s+/g, ' ');
        openMega(key, btn, m, { title });
      });
    });
  }

  function openMega(key, trigger, m, opts = {}) {
    if (!m || !m.mega) return;

    const activeKey = key || 'about';
    m.mega.classList.add('open');

    // Mobile drilldown:
    // - when key is null/undefined (burger open): show root categories
    // - when key is present: show that group's subcategories + back button
    const rootMode = isMobileView() && hasDrilldown(m) && !key;
    if (isMobileView() && hasDrilldown(m)) {
      if (rootMode) {
        setMobileView(m, 'root', 'Разделы');
      } else {
        setMobileView(m, 'group', opts.title || 'Разделы');
      }
    }

    if (m.megaGroups && m.megaGroups.length) {
      if (rootMode) {
        m.megaGroups.forEach(g => { g.hidden = true; });
      } else {
        m.megaGroups.forEach(group => {
          group.hidden = group.dataset.megaGroup !== activeKey;
        });
      }
    }

    // Backdrop only matters in mobile view
    setBackdrop(m, isMobileView());

    // Desktop: position mega relative to the hovered/focused nav item
    if (!isMobileView()) {
      if (trigger && trigger.getBoundingClientRect) {
        const headerRect = m.root.getBoundingClientRect();
        const triggerRect = trigger.getBoundingClientRect();

        m.mega.style.left = '0px';
        m.mega.style.right = 'auto';
        m.mega.style.transform = 'none';

        const megaWidth = m.mega.offsetWidth || 0;
        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        let left = triggerCenter - headerRect.left - megaWidth / 2;

        const padding = 8;
        const maxLeft = headerRect.width - megaWidth - padding;
        if (left < padding) left = padding;
        if (left > maxLeft) left = maxLeft;

        m.mega.style.left = `${left}px`;
      } else {
        m.mega.style.left = '';
        m.mega.style.right = '';
        m.mega.style.transform = '';
      }
    } else {
      // Mobile: let CSS drive drawers/sheets; ensure we don't keep desktop positioning
      m.mega.style.left = '';
      m.mega.style.right = '';
      m.mega.style.transform = '';
    }
  }

  function scheduleCloseMega(m) {
    if (isMobileView()) return;
    clearHoverTimer(m);
    const t = setTimeout(() => {
      hoverTimers.delete(m._id);
      closeMega();
    }, 120);
    hoverTimers.set(m._id, t);
  }

  megaMenus.forEach(m => {
    // If drilldown is enabled, build mobile root list once (from <nav>)
    buildMobileRoot(m);
    // Toggle per-top-item
    m.navLinks.forEach(a => {
      a.addEventListener('click', (e) => {
        if (!isMobileView()) return;
        e.preventDefault();
        const key = a.dataset.mega;
        const isOpen = a.getAttribute('aria-expanded') === 'true';
        closeMega();
        if (!isOpen) {
          a.setAttribute('aria-expanded', 'true');
          openMega(key, a, m);
        }
      });

      a.addEventListener('mouseenter', () => {
        if (isMobileView()) return;
        const key = a.dataset.mega;
        if (!key) return;
        clearHoverTimer(m);
        m.navLinks.forEach(link => link.setAttribute('aria-expanded', 'false'));
        a.setAttribute('aria-expanded', 'true');
        openMega(key, a, m);
      });

      a.addEventListener('mouseleave', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });

      a.addEventListener('focus', () => {
        if (isMobileView()) return;
        const key = a.dataset.mega;
        if (!key) return;
        clearHoverTimer(m);
        m.navLinks.forEach(link => link.setAttribute('aria-expanded', 'false'));
        a.setAttribute('aria-expanded', 'true');
        openMega(key, a, m);
      });

      a.addEventListener('blur', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });
    });

    // Hover safety
    if (m.mega) {
      m.mega.addEventListener('mouseenter', () => clearHoverTimer(m));
      m.mega.addEventListener('mouseleave', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });

      // Mobile convenience: tap any link closes the sheet
      m.mega.addEventListener('click', (e) => {
        const a = e.target && e.target.closest ? e.target.closest('a') : null;
        if (!a) return;
        if (isMobileView()) closeMega();
      });
    }

    // Burger button opens first group (about)
    if (m.menuBtn) {
      m.menuBtn.addEventListener('click', () => {
        const isOpen = m.menuBtn.getAttribute('aria-expanded') === 'true';
        closeMega();
        if (!isOpen) {
          m.menuBtn.setAttribute('aria-expanded', 'true');
          // Mobile drilldown: open as root list (all top-level)
          if (isMobileView() && hasDrilldown(m)) {
            buildMobileRoot(m);
            openMega(null, null, m);
          } else {
            openMega('about', null, m);
          }
        }
      });
    }

    // Mobile: back -> root list
    m.mobileBack && m.mobileBack.addEventListener('click', () => {
      if (!isMobileView() || !hasDrilldown(m)) return;
      setMobileView(m, 'root', 'Разделы');
      if (m.megaGroups && m.megaGroups.length) {
        m.megaGroups.forEach(g => { g.hidden = true; });
      }
    });

    // Close controls
    m.closeBtn && m.closeBtn.addEventListener('click', closeMega);
    m.backdrop && m.backdrop.addEventListener('click', closeMega);
  });

  // Click-away close (supports multiple menus)
  document.addEventListener('click', (e) => {
    if (!megaMenus.length) return;
    const insideSomeMenu = megaMenus.some(m => {
      const inside = (m.mega && m.mega.contains(e.target))
        || m.navLinks.some(a => a.contains(e.target))
        || (m.menuBtn && m.menuBtn.contains(e.target));
      return inside;
    });
    if (!insideSomeMenu) closeMega();
  });


  const sc = $('#newsScroller');
  const prev = $('#newsPrev');
  const next = $('#newsNext');
  prev && prev.addEventListener('click', () => sc && sc.scrollBy({ left: -380, behavior: 'smooth' }));
  next && next.addEventListener('click', () => sc && sc.scrollBy({ left: 380, behavior: 'smooth' }));

  const pauseBtn = $('#tickerPause');
  const lane = document.querySelector('.ticker .lane');
  pauseBtn && pauseBtn.addEventListener('click', () => {
    const paused = pauseBtn.getAttribute('aria-pressed') === 'true';
    pauseBtn.setAttribute('aria-pressed', String(!paused));
    pauseBtn.textContent = paused ? 'Пауза' : 'Плей';
    if (lane) lane.style.animationPlayState = paused ? 'running' : 'paused';
  });

  const illBtns = $$('[data-ill-style]');
  const illNodes = $$('[data-ill][data-ill-key]');
  const getIllStyle = () => (localStorage.getItem('slavbank_ill_style') || 'a');

  function renderIll(node, style) {
    const key = node.getAttribute('data-ill-key');
    const tpl = document.getElementById(`ill-${key}-${style}`);
    if (!tpl) return;
    const frag = tpl.content.cloneNode(true);
    node.innerHTML = '';
    node.appendChild(frag);
  }

  function renderAllIll(style) {
    illNodes.forEach(n => renderIll(n, style));
    const active = $('[data-active]') || $('.slide[aria-hidden="false"]');
    if (active) {
      const ill = active.querySelector('[data-ill]');
      if (ill) {
        const clone = ill.cloneNode(true);
        ill.replaceWith(clone);
      }
    }
  }

  function setIllStyle(style) {
    localStorage.setItem('slavbank_ill_style', style);
    illBtns.forEach(b => b.setAttribute('aria-pressed', String(b.getAttribute('data-ill-style') === style)));
    renderAllIll(style);
  }

  if (illNodes.length) {
    setIllStyle(getIllStyle());
    illBtns.forEach(b => b.addEventListener('click', () => setIllStyle(b.getAttribute('data-ill-style'))));
  }

  const accs = $$('[data-acc]');
  accs.forEach(acc => {
    const btn = acc.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = acc.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  const drawerOpen = $('#drawerOpen');
  const drawer = $('#drawer');
  const drawerBackdrop = $('#drawerBackdrop');
  const drawerClose = $('#drawerClose');
  const drawerSearch = $('#drawerSearch');
  const drawerA11y = $('#drawerA11y');

  function openDrawer() {
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    drawerOpen && drawerOpen.setAttribute('aria-expanded', 'true');
    const first = drawer.querySelector('a,button');
    first && first.focus();
  }
  function closeDrawer() {
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


(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const tabs = $$('[data-dash-tab]');
  const panels = $$('[data-dash-panel]');
  if (!tabs.length || !panels.length) return;

  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced) {
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key) {
    localStorage.setItem('slavbank_dash_tab', key);
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.dashTab === key)));
    panels.forEach(p => {
      const on = p.dataset.dashPanel === key;
      if (on) {
        p.hidden = false;
        p.classList.add('is-active');
        if (key === 'about') {
          const ill = document.querySelector('.media-card[data-ill] svg');
          if (ill) {
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

(() => {
  const tabs = Array.from(document.querySelectorAll('[data-doc-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-doc-panel]'));
  if (!tabs.length || !panels.length) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced) {
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key) {
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


(() => {
  const toast = document.querySelector('.toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg || 'Скопировано';
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 1200);
  }

  async function copyText(txt) {
    try {
      await navigator.clipboard.writeText(txt);
      showToast('Скопировано');
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast('Скопировано'); }
      finally { ta.remove(); }
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
