export const sfaPartnersPage = {
  slug: 'sfa-partners',
  clientName: 'SFA Partners',
  password: 'sfapartners500',

  pageStyles: `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink: #1A1A1A;
      --paper: #F4F4F4;
      --accent: #213775;
      --accent-light: #E8EDF5;
      --green: #72BF44;
      --green-light: #EEF8E7;
      --gray: #CBCCCB;
      --gray-light: #F0F0F0;
      --muted: #6B6B6B;
      --border: rgba(26,26,26,0.12);
      --white: #FFFFFF;
      --font-display: 'Bebas Neue', sans-serif;
      --font-body: 'DM Sans', sans-serif;
      --font-mono: 'DM Mono', monospace;
    }

    @page { size: A4; margin: 0; }

    .client-page-doc {
      font-family: var(--font-body);
      background: var(--paper);
      color: var(--ink);
      max-width: 794px;
      margin: 0 auto;
      font-size: 13px;
      line-height: 1.6;
    }

    .client-page-doc .header {
      background: var(--ink);
      padding: 32px 48px 28px;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: end;
      gap: 24px;
    }

    .client-page-doc .header-eyebrow {
      font-family: var(--font-mono);
      font-size: 10px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: #72BF44;
      margin-bottom: 8px;
    }

    .client-page-doc .header-title {
      font-family: var(--font-display);
      font-size: 44px;
      line-height: .95;
      color: #FFFFFF;
    }

    .client-page-doc .header-title span { color: #72BF44; }

    .client-page-doc .header-meta { text-align: right; }
    .client-page-doc .header-meta .brand {
      font-family: var(--font-display);
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: .04em;
      margin-bottom: 4px;
    }
    .client-page-doc .header-meta .sub {
      font-family: var(--font-mono);
      font-size: 10px;
      color: rgba(255,255,255,.4);
      letter-spacing: .06em;
    }

    .client-page-doc .body { padding: 24px 48px 32px; }

    .client-page-doc .stat-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }

    .client-page-doc .stat-cell {
      background: var(--white);
      border: 0.5px solid var(--border);
      border-radius: 6px;
      padding: 10px 12px;
    }

    .client-page-doc .stat-label {
      font-family: var(--font-mono);
      font-size: 9px;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 4px;
    }

    .client-page-doc .stat-val {
      font-family: var(--font-display);
      font-size: 26px;
      line-height: 1;
      color: var(--accent);
    }

    .client-page-doc .stat-sub {
      font-size: 10px;
      color: var(--muted);
      margin-top: 2px;
    }

    .client-page-doc .photo-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      margin-bottom: 16px;
    }

    .client-page-doc .photo-wrap {
      border-radius: 6px;
      overflow: hidden;
      border: 0.5px solid var(--border);
    }

    .client-page-doc .photo-wrap img {
      width: 100%;
      height: 155px;
      object-fit: cover;
      display: block;
    }

    .client-page-doc .photo-cap {
      font-family: var(--font-mono);
      font-size: 9px;
      letter-spacing: .07em;
      text-transform: uppercase;
      color: var(--muted);
      padding: 6px 8px;
      background: var(--white);
      text-align: center;
      border-top: 0.5px solid var(--border);
    }

    .client-page-doc .section-card {
      background: var(--white);
      border: 0.5px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 14px;
    }

    .client-page-doc .card-header {
      padding: 9px 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 0.5px solid var(--border);
    }

    .client-page-doc .card-header.blue   { background: var(--accent-light); }
    .client-page-doc .card-header.green  { background: var(--green-light); }
    .client-page-doc .card-header.dark   { background: var(--ink); }
    .client-page-doc .card-header.gray   { background: var(--gray-light); }
    .client-page-doc .card-header.warm   { background: #FDF6EE; }

    .client-page-doc .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
    .client-page-doc .dot-blue  { background: var(--accent); }
    .client-page-doc .dot-green { background: var(--green); }
    .client-page-doc .dot-white { background: #FFFFFF; }
    .client-page-doc .dot-gray  { background: var(--muted); }
    .client-page-doc .dot-warm  { background: #C9A84C; }

    .client-page-doc .card-label {
      font-family: var(--font-mono);
      font-size: 9.5px;
      letter-spacing: .12em;
      text-transform: uppercase;
      font-weight: 500;
    }
    .client-page-doc .label-blue  { color: var(--accent); }
    .client-page-doc .label-green { color: #3a8a1a; }
    .client-page-doc .label-white { color: rgba(255,255,255,.8); }
    .client-page-doc .label-gray  { color: var(--muted); }
    .client-page-doc .label-warm  { color: #8a6a1a; }

    .client-page-doc .card-body { padding: 12px 16px; }

    .client-page-doc .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 14px;
    }

    .client-page-doc .blist {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .client-page-doc .blist li {
      font-size: 12px;
      line-height: 1.45;
      color: #2a2a28;
      padding-left: 13px;
      position: relative;
    }

    .client-page-doc .blist li::before {
      content: '';
      position: absolute;
      left: 0; top: 6px;
      width: 5px; height: 5px;
      border-radius: 50%;
    }

    .client-page-doc .blue-bullets  li::before { background: var(--accent); }
    .client-page-doc .green-bullets li::before { background: var(--green); }
    .client-page-doc .gray-bullets  li::before { background: var(--muted); }
    .client-page-doc .warm-bullets  li::before { background: #C9A84C; }

    .client-page-doc .swatch-row { display: flex; gap: 12px; align-items: flex-start; }

    .client-page-doc .swatch-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      flex: 1;
    }

    .client-page-doc .swatch {
      width: 100%;
      height: 52px;
      border-radius: 5px;
      border: 0.5px solid rgba(0,0,0,0.1);
    }

    .client-page-doc .swatch-name {
      font-family: var(--font-mono);
      font-size: 9px;
      letter-spacing: .07em;
      text-transform: uppercase;
      color: var(--muted);
      text-align: center;
    }

    .client-page-doc .swatch-hex {
      font-family: var(--font-mono);
      font-size: 10px;
      color: var(--ink);
      font-weight: 500;
      text-align: center;
    }

    .client-page-doc .callout {
      border-left: 3px solid var(--accent);
      background: var(--accent-light);
      border-radius: 0 6px 6px 0;
      padding: 10px 14px;
      margin-bottom: 14px;
    }

    .client-page-doc .callout-title {
      font-family: var(--font-mono);
      font-size: 9.5px;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 4px;
    }

    .client-page-doc .callout-body {
      font-size: 12px;
      color: #2a2a28;
      line-height: 1.6;
      font-style: italic;
    }

    .client-page-doc .step-list { display: flex; flex-direction: column; gap: 8px; }
    .client-page-doc .step { display: flex; gap: 10px; align-items: flex-start; }
    .client-page-doc .step-num {
      font-family: var(--font-display);
      font-size: 18px;
      color: var(--accent);
      line-height: 1.1;
      flex-shrink: 0;
      width: 20px;
    }
    .client-page-doc .step-text { font-size: 12px; color: #2a2a28; line-height: 1.5; padding-top: 1px; }
    .client-page-doc .step-text strong { font-weight: 500; display: block; color: var(--ink); font-size: 12px; }

    .client-page-doc .footer {
      border-top: 0.5px solid var(--border);
      padding: 12px 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .client-page-doc .footer-brand {
      font-family: var(--font-mono);
      font-size: 9px;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .client-page-doc .footer-note {
      font-size: 9px;
      color: rgba(26,26,26,.3);
    }

    @media (max-width: 860px) {
      .client-page-doc .body { padding: 20px 24px 28px; }
      .client-page-doc .header { padding: 24px 24px 20px; }
      .client-page-doc .stat-row { grid-template-columns: repeat(2, 1fr); }
      .client-page-doc .two-col { grid-template-columns: 1fr; }
      .client-page-doc .photo-row { grid-template-columns: 1fr; }
      .client-page-doc .footer { flex-direction: column; gap: 6px; padding: 12px 24px; text-align: center; }
    }
  `,

  htmlContent: `
<div class="header">
  <div>
    <div class="header-eyebrow">Interior Design Brief — Podcast Studio</div>
    <div class="header-title">SFA <span>Partners</span></div>
  </div>
  <div class="header-meta">
    <div class="brand">ATL PODCAST PROS</div>
    <div class="sub">Prepared for Interior Designer &nbsp;|&nbsp; Confidential</div>
  </div>
</div>

<div class="body">

  <div class="stat-row">
    <div class="stat-cell">
      <div class="stat-label">Room Width</div>
      <div class="stat-val">12 ft</div>
      <div class="stat-sub">144 inches</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Room Length</div>
      <div class="stat-val">13.3 ft</div>
      <div class="stat-sub">160 inches</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Ceiling Height</div>
      <div class="stat-val">8.8 ft</div>
      <div class="stat-sub">106 inches</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Studio Format</div>
      <div class="stat-val">2 Host</div>
      <div class="stat-sub">+ occasional remote caller</div>
    </div>
  </div>

  <div class="callout">
    <div class="callout-title">Client Vision</div>
    <div class="callout-body">"Wants it to look like CNBC" — a high-value, credible, broadcast-quality aesthetic without being over-designed. The space serves a financial advisory firm (SFA Partners) whose audience is other financial advisors. The look should communicate expertise, authority, and professionalism. Clean, warm, and polished.</div>
  </div>

  <div class="section-card">
    <div class="card-header dark">
      <div class="dot dot-white"></div>
      <div class="card-label label-white">SFA Partners Brand Colors — These should inform all design decisions</div>
    </div>
    <div class="card-body">
      <div class="swatch-row">
        <div class="swatch-item">
          <div class="swatch" style="background:#213775;"></div>
          <div class="swatch-hex">#213775</div>
          <div class="swatch-name">Navy Blue — Primary</div>
        </div>
        <div class="swatch-item">
          <div class="swatch" style="background:#72BF44;"></div>
          <div class="swatch-hex">#72BF44</div>
          <div class="swatch-name">Green — Secondary</div>
        </div>
        <div class="swatch-item">
          <div class="swatch" style="background:#CBCCCB; border:0.5px solid #ccc;"></div>
          <div class="swatch-hex">#CBCCCB</div>
          <div class="swatch-name">Warm Gray — Accent</div>
        </div>
        <div class="swatch-item">
          <div class="swatch" style="background:linear-gradient(135deg,#213775 50%,#72BF44 50%);"></div>
          <div class="swatch-hex">Primary Pairing</div>
          <div class="swatch-name">Navy + Green Together</div>
        </div>
      </div>
      <p style="font-size:11px;color:#6B6B6B;margin-top:10px;line-height:1.5;">Navy (#213775) is confirmed for the window drape color. Both navy and green should be referenced for any branded accents, textiles, and ambient color elements throughout the space.</p>
    </div>
  </div>

  <div class="two-col">
    <div class="section-card">
      <div class="card-header blue">
        <div class="dot dot-blue"></div>
        <div class="card-label label-blue">About the Space</div>
      </div>
      <div class="card-body">
        <ul class="blist blue-bullets">
          <li>Small corner office in a commercial office building — two exterior-facing walls visible in photos</li>
          <li>Dark charcoal carpet throughout — neutral base that pairs well with warm tones</li>
          <li>White walls — clean canvas for any treatment, panels, or textured finish</li>
          <li>Large window on the left wall, currently fitted with horizontal blinds</li>
          <li>Drop ceiling with standard 2x2 tiles</li>
          <li>SFA Partners logo sign on the primary back wall — this sign will be removed and replaced with a mounted TV of approximately the same size (roughly 4 ft x 3 ft)</li>
          <li>All existing furniture, plants, and decor will be fully removed before install — complete blank canvas</li>
        </ul>
      </div>
    </div>

    <div class="section-card">
      <div class="card-header green">
        <div class="dot dot-green"></div>
        <div class="card-label label-green">Client Direction and Preferences</div>
      </div>
      <div class="card-body">
        <ul class="blist green-bullets">
          <li>Warm overall lighting chosen for the look and feel of the set</li>
          <li>Controllable RGB accent lighting — client wants branded color lighting including floor lights and LED strips to reflect navy and green</li>
          <li>Guests seated at a circular table — conversational arrangement but also angled to face camera</li>
          <li>No curtains — prefers floor-length retractable drapes in brand navy (#213775)</li>
          <li>TV to appear visually integrated and flush into the backdrop wall — not a screen sitting on a wall</li>
          <li>Back wall to be treated with sound panels or decorative wood slat panels (trending wall slats) to frame the TV and create a polished on-camera backdrop</li>
          <li>Branded square mic covers with company logo — microphones will be on table boom arms</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section-card">
    <div class="card-header blue">
      <div class="dot dot-blue"></div>
      <div class="card-label label-blue">Primary Backdrop Wall — Key Design Challenge</div>
    </div>
    <div class="card-body">
      <div class="step-list">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-text">
            <strong>This is the on-camera wall — it is what viewers see behind both hosts during every recording</strong>
            Currently holds the SFA Partners logo sign (approx 4 ft x 3 ft). Sign will be removed. A TV of similar size will be mounted in its place.
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-text">
            <strong>TV must feel intentional and integrated, not an afterthought</strong>
            Client wants the screen to appear flush and designed-in. The surrounding wall treatment should frame it as part of the set. Sound panels or decorative wood slat panels are suggested as a starting direction.
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-text">
            <strong>TV display use cases to consider in the design</strong>
            Company logo (default), stock market and financial data graphics, PowerPoint presentations, and remote caller video. The screen will be live and dynamic during recordings — the surrounding design should complement an active, glowing display.
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-text">
            <strong>Designer recommendation needed</strong>
            Please provide panel material, finish, color, and layout recommendations. Consider how brand colors, warm tones, and RGB accent lighting can work with the wall treatment to create visual depth on camera.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="two-col">
    <div class="section-card">
      <div class="card-header warm">
        <div class="dot dot-warm"></div>
        <div class="card-label label-warm">Seating and Furniture Direction</div>
      </div>
      <div class="card-body">
        <ul class="blist warm-bullets">
          <li>Two host chairs and one circular table — all new, to be sourced by designer</li>
          <li>Circular table confirmed — size appropriate for two hosts seated with mic boom arms clamped to the table edge</li>
          <li>Seating arrangement: hosts angled toward each other at the table but both positioned to face camera</li>
          <li>Chair style should be clean-lined, professional, and camera-ready — avoid overly casual or heavily upholstered styles</li>
          <li>Materials and finishes should complement brand colors and the warm lighting direction</li>
          <li>Consider how chairs and table read on camera against the backdrop wall</li>
        </ul>
      </div>
    </div>

    <div class="section-card">
      <div class="card-header gray">
        <div class="dot dot-gray"></div>
        <div class="card-label label-gray">Designer Deliverables Requested</div>
      </div>
      <div class="card-body">
        <ul class="blist gray-bullets">
          <li>Furniture recommendations: 2 host chairs and a circular table (boom-arm clamp compatible edge)</li>
          <li>Backdrop wall treatment concept: panel material, finish, color, and layout around the TV</li>
          <li>Window drape recommendation: floor-length, retractable, color-matched to navy #213775</li>
          <li>Overall mood board or concept direction aligned with a warm, CNBC-inspired aesthetic</li>
          <li>Color and material palette that complements brand colors, warm lighting, and RGB accent capability</li>
          <li>Any additional decor, styling, or prop recommendations for a polished on-camera environment</li>
        </ul>
      </div>
    </div>
  </div>

</div>

<div class="footer">
  <div class="footer-brand">ATL Podcast Pros / SFA Partners Studio Design Brief</div>
  <div class="footer-note">Prepared by Ben Paul | atlpodcastpros.com | (855) 529-1404 | Confidential</div>
</div>
  `,
};
