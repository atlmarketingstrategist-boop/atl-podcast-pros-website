import { useState } from 'react'
import './GearList.css'

const gearItems = [
  { id: 1, name: 'Sony FX30 APS-C Cinema Camera (Body Only)', category: 'Video', price: 1959.00, url: 'https://www.amazon.com/dp/B0BGQGBW8J?tag=benjaminpaul-20', note: 'Premium camera tier — preferred for professional builds' },
  { id: 2, name: 'Sony ZV-E10 II Mirrorless Camera (Body Only)', category: 'Video', price: 1038.00, url: 'https://www.amazon.com/dp/B0D92VDW76?tag=benjaminpaul-20', note: 'Budget-friendly camera tier for home studio builds' },
  { id: 3, name: 'Sigma 18-50mm F2.8 DC DN Lens (Sony E)', category: 'Video', price: 555.00, url: 'https://www.amazon.com/dp/B09JVBB36L?tag=benjaminpaul-20', note: 'Fast zoom lens for guest cameras and wide shots' },
  { id: 4, name: 'Sigma 16mm f/1.4 DC DN Lens (Sony E)', category: 'Video', price: 414.00, url: 'https://www.amazon.com/dp/B077BWD2BB?tag=benjaminpaul-20', note: 'Wide prime lens for solo and center camera positions' },
  { id: 5, name: 'NP-FW50 Dummy Battery / AC Adapter (ZV-E10 II Compatible)', category: 'Video', price: 26.89, url: 'https://www.amazon.com/dp/B01D67LTIK?tag=benjaminpaul-20', note: 'Continuous AC power for Sony ZV-E10 II — eliminates battery swaps' },
  { id: 6, name: 'NP-FZ100 Dummy Battery / AC Adapter (FX30 Compatible)', category: 'Video', price: 29.99, url: 'https://www.amazon.com/dp/B0FHVPMTG7?tag=benjaminpaul-20', note: 'Continuous AC power for Sony FX30 — different battery size from ZV-E10 II' },
  { id: 7, name: 'RODECaster Video All-in-One Production Console', category: 'Video', price: 844.95, url: 'https://www.amazon.com/dp/B0DP7SCRYB?tag=benjaminpaul-20', note: 'Multi-camera switcher and recording hub — one-touch control' },
  { id: 8, name: 'Blackmagic Design ATEM Mini Pro ISO HDMI Live Stream Switcher', category: 'Video', price: 585.00, url: 'https://www.amazon.com/dp/B08F16FVCR?tag=benjaminpaul-20', note: '4-input HDMI live production switcher with multi-stream recording' },
  { id: 9, name: 'OBSBOT Tiny 3 AI-Powered 4K PTZ Webcam', category: 'Video', price: 338.00, url: 'https://www.amazon.com/dp/B0G636CXQM?tag=benjaminpaul-20', note: 'AI auto-tracking, spatial audio — ideal for solo creators' },
  { id: 10, name: 'Selens Tabletop Camera Desk Mount Stand (9.4"-18.5")', category: 'Video', price: 32.99, url: 'https://www.amazon.com/dp/B0BM4PBKZL?tag=benjaminpaul-20', note: 'Adjustable desktop C-clamp with 1/4" ball head' },
  { id: 11, name: 'Apple Mac Mini Desktop Computer (M4 Pro, 24GB, 512GB)', category: 'Video', price: 1569.00, url: 'https://www.amazon.com/dp/B0DLBVHSLD?tag=benjaminpaul-20', note: '12-core CPU, 16-core GPU — production editing and streaming workstation' },
  { id: 12, name: 'IFOOTAGE A400 Round Base Monopod 79" (2-Pack)', category: 'Video', price: 198.55, url: 'https://www.amazon.com/dp/B0DBLB319G?tag=benjaminpaul-20', note: 'Heavy-duty flat-base monopods — tip-resistant, 22lb payload, space-saving' },
  { id: 13, name: 'LG 27" FHD IPS Confidence Monitor', category: 'Video', price: 199.99, url: 'https://www.amazon.com/dp/B0BFZLSZ5J?tag=benjaminpaul-20', note: 'Operator confidence monitor for teleprompter text, notes, and live preview' },
  { id: 14, name: 'Perlegear Floor TV Stand for 26-50" TVs', category: 'Video', price: 35.99, url: 'https://www.amazon.com/dp/B0CYCLWVGX?tag=benjaminpaul-20', note: 'Floor stand for confidence monitor — no wall mount required' },
  { id: 15, name: 'Elgato Prompter Teleprompter with Built-in Screen', category: 'Video', price: 249.99, url: 'https://www.amazon.com/dp/B0CH3P9K1X?tag=benjaminpaul-20', note: '9" built-in display for scripts — maintains natural eye contact with lens. XL version also available.' },
  { id: 16, name: 'Micro HDMI to HDMI Cable (Sony ZV-E10 II, Type D)', category: 'Video', price: 34.19, url: 'https://www.amazon.com/dp/B0CQSYB8YW?tag=benjaminpaul-20', note: 'Connects ZV-E10 II Micro HDMI port to production console' },
  { id: 17, name: '8K HDMI Cable 20ft Braided (48Gbps)', category: 'Video', price: 21.99, url: 'https://www.amazon.com/dp/B0CR47ZPNW?tag=benjaminpaul-20', note: 'High-speed braided HDMI for cameras, switcher, monitor, and display runs' },
  { id: 18, name: 'Samsung T7 Portable SSD 1TB', category: 'Video', price: 244.99, url: 'https://www.amazon.com/dp/B0874XN4D8?tag=benjaminpaul-20', note: 'External storage for recording backups and project files' },
  { id: 19, name: 'USB-C Multiport Adapter Hub', category: 'Video', price: 44.99, url: 'https://www.amazon.com/dp/B0D5XSTWNT?tag=benjaminpaul-20', note: 'Expands Mac Mini connectivity for studio peripherals and accessories' },
  { id: 20, name: 'Apple Magic Keyboard with Numeric Keypad and Touch ID', category: 'Video', price: 182.99, url: 'https://www.amazon.com/dp/B0DL6L189W?tag=benjaminpaul-20', note: 'Full-size wireless keyboard for Mac Mini production workstation' },
  { id: 21, name: 'Apple Magic Mouse (Multi-Touch Surface)', category: 'Video', price: 94.05, url: 'https://www.amazon.com/dp/B0DL6WHJ1W?tag=benjaminpaul-20', note: 'Wireless mouse for Mac Mini production workstation' },
  { id: 22, name: 'Elgato Stream Deck XL (32 Keys)', category: 'Video', price: 222.29, url: 'https://www.amazon.com/dp/B07RL8H55Z?tag=benjaminpaul-20', note: 'Expanded scene and lighting control — optional upgrade from Stream Deck MK.2' },
  { id: 23, name: 'Elgato Stream Deck Pedal (3 Foot Switches)', category: 'Video', price: 79.99, url: 'https://www.amazon.com/dp/B09PRMCTGB?tag=benjaminpaul-20', note: 'Hands-free foot control for muting, going live, and triggering scenes' },
  { id: 24, name: 'Elgato Cam Link 4K (HDMI Capture Card)', category: 'Video', price: 75.99, url: 'https://www.amazon.com/dp/B07K3FN5MR?tag=benjaminpaul-20', note: 'Connects DSLR/mirrorless cameras to Mac via USB for live streaming and recording' },
  { id: 25, name: 'Elgato Stream Deck MK.2 Studio Controller (15 Macro Keys)', category: 'Lighting', price: 119.99, url: 'https://www.amazon.com/dp/B09738CV2G?tag=benjaminpaul-20', note: 'One-touch control for lighting scenes, camera switching, muting, and going live. XL version also available.' },
  { id: 26, name: 'Amaran 200dS LED Video Light (Key Light)', category: 'Lighting', price: 212.80, url: 'https://www.amazon.com/dp/B08RNW1HL6?tag=benjaminpaul-20', note: 'Professional 200W daylight key light — app controlled, Bowens mount, CRI 96+' },
  { id: 27, name: 'NEEWER 35"/90cm Octagonal Softbox with Honeycomb Grid (Bowens)', category: 'Lighting', price: 75.89, url: 'https://www.amazon.com/dp/B0CC1M41T5?tag=benjaminpaul-20', note: 'Grid softbox for Amaran key lights — shapes light for clean on-camera illumination' },
  { id: 28, name: 'Amaran Pano 60C RGBWW Video Panel Light', category: 'Lighting', price: 165.00, url: 'https://www.amazon.com/dp/B0F63872N3?tag=benjaminpaul-20', note: 'RGBWW panel for solo desk content — soft, even fill light for on-camera recording' },
  { id: 29, name: 'GVM 800D RGB LED Panels (2-Pack, App Control)', category: 'Lighting', price: 179.55, url: 'https://www.amazon.com/dp/B07ZCYMS3V?tag=benjaminpaul-20', note: 'App-controlled RGB accent panels programmable to brand colors' },
  { id: 30, name: 'Stage Wash Light Bar 40" 96W RGBA 24LED DMX', category: 'Lighting', price: 111.00, url: 'https://www.amazon.com/dp/B0G4TDXGN1?tag=benjaminpaul-20', note: 'DMX-controlled floor wash lights for branded color ambiance' },
  { id: 31, name: 'Enttec DMX USB Pro Interface', category: 'Lighting', price: 162.00, url: 'https://www.amazon.com/dp/B077VW1DJH?tag=benjaminpaul-20', note: 'Professional DMX controller — connects DMX lighting stack to computer' },
  { id: 32, name: 'DMX Cables 4-Pack (3-pin XLR)', category: 'Lighting', price: 21.98, url: 'https://www.amazon.com/dp/B0B35R7MW7?tag=benjaminpaul-20', note: 'Cables to connect the DMX light stack' },
  { id: 33, name: 'DMX Terminator (3-pin)', category: 'Lighting', price: 15.16, url: 'https://www.amazon.com/dp/B0F637B68N?tag=benjaminpaul-20', note: 'Prevents signal reflection in the DMX chain — required for clean DMX setup' },
  { id: 34, name: '5-Pin to 3-Pin DMX Adapter', category: 'Lighting', price: 14.95, url: 'https://www.amazon.com/dp/B09558BG54?tag=benjaminpaul-20', note: 'Connects 5-pin and 3-pin DMX fixtures in the same chain' },
  { id: 35, name: 'Shure SM7B Dynamic Microphone', category: 'Audio', price: 439.00, url: 'https://www.amazon.com/dp/B0002E4Z8M?tag=benjaminpaul-20', note: 'Industry-standard broadcast dynamic mic — warm, clear vocal reproduction' },
  { id: 36, name: 'Shure MV7X XLR Podcast Microphone', category: 'Audio', price: 189.05, url: 'https://www.amazon.com/dp/B09BZZCGC8?tag=benjaminpaul-20', note: 'Budget-friendly professional podcast mic — great alternative to the SM7B' },
  { id: 37, name: 'Sennheiser MKE 600 Shotgun Mic Bundle', category: 'Audio', price: 328.00, url: 'https://www.amazon.com/dp/B011AEX42U?tag=benjaminpaul-20', note: 'Boom/shotgun mic positioned out of frame for clean on-camera look' },
  { id: 38, name: 'RODECaster Pro II Audio Production Console', category: 'Audio', price: 579.00, url: 'https://www.amazon.com/dp/B0B17V8NGX?tag=benjaminpaul-20', note: 'Professional audio mixing console for mics, remote callers, and sound design' },
  { id: 39, name: 'RODE PSA1+ Swivel Mount Studio Microphone Boom Arm', category: 'Audio', price: 112.00, url: 'https://www.amazon.com/dp/B09JBVR5B4?tag=benjaminpaul-20', note: 'Professional desk-clamp boom arm for precise microphone positioning' },
  { id: 40, name: 'InnoGear Floor Tripod Boom Arm Mic Stand', category: 'Audio', price: 32.98, url: 'https://www.amazon.com/dp/B0G24DWS2W?tag=benjaminpaul-20', note: 'Heavy-base floor stand with adjustable boom arm for overhead mic placement' },
  { id: 41, name: 'Monoprice XLR Cable 15ft (Male to Female, 16AWG Gold)', category: 'Audio', price: 20.67, url: 'https://www.amazon.com/dp/B003L11F36?tag=benjaminpaul-20', note: 'XLR runs from microphones to audio console — 16AWG gold plated' },
]

