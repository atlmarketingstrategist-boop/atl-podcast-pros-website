export const missionFieldPage = {
  slug: 'mission-field',
  clientName: 'Mission Field',
  password: 'missionfield81',

  pageStyles: `
    .client-page-doc *, .client-page-doc *::before, .client-page-doc *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .client-page-doc {
      --red: #A61E31;
      --red-warm: #C73248;
      --red-light: #F5E6E8;
      --ink: #1A1A1A;
      --paper: #F4F4F4;
      --white: #FFFFFF;
      --muted: #6B6B6B;
      --border: rgba(26,26,26,0.1);
      --cat-video: #213775;
      --cat-lighting: #A67C00;
      --cat-audio: #7B3FA0;
      --cat-misc: #333333;
      --font-display: 'Bebas Neue', sans-serif;
      --font-body: 'DM Sans', sans-serif;
      --font-mono: 'DM Mono', monospace;
      font-family: var(--font-body); background: var(--paper); color: var(--ink); max-width: 900px; margin: 0 auto; padding: 0 0 60px;
    }

    /* HEADER */
    .client-page-doc .header { background: var(--ink); padding: 32px 48px 28px; display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 24px; }
    .client-page-doc .header-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--red-warm); margin-bottom: 8px; }
    .client-page-doc .header-title { font-family: var(--font-display); font-size: 52px; line-height: .95; color: var(--white); }
    .client-page-doc .header-title span { color: var(--red-warm); }
    .client-page-doc .header-meta { text-align: right; }
    .client-page-doc .header-meta .brand { font-family: var(--font-display); font-size: 20px; color: var(--white); letter-spacing: .04em; margin-bottom: 4px; }
    .client-page-doc .header-meta .tagline { font-family: var(--font-mono); font-size: 10px; color: rgba(255,255,255,.4); letter-spacing: .06em; }

    /* NOTICE BAR */
    .client-page-doc .notice-bar { background: var(--red); padding: 10px 48px; display: flex; align-items: center; gap: 10px; }
    .client-page-doc .notice-dot { width: 7px; height: 7px; border-radius: 50%; background: #4caf50; flex-shrink: 0; }
    .client-page-doc .notice-bar p { font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: rgba(255,255,255,.85); }

    /* BODY */
    .client-page-doc .body { padding: 28px 48px 0; }

    /* STAT ROW */
    .client-page-doc .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
    .client-page-doc .stat-cell { border: 0.5px solid var(--border); border-radius: 6px; padding: 12px 14px; background: var(--white); }
    .client-page-doc .stat-label { font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); margin-bottom: 5px; }
    .client-page-doc .stat-val { font-family: var(--font-display); font-size: 26px; line-height: 1; color: var(--red); }
    .client-page-doc .stat-sub { font-size: 10px; color: var(--muted); margin-top: 2px; }

    /* CALLOUT */
    .client-page-doc .callout { border-left: 3px solid var(--red); background: var(--red-light); border-radius: 0 6px 6px 0; padding: 12px 16px; margin-bottom: 20px; }
    .client-page-doc .callout-title { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--red); font-weight: 500; margin-bottom: 5px; }
    .client-page-doc .callout-body { font-size: 12px; color: #3a1a1e; line-height: 1.6; }
    .client-page-doc .callout-body strong { color: var(--red); font-weight: 600; }

    /* DESIGN CALLOUT */
    .client-page-doc .design-callout { border-left: 3px solid var(--cat-video); background: #E8EDF5; border-radius: 0 6px 6px 0; padding: 12px 16px; margin-bottom: 20px; }
    .client-page-doc .design-callout .callout-title { color: var(--cat-video); }
    .client-page-doc .design-callout .callout-body { color: #0d1e3a; }
    .client-page-doc .design-callout .callout-body strong { color: var(--cat-video); }

    /* TABLE */
    .client-page-doc .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .client-page-doc .gear-table { width: 100%; border-collapse: collapse; margin-bottom: 6px; border-radius: 8px; overflow: hidden; border: 0.5px solid var(--border); }
    .client-page-doc .gear-table thead tr { background: var(--ink); }
    .client-page-doc .gear-table thead th { padding: 10px 14px; font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.7); text-align: left; font-weight: 500; }
    .client-page-doc .gear-table thead th:nth-child(3), .client-page-doc .gear-table thead th:nth-child(4) { text-align: right; }
    .client-page-doc .gear-table thead th:last-child { text-align: center; }

    .client-page-doc .gear-table tbody .cat-row td { padding: 7px 14px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: #FFFFFF; font-weight: 700; }
    .client-page-doc .cat-video td { background: #213775; color: #FFFFFF; }
    .client-page-doc .cat-lighting td { background: #A67C00; color: #FFFFFF; }
    .client-page-doc .cat-audio td { background: #7B3FA0; color: #FFFFFF; }
    .client-page-doc .cat-acoustic td { background: #555555; color: #FFFFFF; }
    .client-page-doc .cat-misc td { background: #333333; color: #FFFFFF; }

    .client-page-doc .gear-table tbody tr:nth-child(odd):not(.cat-row) { background: var(--white); }
    .client-page-doc .gear-table tbody tr:nth-child(even):not(.cat-row) { background: #FAFAFA; }
    .client-page-doc .gear-table tbody td { padding: 10px 14px; font-size: 12px; color: var(--ink); border-bottom: 0.5px solid var(--border); vertical-align: top; }
    .client-page-doc .gear-table tbody td:nth-child(3), .client-page-doc .gear-table tbody td:nth-child(4) { text-align: right; white-space: nowrap; }
    .client-page-doc .gear-table tbody td:last-child { text-align: center; }

    .client-page-doc .item-name { font-weight: 500; font-size: 12px; color: var(--ink); line-height: 1.3; }
    .client-page-doc .item-desc { font-size: 11px; color: var(--muted); line-height: 1.4; margin-top: 2px; }

    /* BUTTON */
    .client-page-doc .btn-amazon { display: inline-block; background: var(--red); color: var(--white); font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; text-transform: uppercase; padding: 6px 10px; border-radius: 3px; text-decoration: none; white-space: nowrap; }
    .client-page-doc .btn-amazon:hover { background: var(--red-warm); }

    /* TOTALS */
    .client-page-doc .totals-block { display: flex; justify-content: flex-end; margin: 16px 0 0; }
    .client-page-doc .totals-inner { width: 340px; }
    .client-page-doc .totals-row { display: flex; justify-content: space-between; padding: 5px 0; font-size: 13px; color: var(--muted); border-bottom: 0.5px solid var(--border); }
    .client-page-doc .totals-row:last-of-type { border-bottom: none; }
    .client-page-doc .totals-row span:last-child { font-weight: 500; color: var(--ink); }
    .client-page-doc .totals-grand { background: var(--ink); border-radius: 6px; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }
    .client-page-doc .totals-grand-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.6); }
    .client-page-doc .totals-grand-val { font-family: var(--font-display); font-size: 28px; color: var(--red); line-height: 1; }

    /* FOOTER */
    .client-page-doc .footer { background: var(--ink); padding: 20px 48px; display: flex; justify-content: space-between; align-items: center; margin-top: 40px; }
    .client-page-doc .footer-brand { font-family: var(--font-display); font-size: 18px; color: var(--white); letter-spacing: .04em; }
    .client-page-doc .footer-contact { font-family: var(--font-mono); font-size: 10px; color: rgba(255,255,255,.4); letter-spacing: .08em; }

    @media (max-width: 680px) {
      .client-page-doc .header, .client-page-doc .body, .client-page-doc .notice-bar, .client-page-doc .footer { padding-left: 20px; padding-right: 20px; }
      .client-page-doc .stat-row { grid-template-columns: repeat(2, 1fr); }
      .client-page-doc .header { grid-template-columns: 1fr; }
      .client-page-doc .header-meta { text-align: left; }
    }
  `,

  htmlContent: `
<!-- HEADER -->
<div class="header">
  <div>
    <div class="header-eyebrow">Client Equipment List</div>
    <div class="header-title">Mission<br><span>Field</span></div>
  </div>
  <div class="header-meta">
    <div class="brand">ATL PODCAST PROS</div>
    <div class="tagline">atlpodcastpros.com</div>
  </div>
</div>

<!-- NOTICE BAR -->
<div class="notice-bar">
  <div class="notice-dot"></div>
  <p>All items link directly to Amazon for easy ordering. Prices are estimates and may vary. Some items are optional. Affiliate links impose no added cost to you.</p>
</div>

<!-- BODY -->
<div class="body">

  <!-- STAT ROW -->
  <div class="stat-row" style="margin-top:24px;">
    <div class="stat-cell">
      <div class="stat-label">Setup Type</div>
      <div class="stat-val" style="font-size:20px;padding-top:3px;">1 Cam</div>
      <div class="stat-sub">Meetings + Livestreams</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Total Items</div>
      <div class="stat-val">31</div>
      <div class="stat-sub">Across 5 categories</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Est. Subtotal</div>
      <div class="stat-val" style="font-size:20px;padding-top:3px;">$5,473</div>
      <div class="stat-sub">Before tax</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Est. Total</div>
      <div class="stat-val" style="font-size:20px;padding-top:3px;">$5,801</div>
      <div class="stat-sub">Includes 6% tax</div>
    </div>
  </div>

  <!-- HOW TO ORDER CALLOUT -->
  <div class="callout">
    <div class="callout-title">How to Order</div>
    <div class="callout-body">Click <strong>View on Amazon</strong> on each item to order directly. Once your equipment is ordered and delivery is confirmed, contact ATL Podcast Pros to schedule your installation date. Do not schedule installation before all items have shipped.</div>
  </div>

  <!-- DESIGN SERVICE CALLOUT -->
  <div class="design-callout">
    <div class="callout-title">Optional (Recommended): Studio Design Service</div>
    <div class="callout-body">ATL Podcast Pros offers an optional <strong>Studio Design Service ($500 design fee)</strong> in which our designer will select decor and background materials to enhance your on-camera visual. Total design costs include the $500 design fee plus a <strong>design budget determined by the client</strong>. Ask your ATL Podcast Pros contact to add on this service and provide a budget for materials.</div>
  </div>

  <!-- GEAR TABLE -->
  <div class="table-scroll">
  <table class="gear-table">
    <thead>
      <tr>
        <th style="width:42%;">Item / Description</th>
        <th style="width:6%;text-align:center;">Qty</th>
        <th style="width:12%;">Unit Price</th>
        <th style="width:12%;">Total</th>
        <th style="width:28%;">Purchase</th>
      </tr>
    </thead>
    <tbody>

      <!-- VIDEO -->
      <tr class="cat-row cat-video"><td colspan="5">Video</td></tr>

      <tr>
        <td><div class="item-name">Sony ZV-E10 II Mirrorless Camera (Body Only)</div><div class="item-desc">Super 35 mirrorless camera. Crisp 4K image quality for meetings and livestreams.</div></td>
        <td style="text-align:center;">1</td>
        <td>$999.00</td>
        <td>$999.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CJXWF2YX?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Sigma 16mm f/1.4 DC DN Contemporary Lens (Sony E)</div><div class="item-desc">Wide angle lens. Ideal for single-person desk and meeting room framing.</div></td>
        <td style="text-align:center;">1</td>
        <td>$489.00</td>
        <td>$489.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B01C3SCKI6?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">NP-FW50 Dummy Battery / AC Adapter (ZV-E10 II Compatible)</div><div class="item-desc">Continuous AC power. Eliminates battery swaps during long sessions.</div></td>
        <td style="text-align:center;">1</td>
        <td>$26.89</td>
        <td>$26.89</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0BKG2KG9H?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">IFOOTAGE A400 Round Base Monopod 79"</div><div class="item-desc">Heavy-duty flat-base monopod for camera. Tip-resistant 5mm aluminum chassis. 22lb payload. Space-saving for tight studio setups.</div></td>
        <td style="text-align:center;">1</td>
        <td>$119.99</td>
        <td>$119.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0FRFKYCT4?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Elgato Prompter — Teleprompter with Built-in Screen</div><div class="item-desc">Built-in 9" display for scripts and chat. Mounts in front of the camera so talent maintains natural eye contact with the lens.</div></td>
        <td style="text-align:center;">1</td>
        <td>$229.00</td>
        <td>$229.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CH3P9K1X?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Micro HDMI to HDMI Cable (Coiled, 8K) — Sony ZV-E10 II Output</div><div class="item-desc">Connects the ZV-E10 II Micro HDMI (Type D) port to the RODECaster Video. Coiled cable keeps the run tidy and strain-free off the camera body.</div></td>
        <td style="text-align:center;">1</td>
        <td>$18.99</td>
        <td>$18.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/s?k=micro+hdmi+to+hdmi+cable+sony+ZV-E10+II+8K&tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">RODECaster Video All-in-One Production Console</div><div class="item-desc">Multi-camera production switcher and recording hub. One-touch control for meetings, livestreams, and recordings.</div></td>
        <td style="text-align:center;">1</td>
        <td>$934.95</td>
        <td>$934.95</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0DP7SCRYB?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">LG 27" Full HD IPS Confidence Monitor</div><div class="item-desc">Operator confidence monitor for teleprompter text, speaker notes, and live preview.</div></td>
        <td style="text-align:center;">1</td>
        <td>$104.00</td>
        <td>$104.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B09Q31ZPY8?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Perlegear Floor TV Stand for 26-50" TVs</div><div class="item-desc">Floor stand for the confidence monitor. No wall mount required.</div></td>
        <td style="text-align:center;">1</td>
        <td>$32.99</td>
        <td>$32.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CYCLWVGX?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">8K HDMI Cable 20ft Braided (48Gbps)</div><div class="item-desc">High-speed HDMI for cameras, switcher, monitor, and display connections.</div></td>
        <td style="text-align:center;">1</td>
        <td>$18.99</td>
        <td>$18.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0BZVXDXKG?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

      <!-- LIGHTING -->
      <tr class="cat-row cat-lighting"><td colspan="5">Lighting</td></tr>

      <tr>
        <td><div class="item-name">Amaran 100dS LED Video Light (Key Light)</div><div class="item-desc">Professional 100W daylight key light. Bowens mount. App controlled. CRI 96+.</div></td>
        <td style="text-align:center;">2</td>
        <td>$157.01</td>
        <td>$314.02</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0BSLD7SLS?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">NEEWER 35"/90cm Octagonal Softbox with Honeycomb Grid (Bowens Mount)</div><div class="item-desc">Professional grid softbox for the Amaran 100dS key lights. Includes honeycomb grid and dual diffusers. Directs and shapes light for clean, flattering on-camera illumination.</div></td>
        <td style="text-align:center;">2</td>
        <td>$49.99</td>
        <td>$99.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CC1M41T5?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Impact Deluxe Varipole Support System (Black Pair)</div><div class="item-desc">Floor-to-ceiling tension poles for mounting lights without wall holes or drilling.</div></td>
        <td style="text-align:center;">2</td>
        <td>$215.60</td>
        <td>$431.20</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B008OM1FZU?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">NEEWER 2 Pack Super Clamps with 5/8" Stud</div><div class="item-desc">Heavy-duty clamps for attaching lights and accessories to varipoles.</div></td>
        <td style="text-align:center;">1</td>
        <td>$48.89</td>
        <td>$48.89</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CJLNH31B?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">GVM RGB LED Panels 800D App Control (2-Pack)</div><div class="item-desc">App-controlled RGB accent panels for branded color ambiance on camera.</div></td>
        <td style="text-align:center;">1</td>
        <td>$189.00</td>
        <td>$189.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/s?k=GVM+800D+RGB+LED+Panel+Video+Light+2+Pack&tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Stage Wash Light Bar 40" 96W RGBA 24LED DMX</div><div class="item-desc">DMX-controlled floor wash lights for color, atmosphere, and branded ambient lighting.</div></td>
        <td style="text-align:center;">2</td>
        <td>$79.99</td>
        <td>$159.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/s?k=Stage+Wash+Light+Bar+40+inch+96W+RGBA+DMX+24LED&tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Enttec DMX USB Pro (DMX to USB Interface)</div><div class="item-desc">Professional DMX controller interface. Connects DMX lighting stack to your computer.</div></td>
        <td style="text-align:center;">1</td>
        <td>$109.00</td>
        <td>$109.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/s?k=Enttec+DMX+USB+Pro+Interface&tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">DMX Cables 4-Pack</div><div class="item-desc">Cables to connect the DMX light stack.</div></td>
        <td style="text-align:center;">1</td>
        <td>$24.99</td>
        <td>$24.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/s?k=DMX+cables+4+pack+XLR+3+pin&tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">DMX Terminator</div><div class="item-desc">Prevents signal reflection in the DMX chain. Required for a clean DMX setup.</div></td>
        <td style="text-align:center;">1</td>
        <td>$12.99</td>
        <td>$12.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/s?k=DMX+terminator+3+pin&tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">5-Pin to 3-Pin DMX Adapter</div><div class="item-desc">Adapter for connecting 5-pin and 3-pin DMX fixtures in the same chain.</div></td>
        <td style="text-align:center;">1</td>
        <td>$9.99</td>
        <td>$9.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/s?k=5+pin+to+3+pin+DMX+adapter&tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Elgato Stream Deck XL (32 Keys)</div><div class="item-desc">One-touch scene control for lights, camera switching, muting, and going live.</div></td>
        <td style="text-align:center;">1</td>
        <td>$249.99</td>
        <td>$249.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B09738CV2G?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">TP-Link Tapo Smart Plugs (4-Pack)</div><div class="item-desc">Smart plugs for Stream Deck control of lighting circuits.</div></td>
        <td style="text-align:center;">1</td>
        <td>$21.99</td>
        <td>$21.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0836HL66P?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

      <!-- AUDIO -->
      <tr class="cat-row cat-audio"><td colspan="5">Audio</td></tr>

      <tr>
        <td><div class="item-name">Sennheiser MKE 600 Shotgun Microphone Bundle</div><div class="item-desc">Professional boom/shotgun mic with universal shockmount, 20ft XLR cable, and microfiber cloth. Positioned out of frame for clean on-camera look. Includes foam windshield.</div></td>
        <td style="text-align:center;">1</td>
        <td>$349.00</td>
        <td>$349.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CSM45KBZ?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">InnoGear Tripod Boom Arm Floor Mic Stand</div><div class="item-desc">Heavy-base floor stand with adjustable boom arm for positioning the MKE 600 shotgun mic overhead and out of frame.</div></td>
        <td style="text-align:center;">1</td>
        <td>$24.99</td>
        <td>$24.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B07GLGJJB8?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">XLR Cable 15ft (Monoprice 16AWG Gold)</div><div class="item-desc">XLR run from microphone to RODECaster Video.</div></td>
        <td style="text-align:center;">1</td>
        <td>$17.91</td>
        <td>$17.91</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0031OJ0U2?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

      <!-- ACOUSTIC -->
      <tr class="cat-row cat-acoustic"><td colspan="5">Acoustic</td></tr>

      <tr>
        <td><div class="item-name">AudioSilk Acoustic Panels 4-Pack Large 46"x23" Mid Grey</div><div class="item-desc">Studio-grade acoustic treatment panels. NRC 0.91. Reduces echo and room noise for cleaner audio on meetings and livestreams.</div></td>
        <td style="text-align:center;">2</td>
        <td>$139.99</td>
        <td>$279.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0BQRVXMDX?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

      <!-- MISC -->
      <tr class="cat-row cat-misc"><td colspan="5">Misc</td></tr>

      <tr>
        <td><div class="item-name">Paintable Cable Raceway Kit 26ft</div><div class="item-desc">Wall-mount raceway for concealing HDMI and power cable runs cleanly.</div></td>
        <td style="text-align:center;">1</td>
        <td>$22.99</td>
        <td>$22.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B07M9VLH4J?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">D-Line Floor Cord Cover 6ft (Black)</div><div class="item-desc">Protects and hides floor-run cables cleanly and safely.</div></td>
        <td style="text-align:center;">4</td>
        <td>$15.95</td>
        <td>$63.80</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0078NU4C6?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Cable Ties 60-Pack Reusable</div><div class="item-desc">Cable management and organization throughout the studio.</div></td>
        <td style="text-align:center;">1</td>
        <td>$6.63</td>
        <td>$6.63</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B07MFGWHVF?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Surge Protector 10ft Power Strip (5 Outlets 3 USB)</div><div class="item-desc">Heavy-duty surge-protected power strip for lights and equipment.</div></td>
        <td style="text-align:center;">2</td>
        <td>$22.99</td>
        <td>$45.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0B16YFTQ4?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Surge Protector 15ft (6 AC + 3 USB-C)</div><div class="item-desc">Additional surge-protected power strip for desk equipment.</div></td>
        <td style="text-align:center;">1</td>
        <td>$15.99</td>
        <td>$15.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B09V4CXRQR?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

    </tbody>
  </table>
  </div>

  <!-- TOTALS -->
  <div class="totals-block">
    <div class="totals-inner">
      <div class="totals-row"><span>Subtotal</span><span>$5,473.09</span></div>
      <div class="totals-row"><span>Shipping</span><span>TBD</span></div>
      <div class="totals-row"><span>Est. Tax (6%)</span><span>$328.39</span></div>
      <div class="totals-grand">
        <div class="totals-grand-label">Estimated Total</div>
        <div class="totals-grand-val">$5,801.48</div>
      </div>
    </div>
  </div>

</div>

<!-- FOOTER -->
<div class="footer">
  <div class="footer-brand">ATL PODCAST PROS</div>
  <div class="footer-contact">atlpodcastpros.com &nbsp;|&nbsp; (855) 529-1404 &nbsp;|&nbsp; info@atlpodcastpros.com</div>
</div>
`
};
