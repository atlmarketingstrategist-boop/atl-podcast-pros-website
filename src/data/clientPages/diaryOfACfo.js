// The Diary of a CFO, client equipment list.
// Totals are computed from the CATEGORIES data below, never hardcoded.
// Money is handled in integer cents so repeated addition cannot drift.

const CATEGORIES = [
  {
    name: 'Camera & Video',
    cls: 'cat-video',
    optional: false,
    items: [
      { name: 'Sony ZV-E10 II Mirrorless Camera (Body Only)', desc: 'Super 35 mirrorless body, 4K video, Sony E-mount. Primary camera for the setup.', qty: 1, unit: 1298.00, url: 'https://www.amazon.com/dp/B0D92VDW76?tag=benjaminpaul-20' },
      { name: 'Sigma 18-50mm F2.8 DC DN Lens (Sony E)', desc: 'Fast constant aperture zoom. Flexible framing in a compact room.', qty: 1, unit: 499.00, url: 'https://www.amazon.com/dp/B09JVBB36L?tag=benjaminpaul-20' },
      { name: 'NP-FW50 Dummy Battery / AC Adapter', desc: 'Continuous power to the camera so recording is never limited by battery life.', qty: 1, unit: 26.89, url: 'https://www.amazon.com/dp/B01D67LTIK?tag=benjaminpaul-20' },
      { name: 'RODECaster Video Production Console', desc: 'Video and audio production console. Switching, recording, and routing in one unit.', qty: 1, unit: 899.00, url: 'https://www.amazon.com/dp/B0DP7SCRYB?tag=benjaminpaul-20' },
      { name: 'Selens Tabletop Camera Desk Mount', desc: 'Desk mounted camera support. Keeps the floor clear and framing repeatable.', qty: 1, unit: 32.99, url: 'https://www.amazon.com/dp/B0BM4PBKZL?tag=benjaminpaul-20' },
      { name: 'Micro HDMI to HDMI Cable', desc: 'Connects the camera to the production console.', qty: 1, unit: 34.19, url: 'https://www.amazon.com/dp/B0CQSYB8YW?tag=benjaminpaul-20' },
      { name: '4K HDMI Cable 10ft', desc: 'Console to display run for monitoring.', qty: 1, unit: 8.54, url: 'https://www.amazon.com/dp/B07X37CG9V?tag=benjaminpaul-20' },
    ],
  },
  {
    name: 'Audio',
    cls: 'cat-audio',
    optional: false,
    items: [
      { name: 'RODE PSA1+ Boom Arm', desc: 'Studio boom arm for the existing RODE PodMic. Smooth positioning, no desk vibration.', qty: 1, unit: 136.00, url: 'https://www.amazon.com/dp/B09JBVR5B4?tag=benjaminpaul-20' },
      { name: 'Cable Matters XLR Cable 6ft (2-Pack)', desc: 'Balanced XLR runs from microphone to console.', qty: 1, unit: 17.99, url: 'https://www.amazon.com/dp/B00KO8VYMG?tag=benjaminpaul-20' },
    ],
  },
  {
    name: 'Lighting',
    cls: 'cat-lighting',
    optional: false,
    items: [
      { name: 'Amaran 200dS LED Video Light', desc: 'Daylight balanced key and fill lights. Bowens mount, app controlled.', qty: 2, unit: 212.80, url: 'https://www.amazon.com/dp/B08RNW1HL6?tag=benjaminpaul-20' },
      { name: 'NEEWER 33.5 in Lantern Softbox (Bowens)', desc: 'Lantern modifiers for soft, even light with a natural falloff.', qty: 2, unit: 82.49, url: 'https://www.amazon.com/dp/B0CC1KSZG3?tag=benjaminpaul-20' },
      { name: 'GVM 800D RGB LED Panels (2-Pack)', desc: 'Accent and background color panels to add depth behind the shot.', qty: 1, unit: 179.55, url: 'https://www.amazon.com/dp/B07ZCYMS3V?tag=benjaminpaul-20' },
      { name: 'Flashpoint Deluxe Telepole Support System (Pair)', desc: 'Floor to ceiling support poles. Keeps lighting off the floor in a tight room.', qty: 1, unit: 189.00, url: 'https://www.amazon.com/dp/B0CYDS9YX7?tag=benjaminpaul-20' },
      { name: 'Super Clamps (4-Pack)', desc: 'Mounting hardware for lights and modifiers on the support poles.', qty: 1, unit: 17.99, url: 'https://www.amazon.com/dp/B095P1L43W?tag=benjaminpaul-20' },
    ],
  },
  {
    name: 'Acoustic Treatment',
    cls: 'cat-acoustic',
    optional: false,
    items: [
      { name: 'Acoustic Fiberglass Panels, Beige (4-Pack)', desc: 'Broadband panels at the primary reflection points to control room reflections.', qty: 1, unit: 89.00, url: 'https://www.amazon.com/dp/B0D1THH1CN?tag=benjaminpaul-20' },
    ],
  },
  {
    name: 'Cable Management & Power',
    cls: 'cat-cable',
    optional: false,
    items: [
      { name: 'Paintable Cable Raceway Kit 26ft', desc: 'Wall mounted raceway to conceal HDMI and power runs cleanly.', qty: 1, unit: 29.99, url: 'https://www.amazon.com/dp/B07M9VLH4J?tag=benjaminpaul-20' },
      { name: 'Under Desk Cable Management Tray, White', desc: 'Keeps power and signal cable off the floor and out of the shot.', qty: 1, unit: 37.99, url: 'https://www.amazon.com/dp/B0G7J8JN7L?tag=benjaminpaul-20' },
      { name: 'Surge Protector 15ft (6 AC + 3 USB-C)', desc: 'Surge protected power for desk equipment and lighting.', qty: 2, unit: 14.24, url: 'https://www.amazon.com/dp/B0G2LZPN6B?tag=benjaminpaul-20' },
      { name: 'TP-Link Tapo Smart Plugs', desc: 'Switch the studio on and off without crawling behind the desk.', qty: 1, unit: 24.99, url: 'https://www.amazon.com/dp/B0BXMNJDW3?tag=benjaminpaul-20' },
      { name: 'Adhesive Cable Clips (120 pcs)', desc: 'Routes and secures individual cable runs along desk and wall edges.', qty: 1, unit: 7.99, url: 'https://www.amazon.com/dp/B09X5FTR5C?tag=benjaminpaul-20' },
      { name: 'Reusable Cable Ties (60-Pack)', desc: 'Bundles cable behind the desk and inside the raceway.', qty: 1, unit: 6.98, url: 'https://www.amazon.com/dp/B081HH5X61?tag=benjaminpaul-20' },
    ],
  },
  {
    name: 'Control & Storage',
    cls: 'cat-control',
    optional: true,
    items: [
      { name: 'Samsung T7 Portable SSD 1TB', desc: 'Fast external storage for recording and offloading episodes.', qty: 1, unit: 230.00, url: 'https://www.amazon.com/dp/B0874XN4D8?tag=benjaminpaul-20' },
      { name: 'USB-C Multiport Adapter Hub', desc: 'Expands computer connectivity for the console, storage, and peripherals.', qty: 1, unit: 44.99, url: 'https://www.amazon.com/dp/B0D5XSTWNT?tag=benjaminpaul-20' },
      { name: 'Elgato Stream Deck XL', desc: 'One touch control for scenes, recording, and lighting presets.', qty: 1, unit: 222.29, url: 'https://www.amazon.com/dp/B07RL8H55Z?tag=benjaminpaul-20' },
    ],
  },
];

