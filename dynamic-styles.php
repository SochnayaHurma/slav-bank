<?php
$hero_image = esc_url(sb_alpha_asset('img/background/05e00c50-ede1-47ee-aaab-75ad056b498a.png'));
$font_cygre = esc_url(sb_alpha_asset('fonts/Cygre-SemiBold.woff2'));
?>

<style>
    @font-face {
  font-family: "Cygre";
  src: url("assets/fonts/Cygre-Book.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cygre";
  src: url("assets/fonts/Cygre-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cygre";
  src: url(<?php echo $font_cygre ?>) format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
    body {
    background:
      radial-gradient(1100px 600px at 85% -20%, rgba(0, 103, 128, 0.18), transparent 55%),
      radial-gradient(900px 520px at 10% -10%, rgba(208, 184, 163, 0.2), transparent 55%),
      var(--c-bg);
  }
  .topbar { display:none; }
  .v3-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(245, 250, 252, .56);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(2, 6, 23, .06);
  }
  .v3-nav { display:flex; align-items:center; gap:16px; flex-wrap:wrap; min-height:72px; }
  .v3-brand { display:flex; align-items:center; width:188px; max-width:100%; text-decoration:none; }
  .v3-brand img { display:block; width:100%; height:auto; }
  .v3-links { display:flex; align-items:center; gap:8px; flex:1 1 420px; flex-wrap:wrap; }
  .v3-links a {
    padding:10px 14px; border-radius:999px; text-decoration:none;
    border:1px solid rgba(255,255,255,.42); background:rgba(255,255,255,.46);
    backdrop-filter:blur(12px); box-shadow:0 10px 24px rgba(2, 6, 23, .04);
    transition:transform var(--t-fast) var(--ease), background var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
  }
  .v3-links a:hover { text-decoration:none; transform:translateY(-1px); background:rgba(255,255,255,.66); border-color:rgba(0, 103, 128, .18); }
  .v3-head-cta { white-space:nowrap; }
  .v3-mobile-backdrop, .v3-mobile-menu, .v3-menu-btn { display:none; }
  .v3-menu-btn {
    margin-left:auto; align-items:center; gap:10px; padding:10px 14px; border-radius:999px;
    border:1px solid rgba(255,255,255,.42); background:rgba(255,255,255,.46); backdrop-filter:blur(12px);
    box-shadow:0 10px 24px rgba(2, 6, 23, .04); color:var(--c-text); cursor:pointer;
  }
  .v3-menu-ic { display:inline-grid; gap:4px; }
  .v3-menu-ic span { display:block; width:18px; height:2px; border-radius:999px; background:currentColor; }
  .v3-mobile-backdrop {
    position:fixed; inset:0; background:rgba(2, 6, 23, .56); opacity:0; pointer-events:none;
    transition:opacity var(--t-med) var(--ease); z-index:59;
  }
  .v3-mobile-menu {
    position:fixed; top:0; right:0; bottom:0; width:min(380px, 92vw); padding:18px;
    display:flex; flex-direction:column; gap:16px; transform:translateX(100%);
    transition:transform var(--t-med) var(--ease); z-index:60; border-radius:28px 0 0 28px; overflow:auto;
  }
  .v3-mobile-head { display:flex; align-items:center; gap:12px; }
  .v3-mobile-brand { width:150px; }
  .v3-mobile-close { margin-left:auto; border-radius:999px; }
  .v3-mobile-links { display:grid; gap:10px; }
  .v3-mobile-links a {
    display:flex; align-items:center; min-height:52px; padding:14px 16px; border-radius:20px;
    text-decoration:none; border:1px solid rgba(255,255,255,.22); background:rgba(255,255,255,.10);
    color:#fff; backdrop-filter:blur(12px);
  }
  .v3-mobile-cta { margin-top:auto; }
  .v3-mobile-nav.v3-menu-open .v3-mobile-backdrop { opacity:1; pointer-events:auto; }
  .v3-mobile-nav.v3-menu-open .v3-mobile-menu { transform:translateX(0); }
  body.v3-lock { overflow:hidden; }
  .glass { border:1px solid rgba(255,255,255,.24); background:rgba(255,255,255,.14); backdrop-filter:blur(18px); box-shadow:0 24px 60px rgba(2, 6, 23, .10); }
  .v3home { padding-bottom:50px; }
  .v3home section.block { padding:20px 0 34px; }
  .v3-hero {
    position:relative; overflow:hidden; border-radius:34px; min-height:650px; padding:28px;
    background:
      linear-gradient(115deg, rgba(0, 50, 63, .78) 0%, rgba(0, 70, 89, .62) 34%, rgba(0, 0, 0, .18) 100%),
      radial-gradient(720px 320px at 82% 18%, rgba(159, 213, 213, .18), transparent 58%),
      url('<?php echo $hero_image; ?>') center / cover no-repeat;
    box-shadow: 0 30px 90px rgba(2, 6, 23, .14);
  }
  .v3-hero::before {
    content:""; position:absolute; inset:0; pointer-events:none;
    background:
      linear-gradient(90deg, transparent 0 8%, rgba(255,255,255,.06) 8% 8.4%, transparent 8.4% 17%, rgba(208,184,163,.10) 17% 17.4%, transparent 17.4% 100%),
      linear-gradient(transparent 0 12%, rgba(255,255,255,.04) 12% 12.4%, transparent 12.4% 24%, rgba(159,213,213,.08) 24% 24.4%, transparent 24.4% 100%);
    background-size:138px 138px; opacity:.55;
  }
  .v3-hero-grid { position:relative; z-index:1; display:grid; grid-template-columns:1.02fr .98fr; gap:18px; align-items:stretch; }
  .v3-copy { padding:28px; border-radius:28px; color:#fff; align-self:start; max-width:640px; }
  .v3-kicker { display:inline-flex; align-items:center; padding:8px 12px; border-radius:999px; background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.20); color:rgba(255,255,255,.88); font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; }
  .v3-title { margin:16px 0 12px; max-width:11ch; font-size:clamp(38px, 5vw, 70px); line-height:1.02; letter-spacing:-.03em; }
  .v3-lead { margin:0; max-width:42ch; color:rgba(255,255,255,.82); font-size:17px; line-height:1.65; }
  .v3-actions { display:flex; gap:12px; flex-wrap:wrap; margin-top:24px; }
  .v3-actions .btn.outline, .v3-actions .btn.glass { color:#fff; border-color:rgba(255,255,255,.24); background:rgba(255,255,255,.10); }
  .v3-chip-row { display:flex; gap:10px; flex-wrap:wrap; margin-top:18px; }
  .v3-chip { display:inline-flex; align-items:center; padding:10px 14px; border-radius:999px; background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.18); color:#fff; text-decoration:none; backdrop-filter:blur(12px); }
  .v3-chip:hover { text-decoration:none; background:rgba(255,255,255,.16); }
  .v3-side { display:grid; grid-template-rows:1fr auto; gap:16px; min-height:100%; }
  .v3-hero-ill { position:relative; border-radius:28px; overflow:hidden; min-height:360px; background:rgba(255,255,255,.08); }
  .v3-hero-ill::after {
    content:""; position:absolute; inset:0; pointer-events:none;
    background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0) 34%, rgba(0,0,0,.14));
  }
  .v3-hero-ill img { display:block; width:100%; height:100%; object-fit:cover; transform:scale(1.01); }
  .v3-side-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; }
  .v3-mini { padding:18px; border-radius:22px; color:#fff; min-height:132px; }
  .v3-mini strong { display:block; font-size:18px; line-height:1.15; }
  .v3-mini span { display:block; margin-top:8px; color:rgba(255,255,255,.78); line-height:1.5; font-size:14px; }
  .v3-section-head { display:flex; justify-content:space-between; align-items:end; gap:18px; flex-wrap:wrap; margin-bottom:16px; }
  .v3-section-head h2 { margin:0; font-size:clamp(26px, 3vw, 36px); line-height:1.1; }
  .v3-section-head p { margin:6px 0 0; max-width:62ch; color:var(--c-muted); }
  .v3-badge { display:inline-flex; align-items:center; padding:8px 11px; border-radius:999px; background:rgba(0,103,128,.08); color:var(--c-primary-700); font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; }
  .v3-routes { display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; }
  .v3-route {
    overflow:hidden; border-radius:28px; border:1px solid rgba(2, 6, 23, .08); background:rgba(255,255,255,.66);
    box-shadow:0 20px 52px rgba(2, 6, 23, .08); text-decoration:none;
    transition:transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
  }
  .v3-route:hover { text-decoration:none; transform:translateY(-3px); box-shadow:0 28px 60px rgba(2, 6, 23, .11); border-color:rgba(0,103,128,.14); }
  .v3-route-media { height:220px; border-bottom:1px solid rgba(2, 6, 23, .06); background:linear-gradient(180deg, rgba(247,250,252,1), rgba(255,255,255,.84)); }
  .v3-route-media img { display:block; width:100%; height:100%; object-fit:cover; }
  .v3-route-copy { padding:22px; }
  .v3-route-copy h3 { margin:14px 0 8px; font-size:22px; line-height:1.14; }
  .v3-route-copy p { margin:0; color:var(--c-muted); line-height:1.58; }
  .v3-more { display:inline-flex; margin-top:16px; font-weight:600; color:var(--c-primary-700); }
  .v3-profile { display:grid; grid-template-columns:.96fr 1.04fr; gap:16px; }
  .v3-photo-card, .v3-text-card, .v3-news-card {
    border-radius:28px; border:1px solid rgba(2, 6, 23, .08); background:rgba(255,255,255,.72); box-shadow:0 20px 52px rgba(2, 6, 23, .08); overflow:hidden;
  }
  .v3-photo-card { position:relative; min-height:520px; background:linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.30)), url('<?php echo $hero_image; ?>') center / cover no-repeat; }
  .v3-photo-caption { position:absolute; left:20px; right:20px; bottom:20px; padding:18px 20px; border-radius:24px; color:#fff; }
  .v3-text-card { padding:26px; }
  .v3-facts { margin:18px 0 0; padding-left:18px; }
  .v3-facts li { margin-bottom:10px; line-height:1.62; }
  .v3-pill-row { display:flex; gap:10px; flex-wrap:wrap; margin-top:18px; }
  .v3-pill { display:inline-flex; align-items:center; padding:10px 14px; border-radius:999px; background:rgba(247,250,252,1); border:1px solid rgba(2, 6, 23, .08); }
  .v3-news { display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; }
  .v3-news-card { display:block; padding:22px; text-decoration:none; transition:transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease); }
  .v3-news-card:hover { text-decoration:none; transform:translateY(-2px); box-shadow:0 26px 56px rgba(2, 6, 23, .10); }
  .v3-news-card h3 { margin:12px 0 8px; font-size:20px; line-height:1.18; }
  .v3-news-card p { margin:0; color:var(--c-muted); line-height:1.56; }
  @media (max-width: 1180px) {
    .v3-hero-grid, .v3-profile { grid-template-columns:1fr; }
    .v3-routes, .v3-news { grid-template-columns:repeat(2, 1fr); }
	      .v3-side {display: none;}
	  .v3-links > li {margin-bottom: 20px;}
  }
  @media (max-width: 760px) {
    .v3-brand { width:160px; flex:0 0 auto; }
    .v3-links, .v3-head-cta { display:none; }
    .v3-menu-btn { display:inline-flex; }
    .v3-mobile-backdrop { display:block; }
    .v3-mobile-menu { display:flex; }
    .v3-side { display:none; }
    .v3-hero { min-height:auto; padding:18px; border-radius:24px; }
    .v3-copy, .v3-mini, .v3-text-card { border-radius:22px; }
    .v3-title { max-width:none; }
    .v3-side-grid, .v3-routes, .v3-news { grid-template-columns:1fr; }
    .v3-route, .v3-photo-card, .v3-news-card { border-radius:22px; }
    .v3-photo-card { min-height:380px; }
  }
</style>