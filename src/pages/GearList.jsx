import { useState, useEffect } from 'react'
import { useBookingModal } from '../components/BookingModal'
import './GearList.css'

const gearItems = [
  // VIDEO
  { id: 1, name: 'Sony ZV-E10 II Mirrorless Camera (Body Only)', category: 'Video', price: 1038.00, url: 'https://www.amazon.com/dp/B0D92VDW76?tag=benjaminpaul-20' },
  { id: 2, name: 'Sigma 18-50mm F2.8 DC DN Lens (Sony E)', category: 'Video', price: 555.00, url: 'https://www.amazon.com/18-50mm-F2-8-DC-Contemporary-Sony/dp/B09JVBB36L?tag=benjaminpaul-20', note: 'Guest cameras and wide shots' },
  { id: 3, name: 'Sigma 16mm f/1.4 DC DN Lens (Sony E)', category: 'Video', price: 414.00, url: 'https://www.amazon.com/dp/B077BWD2BB?tag=benjaminpaul-20', note: 'Solo / center camera' },
  { id: 4, name: 'NP-FW50 Dummy Battery / AC Adapter (ZV-E10 Compatible)', category: 'Video', price: 26.89, url: 'https://www.amazon.com/dp/B01D67LTIK?tag=benjaminpaul-20' },
  { id: 5, name: 'RODECaster Video All-in-One Production Console', category: 'Video', price: 844.95, url: 'https://www.amazon.com/dp/B0DP7SCRYB?tag=benjaminpaul-20' },
  { id: 6, name: 'Impact Deluxe Varipole Support System (Black Pair)', category: 'Video', price: 189.00, url: 'https://www.amazon.com/dp/B0CYDS9YX7?tag=benjaminpaul-20' },
  { id: 7, name: 'NEEWER 2 Pack Super Clamps with 5/8" Stud (UA017)', category: 'Video', price: 50.34, url: 'https://www.amazon.com/dp/B0CTWR1MC1?tag=benjaminpaul-20' },
  { id: 8, name: 'Camera Boom Arm Clamps for Bookshelf Mounting', category: 'Video', price: 49.99, url: 'https://www.amazon.com/SmallRig-Overhead-Flexible-Camera-iPhone/dp/B0FWKD29VH?tag=benjaminpaul-20' },
  { id: 9, name: 'IFOOTAGE A400 Round Base Monopod 79"', category: 'Video', price: 119.99, url: 'https://www.amazon.com/s?k=IFOOTAGE+A400+Round+Base+Monopod&tag=benjaminpaul-20' },
  { id: 10, name: 'LG 27" FHD IPS Confidence Monitor', category: 'Video', price: 199.99, url: 'https://www.amazon.com/dp/B0BFZLSZ5J?tag=benjaminpaul-20' },
  { id: 11, name: 'Perlegear Floor TV Stand for 26-50" TVs', category: 'Video', price: 34.99, url: 'https://www.amazon.com/s?k=Perlegear+Floor+TV+Stand&tag=benjaminpaul-20' },
  { id: 12, name: 'Elgato Prompter Teleprompter with Built-in Screen', category: 'Video', price: 229.89, url: 'https://www.amazon.com/s?k=Elgato+Prompter+Teleprompter&tag=benjaminpaul-20' },
  { id: 13, name: 'Micro HDMI to HDMI Cable (Sony ZV-E10 II, Type D)', category: 'Video', price: 34.19, url: 'https://www.amazon.com/dp/B0CQSYB8YW?tag=benjaminpaul-20' },
  { id: 14, name: '8K HDMI Cable 20ft Braided', category: 'Video', price: 21.99, url: 'https://www.amazon.com/s?k=8K+HDMI+Cable+20ft+Braided&tag=benjaminpaul-20' },
  { id: 15, name: 'Samsung T7 Portable SSD 1TB', category: 'Video', price: 84.99, url: 'https://www.amazon.com/s?k=Samsung+T7+Portable+SSD+1TB&tag=benjaminpaul-20' },
  { id: 16, name: 'StarTech 10-Port USB-C Hub (HB31C2A8CME)', category: 'Video', price: 129.38, url: 'https://www.amazon.com/dp/B0BQRSJ79B?tag=benjaminpaul-20' },
  // LIGHTING
  { id: 17, name: 'Amaran 200dS LED Video Light (Key Light)', category: 'Lighting', price: 212.80, url: 'https://www.amazon.com/dp/B08RNW1HL6?tag=benjaminpaul-20' },
  { id: 18, name: 'NEEWER 35"/90cm Octagonal Softbox with Honeycomb Grid (Bowens)', category: 'Lighting', price: 75.89, url: 'https://www.amazon.com/dp/B0CC1M41T5?tag=benjaminpaul-20' },
  { id: 19, name: 'Amaran Pano 60C RGBWW Video Panel Light', category: 'Lighting', price: 165.00, url: 'https://www.amazon.com/s?k=Amaran+Pano+60C+RGBWW&tag=benjaminpaul-20', note: 'Solo desk content lighting' },
  { id: 20, name: 'GVM 800D RGB LED Panels (2-Pack, App Control)', category: 'Lighting', price: 179.55, url: 'https://www.amazon.com/dp/B07ZCYMS3V?tag=benjaminpaul-20' },
  { id: 21, name: 'Stage Wash Light Bar 40" 96W RGBA 24LED DMX', category: 'Lighting', price: 105.73, url: 'https://www.amazon.com/dp/B0G4TDXGN1?tag=benjaminpaul-20' },
  { id: 22, name: 'Enttec DMX USB Pro Interface', category: 'Lighting', price: 162.00, url: 'https://www.amazon.com/dp/B077VW1DJH?tag=benjaminpaul-20' },
  { id: 23, name: 'DMX Cables 4-Pack (3-pin XLR)', category: 'Lighting', price: 21.98, url: 'https://www.amazon.com/dp/B0B35R7MW7?tag=benjaminpaul-20' },
  { id: 24, name: 'DMX Terminator (3-pin)', category: 'Lighting', price: 15.16, url: 'https://www.amazon.com/dp/B0F637B68N?tag=benjaminpaul-20' },
  { id: 25, name: '5-Pin to 3-Pin DMX Adapter', category: 'Lighting', price: 14.95, url: 'https://www.amazon.com/dp/B09558BG54?tag=benjaminpaul-20' },
  { id: 26, name: 'Elgato Stream Deck MK.2 Studio Controller (15 Macro Keys)', category: 'Lighting', price: 119.99, url: 'https://www.amazon.com/dp/B09738CV2G?tag=benjaminpaul-20', note: 'Lighting and scene control' },
  { id: 27, name: 'TP-Link Tapo Smart Plugs (4-Pack)', category: 'Lighting', price: 39.18, url: 'https://www.amazon.com/s?k=TP-Link+Tapo+Smart+Plugs+4+Pack&tag=benjaminpaul-20' },
  // AUDIO
  { id: 28, name: 'Shure SM7B Dynamic Microphone', category: 'Audio', price: 359.00, url: 'https://www.amazon.com/s?k=Shure+SM7B&tag=benjaminpaul-20' },
  { id: 29, name: 'Sennheiser MKE 600 Shotgun Mic Bundle', category: 'Audio', price: 339.00, url: 'https://www.amazon.com/s?k=Sennheiser+MKE+600+Shotgun+Mic&tag=benjaminpaul-20' },
  { id: 30, name: 'RODECaster Pro II Audio Production Console', category: 'Audio', price: 699.00, url: 'https://www.amazon.com/s?k=RODECaster+Pro+II&tag=benjaminpaul-20' },
  { id: 31, name: 'Rode PSA1+ Swivel Mount Studio Microphone Boom Arm', category: 'Audio', price: 169.00, url: 'https://www.amazon.com/s?k=Rode+PSA1+Plus+Boom+Arm&tag=benjaminpaul-20' },
  { id: 32, name: 'InnoGear Floor Tripod Boom Arm Mic Stand', category: 'Audio', price: 29.59, url: 'https://www.amazon.com/dp/B0G24DWS2W?tag=benjaminpaul-20' },
  { id: 33, name: 'Monoprice XLR Cable 15ft (Male to Female)', category: 'Audio', price: 25.74, url: 'https://www.amazon.com/dp/B003L11F36?tag=benjaminpaul-20' },
  // ACOUSTIC
  { id: 34, name: 'AudioSilk Acoustic Panels 4-Pack Large 46"x23" Mid Grey', category: 'Acoustic', price: 120.00, url: 'https://www.amazon.com/s?k=AudioSilk+Acoustic+Panels+46+23&tag=benjaminpaul-20' },
  // MISC
  { id: 35, name: 'Paintable Cable Raceway Kit 26ft', category: 'Misc', price: 29.99, url: 'https://www.amazon.com/dp/B07M9VLH4J?tag=benjaminpaul-20' },
  { id: 36, name: 'D-Line 6ft Floor Cord Cover (Black)', category: 'Misc', price: 16.62, url: 'https://www.amazon.com/s?k=D-Line+Floor+Cord+Cover+6ft&tag=benjaminpaul-20' },
  { id: 37, name: 'Cable Ties 60-Pack Reusable', category: 'Misc', price: 6.98, url: 'https://www.amazon.com/dp/B081HH5X61?tag=benjaminpaul-20' },
  { id: 38, name: 'Surge Protector 10ft (5 Outlets + 3 USB)', category: 'Misc', price: 34.19, url: 'https://www.amazon.com/dp/B0B16YFTQ4?tag=benjaminpaul-20' },
  { id: 39, name: 'Surge Protector 15ft (6 AC + 3 USB-C)', category: 'Misc', price: 14.24, url: 'https://www.amazon.com/dp/B0G2LZPN6B?tag=benjaminpaul-20' },
]