console.log('Gear list items:', gearItems.length)

const CATEGORIES = ['Video', 'Lighting', 'Audio']
const TABS = ['All', ...CATEGORIES]

const usd = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

export default function GearList() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleCategories = activeCategory === 'All' ? CATEGORIES : [activeCategory]

  return (
    <>
      <title>Recommended Podcast Studio Gear List | ATL Podcast Pros</title>
      <meta name="description" content="The complete ATL Podcast Pros recommended gear list. Every camera, microphone, light, and accessory we use in real client studio builds. Affiliate links included." />
      <link rel="canonical" href="https://atlpodcastpros.com/gear" />

      <div className="gl">
        {/* ===== HERO ===== */}
        <header className="gl-hero">
          <div className="gl-container">
            <p className="gl-prelabel">Affiliate Gear List</p>
            <h1 className="gl-h1">ATL Podcast Pros Recommended Gear</h1>
            <p className="gl-hero__sub">
              Every item on this list has been personally selected, sourced, and installed by our team in real client studios. These are the exact products we use and recommend. All links are affiliate links which help support our work at no extra cost to you.
            </p>
            <p className="gl-disclosure">As an Amazon Associate we earn from qualifying purchases.</p>
          </div>
        </header>

        {/* ===== FILTER TABS ===== */}
        <div className="gl-tabs-wrap">
          <div className="gl-container">
            <div className="gl-tabs" role="tablist" aria-label="Filter gear by category">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === tab}
                  className={`gl-tab ${activeCategory === tab ? 'gl-tab--active' : ''}`}
                  onClick={() => setActiveCategory(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CATEGORY SECTIONS ===== */}
        <div className="gl-container gl-sections">
          {visibleCategories.map((cat) => {
            const items = gearItems.filter((i) => i.category === cat)
            if (items.length === 0) return null
            return (
              <section className="gl-section" key={cat}>
                <div className="gl-section__head">
                  <div>
                    <span className="gl-section__bar" />
                    <h2 className="gl-section__title">{cat}</h2>
                  </div>
                </div>

                <div className="gl-table" role="table">
                  <div className="gl-table__head" role="row">
                    <span className="gl-col-num">#</span>
                    <span className="gl-col-name">Item</span>
                    <span className="gl-col-cat">Category</span>
                    <span className="gl-col-price">Unit Price</span>
                    <span className="gl-col-buy" />
                  </div>
                  {items.map((item, idx) => (
                    <div className="gl-row" role="row" key={item.id}>
                      <span className="gl-col-num" role="cell">{idx + 1}</span>
                      <span className="gl-col-name" role="cell">
                        <span className="gl-item-name">{item.name}</span>
                        {item.note && <span className="gl-item-note">{item.note}</span>}
                      </span>
                      <span className="gl-col-cat" role="cell">
                        <span className="gl-pill">{item.category}</span>
                      </span>
                      <span className="gl-col-price" role="cell">{usd(item.price)}</span>
                      <span className="gl-col-buy" role="cell">
                        <a
                          className="gl-buy"
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy on Amazon
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
