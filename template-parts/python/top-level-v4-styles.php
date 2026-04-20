

<style>
  .topbar {
    display: none;
  }

  .v4-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(245, 250, 252, .56);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(2, 6, 23, .06);
  }

  .v4-nav {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .v4-brand {
    display: flex;
    align-items: center;
    width: 188px;
    max-width: 100%;
    text-decoration: none;
  }

  .v4-brand img {
    display: block;
    width: 100%;
    height: auto;
  }

  .v4-links {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 1 420px;
    flex-wrap: wrap;
  }

  .v4-links a {
    padding: 10px 14px;
    border-radius: 999px;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,.42);
    background: rgba(255,255,255,.48);
    backdrop-filter: blur(12px);
    box-shadow: 0 10px 24px rgba(2, 6, 23, .04);
  }

  .v4-links a:hover {
    text-decoration: none;
    transform: translateY(-1px);
    background: rgba(255,255,255,.66);
    border-color: rgba(0,103,128,.18);
  }

  .v4-head-cta {
    white-space: nowrap;
  }

  .v4home {
    padding-bottom: 50px;
  }

  .v4home section.block {
    padding: 20px 0 34px;
  }

  .v4-shell {
    position: relative;
    overflow: hidden;
    border-radius: 36px;
    border: 1px solid rgba(2, 6, 23, .08);
    background:
      radial-gradient(720px 340px at 0% 0%, rgba(159, 213, 213, .14), transparent 58%),
      radial-gradient(720px 340px at 100% 100%, rgba(208, 184, 163, .16), transparent 58%),
      linear-gradient(180deg, rgba(252,253,254,.92), rgba(245,250,252,.98));
    box-shadow: 0 30px 90px rgba(2, 6, 23, .10);
    padding: 26px;
  }

  .v4-shell::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(90deg, transparent 0 8%, rgba(0,103,128,.05) 8% 8.35%, transparent 8.35% 16%, rgba(208,184,163,.08) 16% 16.35%, transparent 16.35% 100%),
      linear-gradient(transparent 0 12%, rgba(0,103,128,.04) 12% 12.35%, transparent 12.35% 24%, rgba(208,184,163,.06) 24% 24.35%, transparent 24.35% 100%);
    background-size: 138px 138px;
    opacity: .7;
  }

  .v4-glass {
    border: 1px solid rgba(255,255,255,.36);
    background: rgba(255,255,255,.42);
    backdrop-filter: blur(20px);
    box-shadow: 0 22px 60px rgba(2, 6, 23, .08);
  }

  .v4-hero {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    align-items: stretch;
  }

  .v4-copy {
    padding: 28px;
    border-radius: 30px;
    display: grid;
    align-content: start;
  }

  .v4-brandline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,.56);
    border: 1px solid rgba(255,255,255,.44);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--c-primary-700);
  }

  .v4-brandline img {
    width: 24px;
    height: 24px;
    flex: 0 0 auto;
  }

  .v4-title {
    margin: 18px 0 12px;
    font-size: clamp(36px, 3vw, 68px);
    line-height: 1.02;
    letter-spacing: -.03em;
    max-width: 11ch;
  }

  .v4-lead {
    margin: 0;
    max-width: 44ch;
    color: var(--c-muted);
    font-size: 17px;
    line-height: 1.66;
  }

  .v4-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 24px;
  }

  .v4-chip-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 18px;
  }

  .v4-chip {
    display: inline-flex;
    align-items: center;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid rgba(2, 6, 23, .08);
    background: rgba(255,255,255,.68);
    text-decoration: none;
    backdrop-filter: blur(12px);
  }

  .v4-chip:hover {
    text-decoration: none;
    background: rgba(255,255,255,.90);
    border-color: rgba(0,103,128,.14);
  }

  .v4-copy-note {
    margin-top: 18px;
    padding: 14px 16px;
    border-radius: 18px;
    background: rgba(0,103,128,.05);
    border: 1px solid rgba(0,103,128,.10);
    color: var(--c-text);
    line-height: 1.58;
  }

  .v4-collage {
    display: grid;
    grid-template-columns: .92fr 1.08fr;
    grid-template-rows: 220px 220px;
    gap: 16px;
    min-height: 456px;
  }

  .v4-panel {
    position: relative;
    overflow: hidden;
    border-radius: 28px;
  }

  .v4-panel img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.02);
  }

  .v4-panel--photo {
    grid-row: 1 / span 2;
    min-height: 456px;
    background: linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.30));
  }

  .v4-panel--photo img,
  .v4-panel--wide img {
    object-fit: cover;
  }

  .v4-panel--wide {
    min-height: 220px;
  }

  .v4-panel--small {
    min-height: 220px;
  }

  .v4-overlay {
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 16px;
    padding: 14px 16px;
    border-radius: 22px;
    {% comment %} color: #fff; {% endcomment %}
  }

  .v4-overlay strong {
    display: block;
    font-size: 18px;
    line-height: 1.16;
  }

  .v4-overlay span {
    display: block;
    margin-top: 6px;
    {% comment %} color: rgba(255,255,255,.82); {% endcomment %}
    line-height: 1.5;
    font-size: 14px;
  }

  .v4-section-head {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 18px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .v4-section-head h2 {
    margin: 0;
    font-size: clamp(26px, 3vw, 36px);
    line-height: 1.1;
  }

  .v4-section-head p {
    margin: 6px 0 0;
    max-width: 62ch;
    color: var(--c-muted);
  }

  .v4-badge {
    display: inline-flex;
    align-items: center;
    padding: 8px 11px;
    border-radius: 999px;
    background: rgba(0,103,128,.08);
    color: var(--c-primary-700);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  .v4-strips {
    display: grid;
    gap: 16px;
  }

  .v4-strip {
    position: relative;
    overflow: hidden;
    min-height: 280px;
    border-radius: 30px;
    border: 1px solid rgba(2, 6, 23, .08);
    box-shadow: 0 24px 60px rgba(2, 6, 23, .08);
    text-decoration: none;
    color: inherit;
  }

  .v4-strip:hover {
    text-decoration: none;
  }

  .v4-strip img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .v4-strip::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(0, 57, 73, .78) 0%, rgba(0, 57, 73, .64) 38%, rgba(0, 57, 73, .18) 100%);
  }

  .v4-strip-copy {
    position: relative !important;
    z-index: 1 !important;
    width: min(560px, calc(100% - 32px)) !important;
    margin: 22px !important;
    padding: 22px !important;
    border-radius: 26px !important;
    color: #fff !important;
  }

  .v4-strip-copy h3 {
    margin: 14px 0 8px !important;
    font-size: clamp(24px, 3vw, 34px) !important;
    line-height: 1.08 !important;
    max-width: 12ch !important;
    color: #fff !important;

  }

  .v4-strip-copy p {
    font-size: 15px;
    margin: 0 !important;
    color: rgba(255,255,255,.84) !important;
    line-height: 1.62 !important;
    max-width: 42ch !important;
  }
  .v4-strip-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 18px;
  }


  .v4-strip-actions .btn.glass,
  .v4-strip-actions .btn.outline,
  .v4-strip-actions .btn.primary
   {
    color: #fff;
    border-color: rgba(255,255,255,.22);
    background: rgba(255,255,255,.10);
  }

  .v4-strip-actions .btn.glass:hover,
  .v4-strip-actions .btn.outline:hover {
    background: rgba(255,255,255,.16);
  }

  .v4-info {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    gap: 16px;
  }

  .v4-facts,
  .v4-image-note,
  .v4-news-card,
  .v4-final {
    border-radius: 28px;
    border: 1px solid rgba(2, 6, 23, .08);
    background: rgba(255,255,255,.70);
    box-shadow: 0 20px 52px rgba(2, 6, 23, .08);
    overflow: hidden;
  }

  .v4-facts {
    padding: 26px;
  }

  .v4-facts h2 {
    margin: 14px 0 12px;
    font-size: clamp(28px, 3vw, 40px);
    line-height: 1.08;
    max-width: 13ch;
  }

  .v4-facts p {
    margin: 0;
    color: var(--c-muted);
    line-height: 1.68;
  }

  .v4-list {
    margin: 18px 0 0;
    padding-left: 18px;
  }

  .v4-list li {
    margin-bottom: 10px;
    line-height: 1.62;
  }

  .v4-pill-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 18px;
  }

  .v4-pill {
    display: inline-flex;
    align-items: center;
    padding: 10px 14px;
    border-radius: 999px;
    background: rgba(247,250,252,1);
    border: 1px solid rgba(2, 6, 23, .08);
  }

  .v4-image-note {
    position: relative;
    min-height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,.28));
  }

  .v4-image-note img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .v4-image-note-copy {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 18px;
    padding: 18px 20px;
    border-radius: 24px;
    color: #fff;
  }

  .v4-image-note-copy h3 {
    margin: 10px 0 8px;
    font-size: 22px;
    line-height: 1.18;
  }

  .v4-image-note-copy p {
    margin: 0;
    color: rgba(255,255,255,.82);
    line-height: 1.58;
  }

  .v4-news {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .v4-news-card {
    display: block;
    padding: 22px;
    text-decoration: none;
    transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
  }

  .v4-news-card:hover {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 26px 56px rgba(2, 6, 23, .10);
  }

  .v4-news-card .meta {
    color: var(--c-muted);
    font-size: 12px;
    font-weight: 300;
  }

  .v4-news-card h3 {
    margin: 12px 0 8px;
    font-size: 20px;
    line-height: 1.18;
  }

  .v4-news-card p {
    margin: 0;
    color: var(--c-muted);
    line-height: 1.56;
  }

  .v4-final {
    display: grid;
    grid-template-columns: 1.06fr .94fr;
    gap: 20px;
    align-items: center;
    padding: 28px;
    background: linear-gradient(135deg, rgba(255,255,255,.78), rgba(245,250,252,.92));
  }

  .v4-final h2 {
    margin: 12px 0 10px;
    font-size: clamp(28px, 3vw, 40px);
    line-height: 1.08;
    max-width: 14ch;
  }

  .v4-final p {
    margin: 0;
    max-width: 54ch;
    color: var(--c-muted);
    line-height: 1.66;
  }

  .v4-final-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (max-width: 1180px) {
    .v4-hero,
    .v4-info,
    .v4-final {
      grid-template-columns: 1fr;
    }

    .v4-news {
      grid-template-columns: repeat(2, 1fr);
    }

    .v4-final-actions {
      justify-content: flex-start;
    }
  }

  @media (max-width: 920px) {
    .v4-collage {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      min-height: auto;
    }

    .v4-panel--photo {
      grid-row: auto;
      min-height: 320px;
    }
  }

  @media (max-width: 760px) {
    .v4-links {
      order: 3;
      width: 100%;
      flex-wrap: nowrap;
      overflow: auto;
      padding-bottom: 4px;
      -webkit-overflow-scrolling: touch;
    }

    .v4-links::-webkit-scrollbar {
      display: none;
    }

    .v4-head-cta {
      margin-left: auto;
    }

    .v4-shell {
      border-radius: 24px;
      padding: 16px;
    }

    .v4-copy,
    .v4-strip-copy,
    .v4-overlay,
    .v4-image-note-copy,
    .v4-final {
      border-radius: 22px;
    }

    .v4-title {
      max-width: none;
    }

    .v4-news {
      grid-template-columns: 1fr;
    }

    .v4-strip,
    .v4-panel,
    .v4-facts,
    .v4-image-note,
    .v4-news-card {
      border-radius: 22px;
    }

    .v4-strip {
      min-height: 320px;
    }

    .v4-strip-copy {
      width: calc(100% - 24px);
      margin: 12px;
      padding: 18px;
    }
  }
</style>
