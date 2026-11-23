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
    name: 'Teleprompter',
    cls: 'cat-prompter',
    optional: false,
    items: [
      { name: 'Elgato Prompter Teleprompter with Built-in Screen', desc: 'Reads naturally to camera. Built-in screen keeps eyeline on the lens.', qty: 1, unit: 219.99, url: 'https://www.amazon.com/dp/B0CH3P9K1X?tag=benjaminpaul-20' },
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

// Studio design and decor. counted:false items stay visible but out of every total.
const DESIGN_PURCHASE = [
  { name: 'Pink Barrel Accent Armchair (Latitude Run)', qty: 1, unit: 229.00, counted: true, badge: 'Selected', vendor: 'wayfair',
    url: 'https://www.wayfair.com/furniture/pdp/latitude-run-double-layer-upholstered-armchair-barrel-accent-chair-w113952065.html?piid=59484712' },
  { name: 'Burgundy Velvet Armchair (Mercer41)', qty: 1, unit: 299.00, counted: false, badge: 'Alternate option', vendor: 'wayfair',
    note: 'Choose one chair. Final pick pending dimensions.',
    url: 'https://www.wayfair.com/furniture/pdp/mercer41-modern-velvet-upholstered-chair-a-chair-with-armrests-suitable-for-living-room-or-bedroom-with-soft-cushions-w117038564.html?piid=529713293' },
  { name: 'Faux Olive Tree, 6 ft', qty: 1, unit: 86.00, counted: true, vendor: 'amazon', url: 'https://www.amazon.com/dp/B0FVS7RRRP?tag=benjaminpaul-20' },
  { name: 'Arched Accent Wall Panels', qty: 2, unit: 105.99, counted: true, vendor: 'amazon', url: 'https://www.amazon.com/dp/B0GZWMR5HB?tag=benjaminpaul-20' },
  { name: 'Floor LED Corner Light', qty: 1, unit: 35.00, counted: true, vendor: 'amazon', url: 'https://www.amazon.com/dp/B0DRFPCJ49?tag=benjaminpaul-20' },
  { name: 'Burgundy Abstract Area Rug, 6x9', qty: 1, unit: 140.00, counted: true, vendor: 'amazon', url: 'https://www.amazon.com/dp/B0H99BW8ZY?tag=benjaminpaul-20' },
];

const DESIGN_TEAM = [
  { name: 'Paint and supplies', unit: 180.00, counted: true },
  { name: 'Shelf decor (styled with Wassia\'s existing award and bow)', unit: 100.00, counted: true },
  { name: 'Custom branded wall sign', unit: null, counted: false, note: 'On hold until the final podcast name is chosen' },
];

// The five items that double for a second camera angle, in the order shown in the callout.
const SECOND_CAM = [
  { name: 'Sony ZV-E10 II Mirrorless Camera (Body Only)' },
  { name: 'Sigma 18-50mm F2.8 DC DN Lens (Sony E)' },
  { name: 'NP-FW50 Dummy Battery / AC Adapter' },
  { name: 'Micro HDMI to HDMI Cable', label: 'Micro HDMI to HDMI Cable (camera to RODECaster)' },
  { name: 'Selens Tabletop Camera Desk Mount' },
];

const cents = (n) => Math.round(n * 100);
const lineCents = (item) => cents(item.unit) * item.qty;
const catCents = (cat) => cat.items.reduce((sum, item) => sum + lineCents(item), 0);

const money = (c) =>
  '$' + (c / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const coreCents = CATEGORIES.filter((c) => !c.optional).reduce((s, c) => s + catCents(c), 0);
const optionalCents = CATEGORIES.filter((c) => c.optional).reduce((s, c) => s + catCents(c), 0);
const itemCount = CATEGORIES.reduce((s, c) => s + c.items.length, 0);

const allItems = CATEGORIES.flatMap((c) => c.items);
const secondCamItems = SECOND_CAM.map((entry) => {
  const found = allItems.find((i) => i.name === entry.name);
  if (!found) throw new Error('Second camera item not found in data: ' + entry.name);
  return { ...found, label: entry.label || found.name };
});
const secondCamCents = secondCamItems.reduce((sum, i) => sum + cents(i.unit), 0);

const designBuyCents = DESIGN_PURCHASE.filter((i) => i.counted).reduce((sum, i) => sum + cents(i.unit) * i.qty, 0);
const designTeamCents = DESIGN_TEAM.filter((i) => i.counted).reduce((sum, i) => sum + cents(i.unit), 0);
// Design team materials are billed separately in advance, so they stay out of every page total.
const designCountedCents = designBuyCents;

const core1Cents = coreCents;
const core2Cents = coreCents + secondCamCents;
const grand1Cents = core1Cents + designCountedCents;
const grand2Cents = core2Cents + designCountedCents;
const grand1OptCents = grand1Cents + optionalCents;
const grand2OptCents = grand2Cents + optionalCents;

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

function secondCamCallout() {
  const lines = secondCamItems
    .map((i) => `        <li><span>${esc(i.label)}</span><span class="num">${money(cents(i.unit))}</span></li>`)
    .join('\n');
  return `    <div class="callout">
      <div class="callout-title">Optional: second camera angle</div>
      <p class="callout-body">We recommend a 2-camera setup so your episodes can cut between a close-up and a wide shot. If you decide to add the second camera, you do not need any new products. Simply change the quantity to 2 for these five items when ordering:</p>
      <ul class="callout-list">
${lines}
      </ul>
      <div class="callout-total"><span>Second camera add-on</span><strong>${money(secondCamCents)}</strong></div>
    </div>`;
}

function designRows() {
  return DESIGN_PURCHASE.map((i) => {
    const wayfair = i.vendor === 'wayfair';
    const rel = wayfair ? 'noopener' : LINK_REL;
    const label = wayfair ? 'Buy on Wayfair' : 'Buy on Amazon';
    const badge = i.badge ? ` <span class="item-badge${i.counted ? '' : ' item-badge--alt'}">${esc(i.badge)}</span>` : '';
    const note = i.note ? `<div class="item-desc">${esc(i.note)}</div>` : '';
    const unitCell = i.qty > 1 ? `${money(cents(i.unit))} ea` : money(cents(i.unit));
    const lineCell = i.counted ? money(cents(i.unit) * i.qty) : `<span class="not-counted">${money(cents(i.unit) * i.qty)}</span>`;
    return `      <tr>
        <td>
          <a class="item-name" href="${i.url}" target="_blank" rel="${rel}">${esc(i.name)}</a>${badge}
          ${note}
        </td>
        <td class="num qty">${i.qty}</td>
        <td class="num">${unitCell}</td>
        <td class="num strong">${lineCell}</td>
        <td class="buy"><a class="btn-amazon" href="${i.url}" target="_blank" rel="${rel}">${label}</a></td>
      </tr>`;
  }).join('\n');
}

function designTeamRows() {
  return DESIGN_TEAM.map((i) => {
    const price = i.unit === null ? 'TBD' : money(cents(i.unit));
    const note = i.note ? `<div class="item-desc">${esc(i.note)}</div>` : '';
    return `      <li class="team-row">
        <span class="team-name">${esc(i.name)}${note}</span>
        <span class="num strong">${price}</span>
      </li>`;
  }).join('\n');
}

function designSection() {
  return `  <section class="cat-block design-block">
    <div class="cat-head cat-design">
      <h2 class="cat-title">Studio Design &amp; Decor</h2>
      <div class="cat-subtotal"><span>Your purchases</span><strong>${money(designBuyCents)}</strong></div>
    </div>
    <p class="design-sub">Design items selected by our design team for Wassia's on-camera set (Tier 1).</p>

    <h3 class="design-head">Items Wassia purchases</h3>
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
${designRows()}
        </tbody>
      </table>
    </div>
    <div class="design-subtotal"><span>Subtotal, counted items only</span><strong>${money(designBuyCents)}</strong></div>

    <h3 class="design-head">Purchased by our design team (billed separately in advance)</h3>
    <ul class="team-list">
${designTeamRows()}
    </ul>
    <div class="design-subtotal"><span>Subtotal</span><strong>${money(designTeamCents)}</strong></div>
  </section>`;
}

function compareTable() {
  const row = (label, a, b, cls = '') =>
    `        <tr class="${cls}"><th scope="row">${label}</th><td class="num">${a}</td><td class="num">${b}</td></tr>`;
  return `  <div class="compare-wrap">
    <table class="compare-table">
      <thead>
        <tr><th scope="col">&nbsp;</th><th scope="col">1 Camera</th><th scope="col">2 Cameras</th></tr>
      </thead>
      <tbody>
${row('Recording equipment (core)', money(core1Cents), money(core2Cents))}
${row('Design &amp; decor items (your purchases)', money(designBuyCents), money(designBuyCents))}
${row('Your total', money(grand1Cents), money(grand2Cents), 'compare-strong')}
${row('Optional Control &amp; Storage', '+' + money(optionalCents), '+' + money(optionalCents))}
${row('Your total with optional Control &amp; Storage', money(grand1OptCents), money(grand2OptCents), 'compare-strong')}
      </tbody>
    </table>
  </div>`;
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
${cat.name === 'Camera & Video' ? secondCamCallout() : ''}
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
      <div class="stat-sub">Equipment, ${CATEGORIES.length} categories</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Recording Equipment</div>
      <div class="stat-val">${money(core1Cents)}</div>
      <div class="stat-sub">One camera</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Design &amp; Decor</div>
      <div class="stat-val">${money(designBuyCents)}</div>
      <div class="stat-sub">Your purchases</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Grand Total</div>
      <div class="stat-val">${money(grand1Cents)}</div>
      <div class="stat-sub">One camera</div>
    </div>
  </div>

${CATEGORIES.map(tableFor).join('\n\n')}

${designSection()}

  <h2 class="totals-head">Your Totals</h2>
${compareTable()}

  <div class="callout callout--billing">
    <div class="callout-title">Billed separately by ATL Podcast Pros</div>
    <ul class="callout-list">
      <li><span>Setup services: not included in the totals above. Billed separately.</span></li>
      <li><span>Design materials (paint, supplies and shelf decor): ${money(designTeamCents)}, billed separately in advance.</span></li>
    </ul>
  </div>

  <p class="small-print">Totals reflect items you purchase from the links on this page. They exclude the alternate burgundy chair, the custom wall sign (pending), setup services and design materials. Amazon and Wayfair prices are subject to change. Prices as of November 23, 2026. Taxes and shipping not included.</p>

  <div class="notes">
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
  totals: {
    coreCents, optionalCents, itemCount,
    secondCamCents, designBuyCents, designTeamCents,
    core1Cents, core2Cents, grand1Cents, grand2Cents, grand1OptCents, grand2OptCents,
  },
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

    .client-page-doc .callout { background: #FFF; border: 1px solid var(--border); border-left: 4px solid var(--crimson); padding: 18px 20px; margin-top: 14px; }
    .client-page-doc .callout-title { font-family: var(--font-head); font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--crimson); }
    .client-page-doc .callout-body { font-size: 13px; color: #444; margin-top: 8px; }
    .client-page-doc .callout-list { list-style: none; margin: 12px 0 0; padding: 0; }
    .client-page-doc .callout-list li { display: flex; justify-content: space-between; gap: 14px; font-size: 13px; padding: 6px 0; border-bottom: 1px dotted var(--border); }
    .client-page-doc .callout-list li:last-child { border-bottom: 0; }
    .client-page-doc .callout-list .num { font-variant-numeric: tabular-nums; white-space: nowrap; }
    .client-page-doc .callout-total { display: flex; justify-content: space-between; gap: 14px; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--border); font-family: var(--font-head); font-size: 13px; font-weight: 700; }
    .client-page-doc .callout-total strong { color: var(--crimson); font-variant-numeric: tabular-nums; }

    .client-page-doc .item-badge { display: inline-block; margin-left: 6px; background: var(--crimson); color: #fff; font-family: var(--font-head); font-size: 8.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: 2px 7px; border-radius: 100px; vertical-align: middle; }
    .client-page-doc .item-badge--alt { background: var(--muted); }
    .client-page-doc .not-counted { color: var(--muted); text-decoration: line-through; font-weight: 400; }

    .client-page-doc .design-sub { font-size: 13px; color: var(--muted); margin: 12px 0 4px; }
    .client-page-doc .design-head { font-family: var(--font-head); font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: var(--charcoal); margin: 20px 0 10px; }
    .client-page-doc .design-subtotal { display: flex; justify-content: flex-end; gap: 12px; align-items: baseline; margin-top: 10px; font-family: var(--font-head); font-size: 12px; letter-spacing: .04em; color: var(--muted); }
    .client-page-doc .design-subtotal strong { font-size: 15px; color: var(--charcoal); font-variant-numeric: tabular-nums; }

    .client-page-doc .team-list { list-style: none; margin: 0; padding: 0; background: #fff; border: 1px solid var(--border); }
    .client-page-doc .team-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; padding: 12px 14px; border-bottom: 1px solid var(--border); font-size: 13px; }
    .client-page-doc .team-row:last-child { border-bottom: 0; }
    .client-page-doc .team-name { font-family: var(--font-head); font-weight: 700; font-size: 13px; }
    .client-page-doc .team-row .num { font-variant-numeric: tabular-nums; white-space: nowrap; }

    .client-page-doc .totals-head { font-family: var(--font-display); font-size: 28px; margin: 34px 0 12px; letter-spacing: .01em; }
    .client-page-doc .compare-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .client-page-doc .compare-table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid var(--border); min-width: 420px; }
    .client-page-doc .compare-table thead th { font-family: var(--font-head); font-size: 10px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: #fff; background: var(--charcoal); padding: 12px 14px; text-align: right; }
    .client-page-doc .compare-table thead th:first-child { text-align: left; width: 46%; }
    .client-page-doc .compare-table tbody th { font-family: var(--font-body); font-size: 13px; font-weight: 400; text-align: left; padding: 12px 14px; border-bottom: 1px solid var(--border); color: #333; }
    .client-page-doc .compare-table tbody td { font-size: 13.5px; padding: 12px 14px; border-bottom: 1px solid var(--border); text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
    .client-page-doc .compare-table tbody tr:last-child th, .client-page-doc .compare-table tbody tr:last-child td { border-bottom: 0; }
    .client-page-doc .compare-strong th { font-family: var(--font-head); font-weight: 800; color: var(--charcoal); }
    .client-page-doc .compare-strong td { font-family: var(--font-head); font-weight: 800; font-size: 15px; color: var(--crimson); background: rgba(166,30,49,0.05); }

    .client-page-doc .small-print { font-size: 11.5px; color: var(--muted); margin-top: 12px; line-height: 1.6; }

    .client-page-doc .notes { border-top: 1px solid var(--border); padding-top: 16px; margin-top: 20px; }
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
      .client-page-doc .compare-table { min-width: 340px; }
      .client-page-doc .compare-table thead th, .client-page-doc .compare-table tbody th, .client-page-doc .compare-table tbody td { padding: 10px; }
      .client-page-doc .compare-table tbody th { font-size: 12px; }
      .client-page-doc .compare-table tbody td { font-size: 12.5px; }
      .client-page-doc .compare-strong td { font-size: 13.5px; }
      .client-page-doc .totals-head { font-size: 24px; }
      .client-page-doc .callout { padding: 16px; }
      .client-page-doc .team-row { flex-wrap: wrap; gap: 6px; }
    }
  `,
  htmlContent,
};