const CATEGORIES = ['Video', 'Lighting', 'Audio', 'Acoustic', 'Misc']
const TABS = ['All', ...CATEGORIES]

const usd = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

const totalValue = gearItems.reduce((sum, item) => sum + item.price, 0)

export default function GearList() {
  const { openModal } = useBookingModal()
  const [activeCategory, setActiveCategory] = useState('All')
  const [barHidden, setBarHidden] = useState(false)

  /* Hide the sticky total bar once the footer scrolls into view */
  useEffect(() => {
    const footer = document.querySelector('.footer')
    if (!footer) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setBarHidden(e.isIntersecting)),
      { threshold: 0 }
    )
    io.observe(footer)
    return () => io.disconnect()
  }, [])

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
            const catTotal = items.reduce((sum, i) => sum + i.price, 0)
            return (
              <section className="gl-section" key={cat}>
                <div className="gl-section__head">
                  <div>
                    <span className="gl-section__bar" />
                    <h2 className="gl-section__title">{cat}</h2>
                  </div>
                  <span className="gl-section__subtotal">Category total: {usd(catTotal)}</span>
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

      {/* ===== STICKY TOTAL BAR ===== */}
      <div className={`gl-bar ${barHidden ? 'gl-bar--hidden' : ''}`} aria-hidden={barHidden}>
        <div className="gl-bar__inner">
          <div className="gl-bar__left">
            <span className="gl-bar__total">Total List Value: {usd(totalValue)}</span>
            <span className="gl-bar__note">Individual unit prices. Quantities vary by build.</span>
          </div>
          <button type="button" className="gl-bar__cta" onClick={openModal}>Schedule a Free Call</button>
        </div>
      </div>
    </>
  )
}