const cents = (n) => Math.round(n * 100);
const lineCents = (item) => cents(item.unit) * item.qty;
const catCents = (cat) => cat.items.reduce((sum, item) => sum + lineCents(item), 0);

const money = (c) =>
  '$' + (c / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const coreCents = CATEGORIES.filter((c) => !c.optional).reduce((s, c) => s + catCents(c), 0);
const optionalCents = CATEGORIES.filter((c) => c.optional).reduce((s, c) => s + catCents(c), 0);
const withOptionalCents = coreCents + optionalCents;
const itemCount = CATEGORIES.reduce((s, c) => s + c.items.length, 0);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const LINK_REL = 'sponsored noopener';

function rowsFor(cat) {
  return cat.items
    .map((item) => {
      const unitCell = item.qty > 1 ? `${money(cents(item.unit))} ea` : money(cents(item.unit));
      return `      <tr>
        <td>
          <a class="item-name" href="${item.url}" target="_blank" rel="${LINK_REL}">${esc(item.name)}</a>
          <div class="item-desc">${esc(item.desc)}</div>
        </td>
        <td class="num qty">${item.qty}</td>
        <td class="num">${unitCell}</td>
        <td class="num strong">${money(lineCents(item))}</td>
        <td class="buy"><a class="btn-amazon" href="${item.url}" target="_blank" rel="${LINK_REL}">Buy on Amazon</a></td>
      </tr>`;
    })
    .join('\n');
}

function tableFor(cat) {
  const badge = cat.optional ? ' <span class="cat-badge">Optional</span>' : '';
  return `  <section class="cat-block">
    <div class="cat-head ${cat.cls}">
      <h2 class="cat-title">${esc(cat.name)}${badge}</h2>
      <div class="cat-subtotal"><span>Subtotal</span><strong>${money(catCents(cat))}</strong></div>
    </div>
    <div class="gear-table-wrap">
      <table class="gear-table">
        <thead>
          <tr>
            <th class="col-item">Item</th>
            <th class="col-qty">Qty</th>
            <th class="col-unit">Unit Price</th>
            <th class="col-total">Line Total</th>
            <th class="col-buy">Purchase</th>
          </tr>
        </thead>
        <tbody>
${rowsFor(cat)}
        </tbody>
      </table>
    </div>
  </section>`;
}

const htmlContent = `
<div class="header">
  <div class="header-left">
    <div class="header-eyebrow">Client Equipment List</div>
    <h1 class="header-title">The Diary of a CFO: Studio Equipment List</h1>
    <p class="header-sub">Recording equipment selected by ATL Podcast Pros for Wassia Kamon's home studio in Johns Creek, GA.</p>
    <p class="header-note">Wassia's existing RODE PodMic and computer stay in the setup.</p>
  </div>
  <div class="header-meta">
    <div class="brand">ATL PODCAST PROS</div>
    <div class="tagline">atlpodcastpros.com</div>
  </div>
</div>

<div class="notice-bar">
  <span class="notice-dot"></span>
  <p>Every item links directly to Amazon for ordering. Items open in a new tab. Prices are current as of the date noted below and may change.</p>
</div>

<div class="body">

  <div class="stat-row">
    <div class="stat-cell">
      <div class="stat-label">Total Items</div>
      <div class="stat-val">${itemCount}</div>
      <div class="stat-sub">Across ${CATEGORIES.length} categories</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Core Equipment</div>
      <div class="stat-val">${money(coreCents)}</div>
      <div class="stat-sub">Required items</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Optional Add On</div>
      <div class="stat-val">${money(optionalCents)}</div>
      <div class="stat-sub">Control and storage</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">With Optional</div>
      <div class="stat-val">${money(withOptionalCents)}</div>
      <div class="stat-sub">Everything listed</div>
    </div>
  </div>

${CATEGORIES.map(tableFor).join('\n\n')}

  <div class="totals-block">
    <div class="totals-inner">
      <div class="totals-row"><span>Core equipment</span><span>${money(coreCents)}</span></div>
      <div class="totals-row"><span>Control &amp; Storage, optional</span><span>${money(optionalCents)}</span></div>
      <div class="totals-grand">
        <div class="totals-grand-label">With optional Control &amp; Storage</div>
        <div class="totals-grand-val">${money(withOptionalCents)}</div>
      </div>
    </div>
  </div>

  <div class="notes">
    <p>Amazon prices are subject to change. Prices as of November 18, 2026.</p>
    <p>As an Amazon Associate, ATL Podcast Pros earns from qualifying purchases at no extra cost to you.</p>
  </div>

  <div class="cta">
    <div class="cta-title">Questions About This List?</div>
    <p class="cta-body">Our team is happy to walk through any item before you order. Reach out any time.</p>
    <div class="cta-links">
      <a href="mailto:info@atlpodcastpros.com">info@atlpodcastpros.com</a>
      <span class="cta-sep">|</span>
      <a href="tel:+18555291404">(855) 529-1404</a>
    </div>
  </div>

</div>

<div class="footer">
  <div class="footer-brand">ATL PODCAST PROS</div>
  <div class="footer-contact">atlpodcastpros.com &nbsp;|&nbsp; (855) 529-1404 &nbsp;|&nbsp; info@atlpodcastpros.com</div>
</div>
`;

export const diaryOfACfoPage = {
  slug: 'diary-of-a-cfo',
  clientName: 'The Diary of a CFO',
  passwordProtected: false,
  totals: { coreCents, optionalCents, withOptionalCents, itemCount },
  pageStyles: `
    .client-page-doc *, .client-page-doc *::before, .client-page-doc *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .client-page-doc {
      --crimson: #A61E31;
      --charcoal: #1A1A1A;
      --paper: #F4F2EF;
      --white: #FFFFFF;
      --muted: #6B6B6B;
      --border: rgba(26,26,26,0.12);
      --font-display: 'Bebas Neue', sans-serif;
      --font-head: 'Montserrat', sans-serif;
      --font-body: 'Lato', sans-serif;
      font-family: var(--font-body);
      background: var(--paper);
      color: var(--charcoal);
      max-width: 940px;
      margin: 0 auto;
      padding: 0 0 60px;
      line-height: 1.6;
    }

    .client-page-doc .header { background: var(--charcoal); padding: 34px 40px 30px; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 20px; }
    .client-page-doc .header-left { flex: 1 1 320px; min-width: 0; }
    .client-page-doc .header-eyebrow { font-family: var(--font-head); font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--crimson); margin-bottom: 10px; }
    .client-page-doc .header-title { font-family: var(--font-display); font-size: clamp(30px, 6vw, 46px); line-height: 1.02; color: #fff; letter-spacing: .01em; }
    .client-page-doc .header-sub { font-size: 14px; color: rgba(255,255,255,0.82); margin-top: 12px; max-width: 60ch; }
    .client-page-doc .header-note { font-size: 13px; color: rgba(255,255,255,0.62); margin-top: 8px; font-style: italic; }
    .client-page-doc .header-meta { text-align: right; flex: 0 0 auto; }
    .client-page-doc .brand { font-family: var(--font-head); font-size: 11px; font-weight: 800; letter-spacing: .16em; color: #fff; }
    .client-page-doc .tagline { font-size: 11px; color: rgba(255,255,255,0.55); margin-top: 4px; }

    .client-page-doc .notice-bar { display: flex; align-items: flex-start; gap: 10px; background: rgba(166,30,49,0.07); border-left: 3px solid var(--crimson); padding: 12px 20px; }
    .client-page-doc .notice-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--crimson); flex: 0 0 auto; margin-top: 7px; }
    .client-page-doc .notice-bar p { font-size: 12.5px; color: #444; }

    .client-page-doc .body { padding: 0 40px; }

    .client-page-doc .stat-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); margin: 26px 0 30px; }
    .client-page-doc .stat-cell { background: var(--white); padding: 16px 18px; }
    .client-page-doc .stat-label { font-family: var(--font-head); font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }
    .client-page-doc .stat-val { font-family: var(--font-display); font-size: 26px; color: var(--charcoal); line-height: 1.1; padding-top: 6px; }
    .client-page-doc .stat-sub { font-size: 11px; color: var(--muted); margin-top: 2px; }

    .client-page-doc .cat-block { margin-bottom: 30px; }
    .client-page-doc .cat-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; background: var(--charcoal); padding: 12px 18px; border-left: 4px solid var(--crimson); }
    .client-page-doc .cat-title { font-family: var(--font-head); font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #fff; }
    .client-page-doc .cat-badge { display: inline-block; margin-left: 8px; background: var(--crimson); color: #fff; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; padding: 3px 8px; border-radius: 100px; vertical-align: middle; }
    .client-page-doc .cat-subtotal { font-family: var(--font-head); font-size: 11px; color: rgba(255,255,255,0.7); letter-spacing: .08em; text-transform: uppercase; }
    .client-page-doc .cat-subtotal strong { color: #fff; font-size: 14px; margin-left: 8px; letter-spacing: 0; }

    .client-page-doc .gear-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .client-page-doc .gear-table { width: 100%; border-collapse: collapse; background: var(--white); min-width: 640px; }
    .client-page-doc .gear-table thead th { font-family: var(--font-head); font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--border); background: #FAFAFA; }
    .client-page-doc .gear-table .col-item { width: 44%; }
    .client-page-doc .gear-table .col-qty { width: 7%; text-align: center; }
    .client-page-doc .gear-table .col-unit, .client-page-doc .gear-table .col-total { width: 13%; text-align: right; }
    .client-page-doc .gear-table .col-buy { width: 23%; text-align: center; }
    .client-page-doc .gear-table tbody td { padding: 12px 14px; font-size: 13px; border-bottom: 1px solid var(--border); vertical-align: top; }
    .client-page-doc .gear-table tbody tr:last-child td { border-bottom: 0; }
    .client-page-doc .gear-table tbody tr:nth-child(even) { background: #FAFAFA; }
    .client-page-doc .gear-table td.num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
    .client-page-doc .gear-table td.qty { text-align: center; }
    .client-page-doc .gear-table td.strong { font-weight: 700; }
    .client-page-doc .gear-table td.buy { text-align: center; }

    .client-page-doc .item-name { display: block; font-family: var(--font-head); font-size: 13px; font-weight: 700; color: var(--charcoal); text-decoration: none; line-height: 1.35; }
    .client-page-doc .item-name:hover { color: var(--crimson); text-decoration: underline; }
    .client-page-doc .item-desc { font-size: 12px; color: var(--muted); margin-top: 4px; }

    .client-page-doc .btn-amazon { display: inline-block; background: var(--crimson); color: #fff; font-family: var(--font-head); font-size: 10.5px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; text-decoration: none; padding: 9px 14px; border-radius: 4px; white-space: nowrap; }
    .client-page-doc .btn-amazon:hover { background: #8A1829; }

    .client-page-doc .totals-block { background: var(--charcoal); padding: 22px 24px; margin: 8px 0 26px; }
    .client-page-doc .totals-inner { max-width: 420px; margin-left: auto; }
    .client-page-doc .totals-row { display: flex; justify-content: space-between; gap: 16px; font-size: 13px; color: rgba(255,255,255,0.78); padding: 6px 0; }
    .client-page-doc .totals-grand { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 10px; border-top: 1px solid rgba(255,255,255,0.18); margin-top: 10px; padding-top: 12px; }
    .client-page-doc .totals-grand-label { font-family: var(--font-head); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,0.7); }
    .client-page-doc .totals-grand-val { font-family: var(--font-display); font-size: 32px; color: #fff; line-height: 1; }

    .client-page-doc .notes { border-top: 1px solid var(--border); padding-top: 16px; }
    .client-page-doc .notes p { font-size: 12px; color: var(--muted); margin-bottom: 6px; }

    .client-page-doc .cta { background: var(--white); border: 1px solid var(--border); border-left: 4px solid var(--crimson); padding: 22px 24px; margin-top: 24px; }
    .client-page-doc .cta-title { font-family: var(--font-head); font-size: 14px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
    .client-page-doc .cta-body { font-size: 13px; color: #444; margin-top: 6px; }
    .client-page-doc .cta-links { margin-top: 12px; display: flex; flex-wrap: wrap; align-items: center; gap: 10px; font-family: var(--font-head); font-size: 13px; font-weight: 700; }
    .client-page-doc .cta-links a { color: var(--crimson); text-decoration: none; }
    .client-page-doc .cta-links a:hover { text-decoration: underline; }
    .client-page-doc .cta-sep { color: var(--border); }

    .client-page-doc .footer { background: var(--charcoal); padding: 20px 40px; margin-top: 30px; text-align: center; }
    .client-page-doc .footer-brand { font-family: var(--font-head); font-size: 11px; font-weight: 800; letter-spacing: .16em; color: #fff; }
    .client-page-doc .footer-contact { font-size: 11.5px; color: rgba(255,255,255,0.6); margin-top: 6px; }

    @media (max-width: 640px) {
      .client-page-doc .header { padding: 26px 20px 24px; }
      .client-page-doc .header-meta { text-align: left; }
      .client-page-doc .body { padding: 0 20px; }
      .client-page-doc .notice-bar { padding: 12px 16px; }
      .client-page-doc .footer { padding: 20px; }
      .client-page-doc .totals-inner { max-width: none; }
      .client-page-doc .cat-head { padding: 12px 14px; }
      .client-page-doc .gear-table { min-width: 560px; }
      .client-page-doc .gear-table thead th { padding: 9px 10px; }
      .client-page-doc .gear-table tbody td { padding: 10px; font-size: 12.5px; }
      .client-page-doc .item-name { font-size: 12.5px; }
      .client-page-doc .item-desc { font-size: 11.5px; }
      .client-page-doc .btn-amazon { padding: 8px 10px; font-size: 10px; }
      .client-page-doc .header-title { font-size: 30px; }
      .client-page-doc .totals-grand-val { font-size: 28px; }
    }
  `,
  htmlContent,
};
