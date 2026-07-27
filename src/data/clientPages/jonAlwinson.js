export const jonAlwinsonPage = {
  slug: 'jon-alwinson',
  clientName: 'Jon Alwinson',
  password: 'jonalwinson81',

  pageStyles: `
    .client-page-doc *, .client-page-doc *::before, .client-page-doc *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .client-page-doc {
      --accent: #0D2045;
      --accent-warm: #1A3A6E;
      --accent-light: #E8EDF5;
      --gold: #B8962E;
      --gold-light: #FDF4DC;
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
    .client-page-doc .header { background: var(--accent); padding: 32px 48px 28px; display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 24px; }
    .client-page-doc .header-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
    .client-page-doc .header-title { font-family: var(--font-display); font-size: 52px; line-height: .95; color: var(--white); }
    .client-page-doc .header-title span { color: var(--gold); }
    .client-page-doc .header-meta { text-align: right; }
    .client-page-doc .header-meta .brand { font-family: var(--font-display); font-size: 20px; color: var(--white); letter-spacing: .04em; margin-bottom: 4px; }
    .client-page-doc .header-meta .tagline { font-family: var(--font-mono); font-size: 10px; color: rgba(255,255,255,.4); letter-spacing: .06em; }

    /* NOTICE BAR */
    .client-page-doc .notice-bar { background: var(--gold); padding: 10px 48px; display: flex; align-items: center; gap: 10px; }
    .client-page-doc .notice-dot { width: 7px; height: 7px; border-radius: 50%; background: #4caf50; flex-shrink: 0; }
    .client-page-doc .notice-bar p { font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: rgba(13,32,69,0.9); }

    /* BODY */
    .client-page-doc .body { padding: 28px 48px 0; }

    /* STAT ROW */
    .client-page-doc .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
    .client-page-doc .stat-cell { border: 0.5px solid var(--border); border-radius: 6px; padding: 12px 14px; background: var(--white); }
    .client-page-doc .stat-label { font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); margin-bottom: 5px; }
    .client-page-doc .stat-val { font-family: var(--font-display); font-size: 26px; line-height: 1; color: var(--accent); }
    .client-page-doc .stat-sub { font-size: 10px; color: var(--muted); margin-top: 2px; }

    /* CALLOUT */
    .client-page-doc .callout { border-left: 3px solid var(--accent); background: var(--accent-light); border-radius: 0 6px 6px 0; padding: 12px 16px; margin-bottom: 20px; }
    .client-page-doc .callout-title { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); font-weight: 500; margin-bottom: 5px; }
    .client-page-doc .callout-body { font-size: 12px; color: #0a1a35; line-height: 1.6; }
    .client-page-doc .callout-body strong { color: var(--accent); font-weight: 600; }

    /* OWNED ITEM CALLOUT */
    .client-page-doc .owned-callout { border-left: 3px solid var(--gold); background: var(--gold-light); border-radius: 0 6px 6px 0; padding: 12px 16px; margin-bottom: 20px; }
    .client-page-doc .owned-callout .callout-title { color: var(--gold); }
    .client-page-doc .owned-callout .callout-body { color: #5a4a00; }

    /* TABLE */
    .client-page-doc .gear-table { width: 100%; border-collapse: collapse; margin-bottom: 6px; border-radius: 8px; overflow: hidden; border: 0.5px solid var(--border); }
    .client-page-doc .gear-table thead tr { background: var(--accent); }
    .client-page-doc .gear-table thead th { padding: 10px 14px; font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.7); text-align: left; font-weight: 500; }
    .client-page-doc .gear-table thead th:nth-child(3), .client-page-doc .gear-table thead th:nth-child(4) { text-align: right; }
    .client-page-doc .gear-table thead th:last-child { text-align: center; }

    .client-page-doc .gear-table tbody .cat-row td { padding: 7px 14px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: #FFFFFF; font-weight: 700; }
    .client-page-doc .cat-video td { background: #213775; color: #FFFFFF; }
    .client-page-doc .cat-lighting td { background: #A67C00; color: #FFFFFF; }
    .client-page-doc .cat-audio td { background: #7B3FA0; color: #FFFFFF; }
    .client-page-doc .cat-misc td { background: #333333; color: #FFFFFF; }

    .client-page-doc .gear-table tbody tr:nth-child(odd):not(.cat-row) { background: var(--white); }
    .client-page-doc .gear-table tbody tr:nth-child(even):not(.cat-row) { background: #FAFAFA; }
    .client-page-doc .gear-table tbody td { padding: 10px 14px; font-size: 12px; color: var(--ink); border-bottom: 0.5px solid var(--border); vertical-align: top; }
    .client-page-doc .gear-table tbody td:nth-child(3), .client-page-doc .gear-table tbody td:nth-child(4) { text-align: right; white-space: nowrap; }
    .client-page-doc .gear-table tbody td:last-child { text-align: center; }

    /* OWNED rows */
    .client-page-doc .owned-row td { opacity: 0.5; text-decoration: line-through; background: #F9F7F0 !important; }
    .client-page-doc .owned-badge { display: inline-block; background: var(--gold); color: var(--white); font-family: var(--font-mono); font-size: 8px; letter-spacing: .1em; text-transform: uppercase; padding: 3px 7px; border-radius: 3px; text-decoration: none; white-space: nowrap; }

    .client-page-doc .item-name { font-weight: 500; font-size: 12px; color: var(--ink); line-height: 1.3; }
    .client-page-doc .item-desc { font-size: 11px; color: var(--muted); line-height: 1.4; margin-top: 2px; }

    /* BUTTON */
    .client-page-doc .btn-amazon { display: inline-block; background: var(--accent); color: var(--white); font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; text-transform: uppercase; padding: 6px 10px; border-radius: 3px; text-decoration: none; white-space: nowrap; }
    .client-page-doc .btn-amazon:hover { background: var(--accent-warm); }

    /* TOTALS */
    .client-page-doc .totals-block { display: flex; justify-content: flex-end; margin: 16px 0 0; }
    .client-page-doc .totals-inner { width: 340px; }
    .client-page-doc .totals-row { display: flex; justify-content: space-between; padding: 5px 0; font-size: 13px; color: var(--muted); border-bottom: 0.5px solid var(--border); }
    .client-page-doc .totals-row:last-of-type { border-bottom: none; }
    .client-page-doc .totals-row span:last-child { font-weight: 500; color: var(--ink); }
    .client-page-doc .totals-grand { background: var(--accent); border-radius: 6px; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }
    .client-page-doc .totals-grand-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.6); }
    .client-page-doc .totals-grand-val { font-family: var(--font-display); font-size: 28px; color: var(--gold); line-height: 1; }

    /* FOOTER */
    .client-page-doc .footer { background: var(--accent); padding: 20px 48px; display: flex; justify-content: space-between; align-items: center; margin-top: 40px; }
    .client-page-doc .footer-brand { font-family: var(--font-display); font-size: 18px; color: var(--white); letter-spacing: .04em; }
    .client-page-doc .footer-contact { font-family: var(--font-mono); font-size: 10px; color: rgba(255,255,255,.4); letter-spacing: .08em; }

    @media (max-width: 680px) {
      .client-page-doc .header, .client-page-doc .body, .client-page-doc .notice-bar, .client-page-doc .footer { padding-left: 20px; padding-right: 20px; }
      .client-page-doc .stat-row { grid-template-columns: repeat(2, 1fr); }
      .client-page-doc .header { grid-template-columns: 1fr; }
      .client-page-doc .header-meta { text-align: left; }
      .client-page-doc .gear-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    }
  `,

  htmlContent: `
<!-- HEADER -->
<div class="header">
  <div>
    <div class="header-eyebrow">Client Equipment List</div>
    <div class="header-title">Jon<br><span>Alwinson</span></div>
  </div>
  <div class="header-meta">
    <div class="brand">ATL PODCAST PROS</div>
    <div class="tagline">atlpodcastpros.com</div>
  </div>
</div>

<!-- NOTICE BAR -->
<div class="notice-bar">
  <div class="notice-dot"></div>
  <p>All items link directly to Amazon for easy ordering. Prices are estimates and may vary. Affiliate links impose no added cost to you.</p>
</div>

<!-- BODY -->
<div class="body">

  <!-- STAT ROW -->
  <div class="stat-row" style="margin-top:24px;">
    <div class="stat-cell">
      <div class="stat-label">Setup Type</div>
      <div class="stat-val" style="font-size:18px;padding-top:4px;">3 Cam</div>
      <div class="stat-sub">Podcast + Solo Desk</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Total Items</div>
      <div class="stat-val">35</div>
      <div class="stat-sub">Across 4 categories</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Est. Subtotal</div>
      <div class="stat-val" style="font-size:18px;padding-top:4px;">$8,203</div>
      <div class="stat-sub">New items only</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Est. Total</div>
      <div class="stat-val" style="font-size:18px;padding-top:4px;">$8,696</div>
      <div class="stat-sub">Includes 6% tax</div>
    </div>
  </div>

  <!-- HOW TO ORDER -->
  <div class="callout">
    <div class="callout-title">How to Order</div>
    <div class="callout-body">Click <strong>View on Amazon</strong> on each new item to order directly. Items marked <strong>OWNED</strong> are already in your possession and are included for reference only. Once your equipment is ordered and delivery is confirmed, contact ATL Podcast Pros to schedule your installation date.</div>
  </div>

  <!-- OWNED NOTE -->
  <div class="owned-callout">
    <div class="callout-title">Items You Already Own</div>
    <div class="callout-body">Owned items appear with strikethrough formatting and are <strong>not included in the estimated total</strong>. They will be incorporated into your studio build at no additional equipment cost.</div>
  </div>

  <!-- GEAR TABLE -->
  <div class="gear-table-wrap">
  <table class="gear-table">
    <thead>
      <tr>
        <th style="width:42%;">Item / Description</th>
        <th style="width:6%;text-align:center;">Qty</th>
        <th style="width:11%;">Unit Price</th>
        <th style="width:11%;">Total</th>
        <th style="width:30%;">Purchase</th>
      </tr>
    </thead>
    <tbody>

      <!-- VIDEO -->
      <tr class="cat-row cat-video"><td colspan="5">Video</td></tr>

      <tr>
        <td><div class="item-name">Sony ZV-E10 II Mirrorless Camera (Body Only)</div><div class="item-desc">Super 35 mirrorless camera. 4K video, Sony E-mount. One per camera position.</div></td>
        <td style="text-align:center;">3</td>
        <td>$1,038.00</td>
        <td>$3,114.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0D92VDW76?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Sigma 18-50mm F2.8 DC DN Lens (Sony E) — Guest Cameras</div><div class="item-desc">Fast zoom lens for the two guest-facing cameras. Flexible framing in a compact space.</div></td>
        <td style="text-align:center;">2</td>
        <td>$555.00</td>
        <td>$1,110.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B09JVBB36L?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Sigma 16mm f/1.4 DC DN Lens (Sony E) — Solo/Center Camera</div><div class="item-desc">Wide prime lens for the center and solo desk camera position.</div></td>
        <td style="text-align:center;">1</td>
        <td>$414.00</td>
        <td>$414.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B077BWD2BB?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">NP-FW50 Dummy Battery / AC Adapter (ZV-E10 II Compatible)</div><div class="item-desc">Continuous AC power for each camera. Eliminates battery swaps during recording sessions.</div></td>
        <td style="text-align:center;">3</td>
        <td>$26.89</td>
        <td>$80.67</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B01D67LTIK?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">RODECaster Video All-in-One Production Console</div><div class="item-desc">Multi-camera switcher and recording hub. One-touch control for switching, recording, and going live.</div></td>
        <td style="text-align:center;">1</td>
        <td>$844.95</td>
        <td>$844.95</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0DP7SCRYB?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">SmallRig Camera Boom Arm Clamps — Bookshelf Mounting</div><div class="item-desc">Flexible arm clamps for mounting guest cameras to the built-in floor-to-ceiling bookshelves on either side of the desk.</div></td>
        <td style="text-align:center;">1</td>
        <td>$43.11</td>
        <td>$43.11</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0FWKD29VH?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">SmallRig Clamp</div><div class="item-desc">Additional clamp for mounting cameras and accessories in the studio.</div></td>
        <td style="text-align:center;">2</td>
        <td>$18.99</td>
        <td>$37.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B087T4T8D5?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">LG 32" UHD IPS Monitor — Confidence Display</div><div class="item-desc">Wall-mounted confidence monitor on the white wall Jon faces. Displays teleprompter text, speaker notes, and live preview.</div></td>
        <td style="text-align:center;">1</td>
        <td>$249.99</td>
        <td>$249.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0DS2SL7L1?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">SANUS Tilting TV Wall Mount — Confidence Monitor</div><div class="item-desc">Low-profile tilting wall mount for the confidence monitor on the white wall.</div></td>
        <td style="text-align:center;">1</td>
        <td>$39.99</td>
        <td>$39.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B00UNR0OOW?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Micro HDMI to HDMI Cable — Sony ZV-E10 II Output (Type D)</div><div class="item-desc">Connects each ZV-E10 II Micro HDMI port to the RODECaster Video. One per camera.</div></td>
        <td style="text-align:center;">3</td>
        <td>$34.19</td>
        <td>$102.57</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CQSYB8YW?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">8K HDMI Cable 20ft Braided (48Gbps)</div><div class="item-desc">High-speed HDMI runs for switcher, monitor, and display connections.</div></td>
        <td style="text-align:center;">2</td>
        <td>$21.99</td>
        <td>$43.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0BZVXDXKG?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr class="owned-row">
        <td><div class="item-name">Samsung T7 Portable SSD 1TB</div><div class="item-desc">External storage for recording backups and project files.</div></td>
        <td style="text-align:center;">1</td>
        <td>$84.99</td>
        <td>$0.00</td>
        <td><span class="owned-badge">Owned</span></td>
      </tr>
      <tr class="owned-row">
        <td><div class="item-name">Elgato Teleprompter</div><div class="item-desc">Teleprompter for on-camera delivery. Already owned and in place.</div></td>
        <td style="text-align:center;">1</td>
        <td>$229.00</td>
        <td>$0.00</td>
        <td><span class="owned-badge">Owned</span></td>
      </tr>

      <!-- LIGHTING -->
      <tr class="cat-row cat-lighting"><td colspan="5">Lighting</td></tr>

      <tr>
        <td><div class="item-name">Impact Deluxe Varipole Support System (Black Pair)</div><div class="item-desc">Floor-to-ceiling tension poles for mounting lights without drilling or wall holes. Two pairs for keylights and backlights.</div></td>
        <td style="text-align:center;">2</td>
        <td>$189.00</td>
        <td>$378.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CYDS9YX7?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">NEEWER 2 Pack Super Clamps with 5/8" Stud (UA017)</div><div class="item-desc">Heavy-duty clamps for mounting accessories to poles and booms.</div></td>
        <td style="text-align:center;">2</td>
        <td>$50.34</td>
        <td>$100.68</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CTWR1MC1?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Amaran 200dS LED Video Light (Key Lights)</div><div class="item-desc">Professional 200W daylight key lights mounted on varipoles. One per host position.</div></td>
        <td style="text-align:center;">2</td>
        <td>$212.80</td>
        <td>$425.60</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B08RNW1HL6?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">NEEWER 35"/90cm Octagonal Softbox with Honeycomb Grid (Bowens)</div><div class="item-desc">Grid softboxes for the Amaran 200dS key lights. Shapes and directs light for clean on-camera illumination.</div></td>
        <td style="text-align:center;">2</td>
        <td>$75.89</td>
        <td>$151.78</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0CC1M41T5?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Amaran Pano 60C RGBWW Video Panel Light — Solo Desk</div><div class="item-desc">RGBWW panel light for solo desk content. Soft, even fill light positioned for on-camera solo recording.</div></td>
        <td style="text-align:center;">1</td>
        <td>$165.00</td>
        <td>$165.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0F63872N3?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Stage Wash Light Bar 40" 96W RGBA 24LED DMX</div><div class="item-desc">DMX-controlled floor wash lights for branded color ambiance and backdrop illumination.</div></td>
        <td style="text-align:center;">2</td>
        <td>$105.73</td>
        <td>$211.46</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0G4TDXGN1?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Enttec DMX USB Pro Interface</div><div class="item-desc">Professional DMX controller interface. Connects the DMX lighting stack to the production system.</div></td>
        <td style="text-align:center;">1</td>
        <td>$162.00</td>
        <td>$162.00</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B077VW1DJH?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">DMX Cables 4-Pack (3-pin XLR)</div><div class="item-desc">Cables to connect the DMX light stack.</div></td>
        <td style="text-align:center;">1</td>
        <td>$21.98</td>
        <td>$21.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0B35R7MW7?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">DMX Terminator (3-pin)</div><div class="item-desc">Prevents signal reflection in the DMX chain. Required for a clean DMX setup.</div></td>
        <td style="text-align:center;">1</td>
        <td>$15.16</td>
        <td>$15.16</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0F637B68N?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">5-Pin to 3-Pin DMX Adapter</div><div class="item-desc">Adapter for connecting 5-pin and 3-pin DMX fixtures in the same chain.</div></td>
        <td style="text-align:center;">1</td>
        <td>$14.95</td>
        <td>$14.95</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B09558BG54?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Elgato Stream Deck MK.2 Studio Controller (15 Keys)</div><div class="item-desc">One-touch control for camera switching, lighting scenes, muting, and going live.</div></td>
        <td style="text-align:center;">1</td>
        <td>$119.99</td>
        <td>$119.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B09738CV2G?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">TP-Link Tapo Smart Plugs (4-Pack)</div><div class="item-desc">Smart plugs for Stream Deck control of lighting circuits.</div></td>
        <td style="text-align:center;">1</td>
        <td>$39.18</td>
        <td>$39.18</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0836HL66P?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">GVM 800D RGB LED Panels (2-Pack, App Control)</div><div class="item-desc">App-controlled RGB accent panels for branded color ambiance on camera.</div></td>
        <td style="text-align:center;">1</td>
        <td>$179.55</td>
        <td>$179.55</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B07ZCYMS3V?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

      <!-- AUDIO -->
      <tr class="cat-row cat-audio"><td colspan="5">Audio</td></tr>

      <tr class="owned-row">
        <td><div class="item-name">Shure SM7B Dynamic Microphone</div><div class="item-desc">Industry-standard broadcast microphone for both host and guest positions.</div></td>
        <td style="text-align:center;">2</td>
        <td>$359.00</td>
        <td>$0.00</td>
        <td><span class="owned-badge">Owned</span></td>
      </tr>
      <tr class="owned-row">
        <td><div class="item-name">Mic Stands for SM7B</div><div class="item-desc">Existing mic stands for both Shure SM7B microphones.</div></td>
        <td style="text-align:center;">2</td>
        <td></td>
        <td>$0.00</td>
        <td><span class="owned-badge">Owned</span></td>
      </tr>
      <tr class="owned-row">
        <td><div class="item-name">Audio Technica USB Microphone (secondary option)</div><div class="item-desc">Available as a secondary microphone option if needed.</div></td>
        <td style="text-align:center;">1</td>
        <td>$99.00</td>
        <td>$0.00</td>
        <td><span class="owned-badge">Owned</span></td>
      </tr>
      <tr class="owned-row">
        <td><div class="item-name">Focusrite Audio Interface (not used in this build)</div><div class="item-desc">Existing interface. Not being used in this build — RODECaster Video handles audio routing.</div></td>
        <td style="text-align:center;">1</td>
        <td>$199.00</td>
        <td>$0.00</td>
        <td><span class="owned-badge">Owned</span></td>
      </tr>
      <tr>
        <td><div class="item-name">XLR Cables 15ft</div><div class="item-desc">XLR runs from SM7B microphones to the RODECaster Video. One per mic.</div></td>
        <td style="text-align:center;">2</td>
        <td>$25.74</td>
        <td>$51.48</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B003L11F36?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

      <!-- MISC -->
      <tr class="cat-row cat-misc"><td colspan="5">Misc</td></tr>

      <tr>
        <td><div class="item-name">Paintable Cable Raceway Kit 26ft</div><div class="item-desc">Wall-mount raceway for concealing HDMI and power cable runs cleanly.</div></td>
        <td style="text-align:center;">1</td>
        <td>$29.99</td>
        <td>$29.99</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B07M9VLH4J?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Cable Ties 60-Pack Reusable</div><div class="item-desc">Cable management and organization throughout the studio.</div></td>
        <td style="text-align:center;">1</td>
        <td>$6.98</td>
        <td>$6.98</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B081HH5X61?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Surge Protector 10ft (5 Outlets + 3 USB)</div><div class="item-desc">Heavy-duty surge-protected power strip for studio equipment.</div></td>
        <td style="text-align:center;">1</td>
        <td>$34.19</td>
        <td>$34.19</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0B16YFTQ4?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>
      <tr>
        <td><div class="item-name">Surge Protector 15ft (6 AC + 3 USB-C)</div><div class="item-desc">Additional surge-protected power strip for desk equipment and peripherals.</div></td>
        <td style="text-align:center;">1</td>
        <td>$14.24</td>
        <td>$14.24</td>
        <td><a class="btn-amazon" href="https://www.amazon.com/dp/B0G2LZPN6B?tag=benjaminpaul-20" target="_blank">View on Amazon</a></td>
      </tr>

    </tbody>
  </table>
  </div>

  <!-- TOTALS -->
  <div class="totals-block">
    <div class="totals-inner">
      <div class="totals-row"><span>Subtotal (new items only)</span><span>$8,203.45</span></div>
      <div class="totals-row"><span>Shipping</span><span>TBD</span></div>
      <div class="totals-row"><span>Est. Tax (6%)</span><span>$492.21</span></div>
      <div class="totals-grand">
        <div class="totals-grand-label">Estimated Total</div>
        <div class="totals-grand-val">$8,695.66</div>
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
