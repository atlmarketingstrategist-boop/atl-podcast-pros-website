import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './SetupPage.css'

/* ---------- Icons ---------- */
const Shield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
)
const Star = ({ s = 16 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="#FFC107" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>
)
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
)
const Broadcast = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M4.93 19.07a10 10 0 0 1 0-14.14M19.07 4.93a10 10 0 0 1 0 14.14M7.76 16.24a6 6 0 0 1 0-8.49M16.24 7.76a6 6 0 0 1 0 8.49" /></svg>
)
const Arrow = ({ dir }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {dir === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
  </svg>
)

/* ---------- Data ---------- */
const STEPS = [
  { n: '01', title: 'Design', body: 'We design your podcast studio based on your space, goals, and vision. We bring a studio-grade setup that is uniquely tailored to your needs.' },
  { n: '02', title: 'Build', body: 'No excess equipment. We install everything, configure all settings, calibrate audio and video, and test thoroughly so your studio is ready for professionals.' },
  { n: '03', title: 'Launch', body: 'We test your studio by recording your first session together. Everything is dialed in before we leave. Your studio is ready to create.' },
]

const BENEFITS = [
  { title: 'Record Without Tech Stress', body: 'A studio designed so recording is distraction-free. No troubleshooting, no delays, no tech headaches.' },
  { title: 'Impress Every Guest', body: 'A professional studio setup creates instant confidence for both host and guests. Your space speaks before you do.' },
  { title: 'Eliminate Trial and Error', body: 'No second-guessing about the right equipment or setup. We get it right the first time.' },
  { title: 'Stay Consistent', body: 'A studio designed for ease of use means you will keep recording week after week for years.' },
  { title: 'Build Instant Authority', body: 'Professional studio quality builds credible brand trust and deep connection with your audience.' },
  { title: 'Future Proof Setup', body: 'Studio equipment and setup that will work with your growing show, audience, and platforms.' },
]

const INCLUDED = [
  { title: 'Custom Equipment Sourcing', body: 'Carefully selected equipment matched to your specific space and content goals.' },
  { title: 'Professional Lighting Design', body: 'Cinematic lighting setup that makes you look broadcast-ready on camera.' },
  { title: 'Camera and Audio Installation', body: 'Full camera rig and microphone setup installed, mounted, and calibrated.' },
  { title: 'Studio Layout and Cable Management', body: 'Clean, organized cable routing with a polished professional finish.' },
  { title: 'One-Button Recording Workflow', body: 'Configured so you press one button and you are recording. No tech required.' },
  { title: 'On-Site Training and Walkthrough', body: 'We walk you through your entire studio before we leave. You will be confident from day one.' },
]

const TESTIMONIALS = [
  { quote: "I want to thank Mr. Benjamin in Atlanta. He's working behind the scenes and he put everything together. He brought the equipment here and he put together a beautiful studio for us to minister the gospel around the world.", name: 'Socrates Charos', role: 'Good News with Socrates' },
  { quote: 'Best to do it! Thank you for my setup. Professional and timely service.', name: 'Jason Stephens', role: 'Owner, 12:16 Entertainment' },
  { quote: 'Taught me not only about the equipment I need to buy but also how to set it up and have it running efficiently with great quality!', name: 'Area 31 Podcast', role: 'Host, Area 31' },
]

const SLIDES = [
  '/assets/images/carousel1.webp',
  '/assets/images/carousel2.webp',
  '/assets/images/carousel3.webp',
  '/assets/images/carousel4.jpeg',
  '/assets/images/carousel5.jpg',
  '/assets/images/carousel6.webp',
  '/assets/images/carousel7.png',
  '/assets/images/carousel8.webp',
  '/assets/images/carousel9.jpg',
]

const PRICING = [
  {
    name: 'Starter Studio', badge: 'Perfect for solo creators', priceLabel: 'Starting from', price: '$10,000',
    bullets: ['Single podcast setup', 'Quality microphone and camera', 'Basic lighting design', 'Cable management', 'Studio walkthrough'],
    popular: false, btnFilled: false,
  },
  {
    name: 'Pro Studio', badge: "Atlanta's most popular choice", priceLabel: '', price: 'Custom Quote',
    bullets: ['Everything in Starter', 'Premium quality equipment', 'Multi-camera configuration', 'Advanced audio setup', 'Additional styling session'],
    popular: true, btnFilled: true,
  },
  {
    name: 'Premium Studio + Design', badge: 'Complete studio experience', priceLabel: '', price: 'Custom Quote',
    bullets: ['Complete room design', 'Custom acoustic treatment', 'Furniture and decor', 'Brand integration', 'Ongoing support'],
    popular: false, btnFilled: false,
  },
]

const FAQS = [
  { q: 'Do I need to be tech-savvy?', a: 'Not at all. That is the entire point. We handle every technical aspect of the setup. When we leave, all you do is press one button to record. No settings to adjust, no software to learn.' },
  { q: 'How long does installation take?', a: 'Most studio installations are completed in a single day. We arrive in the morning, unbox and install everything, calibrate all equipment, and walk you through your new studio before we leave.' },
  { q: 'Can this be done in a home office?', a: 'Yes. The majority of our studios are built inside home offices, bedrooms, and living rooms. We assess your space and design a setup that works beautifully within it.' },
  { q: 'Will it work for video and YouTube?', a: 'Absolutely. Our studios are built for both audio and video podcasting. Multi-camera setups, professional lighting, and broadcast-quality audio are all part of what we install.' },
  { q: 'Do you provide post-installation support?', a: 'Yes. We offer ongoing monthly management that includes editing, distribution, show notes, and social media clips. Many clients start with the studio installation and then add management as their show grows.' },
  { q: 'What if I want to scale later?', a: 'Our setups are designed to grow with you. We future-proof every installation so adding cameras, upgrading equipment, or expanding your setup is straightforward when you are ready.' },
]

/* ---------- Count-up hook ---------- */
function useCountUp(target, run, duration = 1500) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)
  useEffect(() => {
    if (!run) return
    let start = null
    let done = false
    const step = (ts) => {
      if (done) return
      if (start === null) start = ts
      const p = Math.min(1, (ts - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) rafRef.current = requestAnimationFrame(step)
      else { done = true; setValue(target) }
    }
    rafRef.current = requestAnimationFrame(step)
    const settle = setTimeout(() => { done = true; setValue(target) }, duration + 200)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); clearTimeout(settle) }
  }, [target, run, duration])
  return value
}

export default function SetupPage() {
  const { openModal } = useBookingModal()
  const [scrolled, setScrolled] = useState(false)
  const [statsRun, setStatsRun] = useState(false)
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const statsRef = useRef(null)

  const years = useCountUp(15, statsRun)
  const hours = useCountUp(100, statsRun)

  /* Navbar shadow after 50px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Fade-up observer for all .su-fade elements */
  useEffect(() => {
    const els = document.querySelectorAll('.su-fade')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('su-visible') }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* Stats count-up trigger */
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setStatsRun(true) }),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* Carousel auto-advance */
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4000)
    return () => clearInterval(id)
  }, [paused])

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const navLinks = [
    ['How It Works', 'how-it-works'],
    ['Benefits', 'benefits'],
    ['Pricing', 'pricing'],
    ['FAQ', 'faq'],
  ]

  return (
    <>
      <title>Professional Podcast Studio Setup Built and Installed in Your Home | ATL Podcast Pros</title>
      <meta name="description" content="ATL Podcast Pros designs and installs professional podcast studios inside your home or office in Atlanta. One-button recording. Done in one day. Starting at $10,000." />
      <link rel="canonical" href="https://atlpodcastpros.com/setup" />
      <meta property="og:title" content="Professional Podcast Studio Setup | ATL Podcast Pros" />
      <meta property="og:description" content="Done-for-you podcast studio setup in Atlanta. Professional audio, video, and lighting installed in your home office." />
      <meta property="og:url" content="https://atlpodcastpros.com/setup" />

      <div className="su">
        {/* ===== NAV ===== */}
        <nav className={`su-nav ${scrolled ? 'su-nav--scrolled' : ''}`}>
          <div className="su-nav__inner">
            <img className="su-nav__logo" src="/LogoAPPWhiteATL.png" alt="ATL Podcast Pros" />
            <div className="su-nav__links">
              {navLinks.map(([label, id]) => (
                <button key={id} type="button" className="su-nav__link" onClick={() => scrollToId(id)}>{label}</button>
              ))}
            </div>
            <button type="button" className="su-btn su-btn--primary su-nav__cta" onClick={openModal}>Book a Call</button>
          </div>
        </nav>

        {/* ===== HERO ===== */}
        <header className="su-hero">
          <div className="su-hero__inner su-fade">
            <div className="su-hero__left">
              <p className="su-preheading">Professional Podcast Studio</p>
              <h1 className="su-h1">Professional Podcast Studio Setup Built and Installed in Your Home</h1>
              <p className="su-hero__sub">Stop wasting time on your research, tech confusion, and trial and error. ATL Podcast Pros designs and installs a fully functional podcast studio so you can focus on creating content.</p>
              <div className="su-hero__btns">
                <button type="button" className="su-btn su-btn--primary" onClick={openModal}>Schedule a Call</button>
                <button type="button" className="su-btn su-btn--outline" onClick={() => scrollToId('hero-video')}>Watch Video</button>
              </div>
              <div className="su-trust">
                <span className="su-trust__item"><Shield /> Building Studios Since 2010</span>
                <span className="su-trust__item"><Star s={15} /> Trusted by Atlanta Professionals</span>
                <span className="su-trust__item"><Check /> Satisfaction Guaranteed</span>
              </div>
            </div>
            <div className="su-hero__right">
              <div className="su-video" id="hero-video">
                <div className="su-video__frame">
                  <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/1162908588?h=f436b79bf3"
                    width="640"
                    height="360"
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="su-chips">
                <span className="su-chip">One-Button Recording</span>
                <span className="su-chip">Multi-Camera Setup</span>
                <span className="su-chip">Done in One Day</span>
              </div>
            </div>
          </div>
        </header>

        {/* ===== STATS BAR ===== */}
        <section className="su-stats" ref={statsRef}>
          <div className="su-stats__inner">
            <div className="su-stat">
              <div className="su-stat__num">{years}+</div>
              <div className="su-stat__label">Years of Studio Build Experience</div>
            </div>
            <div className="su-stat">
              <div className="su-stat__num">{hours}s</div>
              <div className="su-stat__label">Hours of Client Content Produced</div>
            </div>
            <div className="su-stat">
              <div className="su-stat__num su-stat__icon"><Broadcast /></div>
              <div className="su-stat__label">Broadcast-Grade Quality Every Build</div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="su-section" id="how-it-works">
          <div className="su-container">
            <div className="su-head su-fade">
              <p className="su-prelabel">How It Works</p>
              <h2 className="su-h2">From Empty Room to <span className="su-red">Elite Studio</span></h2>
            </div>
            <div className="su-steps">
              {STEPS.map((s, i) => (
                <div className="su-step su-fade" key={s.n} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="su-step__watermark">{s.n}</span>
                  <div className="su-step__body">
                    <span className="su-step__tag">Step {s.n}</span>
                    <h3 className="su-step__title">{s.title}</h3>
                    <p className="su-step__text">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="su-dots su-dots--static">
              {STEPS.map((s, i) => <span key={i} className={`su-dot ${i === 0 ? 'su-dot--active' : ''}`} />)}
            </div>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="su-section" id="benefits">
          <div className="su-container">
            <div className="su-head su-fade">
              <p className="su-prelabel">Why Choose Us</p>
              <h2 className="su-h2">Benefits That <span className="su-red">Transform</span> Your Podcast</h2>
            </div>
            <div className="su-grid su-grid--3">
              {BENEFITS.map((b, i) => (
                <div className="su-card su-fade" key={b.title} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="su-card__icon"><Check /></span>
                  <h3 className="su-card__title">{b.title}</h3>
                  <p className="su-card__text">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT'S INCLUDED ===== */}
        <section className="su-section">
          <div className="su-container">
            <div className="su-head su-fade">
              <p className="su-prelabel">What's Included</p>
              <h2 className="su-h2">Everything You Need, <span className="su-red">Nothing</span> You Don't</h2>
            </div>
            <div className="su-grid su-grid--3">
              {INCLUDED.map((it, i) => (
                <div className="su-incl su-fade" key={it.title} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="su-incl__sq" />
                  <div>
                    <h3 className="su-incl__title">{it.title}</h3>
                    <p className="su-incl__text">{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="su-section">
          <div className="su-container">
            <div className="su-head su-fade">
              <p className="su-prelabel">Testimonials</p>
              <h2 className="su-h2">Trusted by <span className="su-red">Atlanta's Best</span></h2>
            </div>
            <div className="su-grid su-grid--3">
              {TESTIMONIALS.map((t, i) => (
                <div className="su-tcard su-fade" key={t.name} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="su-tcard__stars">{[0, 1, 2, 3, 4].map((n) => <Star key={n} />)}</div>
                  <p className="su-tcard__quote">{t.quote}</p>
                  <div className="su-tcard__author">
                    <span className="su-tcard__name">{t.name}</span>
                    <span className="su-tcard__role">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CAROUSEL ===== */}
        <section className="su-section">
          <div className="su-container">
            <div className="su-head su-fade">
              <p className="su-prelabel">Bring Your Vision</p>
              <h2 className="su-h2">Bring Your Vision to <span className="su-red">Life</span></h2>
            </div>
            <div
              className="su-carousel su-fade"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="su-carousel__viewport">
                <div className="su-carousel__track" style={{ transform: `translateX(-${slide * 100}%)` }}>
                  {SLIDES.map((src, i) => (
                    <img className="su-carousel__img" src={src} alt={`ATL Podcast Pros studio build ${i + 1}`} key={src} loading={i === 0 ? 'eager' : 'lazy'} />
                  ))}
                </div>
              </div>
              <button type="button" className="su-carousel__arrow su-carousel__arrow--left" onClick={() => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length)} aria-label="Previous slide"><Arrow dir="left" /></button>
              <button type="button" className="su-carousel__arrow su-carousel__arrow--right" onClick={() => setSlide((s) => (s + 1) % SLIDES.length)} aria-label="Next slide"><Arrow dir="right" /></button>
            </div>
            <div className="su-dots">
              {SLIDES.map((s, i) => (
                <button key={s} type="button" className={`su-dot ${i === slide ? 'su-dot--active' : ''}`} onClick={() => setSlide(i)} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section className="su-section" id="pricing">
          <div className="su-container">
            <div className="su-head su-fade">
              <p className="su-prelabel">Investment</p>
              <h2 className="su-h2">Investment in Your <span className="su-red">Podcast Success</span></h2>
              <p className="su-head__sub">Flexible solutions for every creator. Book a consultation for an all-in quote.</p>
            </div>
            <div className="su-pricing">
              {PRICING.map((p, i) => (
                <div className={`su-price su-fade ${p.popular ? 'su-price--popular' : ''}`} key={p.name} style={{ transitionDelay: `${i * 80}ms` }}>
                  {p.popular && <span className="su-price__pop">Most Popular</span>}
                  <h3 className="su-price__name">{p.name}</h3>
                  <span className="su-price__badge">{p.badge}</span>
                  <div className="su-price__amount">
                    {p.priceLabel && <span className="su-price__from">{p.priceLabel}</span>}
                    <span className="su-price__value">{p.price}</span>
                  </div>
                  <ul className="su-price__list">
                    {p.bullets.map((b) => <li key={b}><Check /> {b}</li>)}
                  </ul>
                  <button type="button" className={`su-btn ${p.btnFilled ? 'su-btn--primary' : 'su-btn--outline'} su-price__btn`} onClick={openModal}>Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GUARANTEE ===== */}
        <section className="su-guarantee">
          <div className="su-container su-fade">
            <span className="su-guarantee__icon"><Shield /></span>
            <p className="su-prelabel">Our Promise</p>
            <h2 className="su-h2">Your Studio Will Work Or We'll Make It Right</h2>
            <p className="su-guarantee__text">We don't leave until your studio looks and sounds exactly to our standard. If anything is not right, we come back and fix it. Your satisfaction is our priority, not just our promise.</p>
            <button type="button" className="su-btn su-btn--primary" onClick={openModal}>Book an Intro Call</button>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="su-section" id="faq">
          <div className="su-container su-container--narrow">
            <div className="su-head su-fade">
              <p className="su-prelabel">FAQ</p>
              <h2 className="su-h2">Common <span className="su-red">Questions</span></h2>
            </div>
            <div className="su-faq su-fade">
              {FAQS.map((f, i) => {
                const open = openFaq === i
                return (
                  <div className={`su-faq__item ${open ? 'su-faq__item--open' : ''}`} key={f.q}>
                    <button type="button" className="su-faq__q" onClick={() => setOpenFaq(open ? -1 : i)} aria-expanded={open}>
                      <span>{f.q}</span>
                      <span className="su-faq__icon">{open ? '−' : '+'}</span>
                    </button>
                    <div className="su-faq__a" style={{ maxHeight: open ? '400px' : '0px' }}>
                      <p>{f.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="su-final">
          <div className="su-container su-fade">
            <h2 className="su-h2">Ready to Build Your <span className="su-red">Dream Studio?</span></h2>
            <p className="su-final__sub">Schedule a free consultation and let's discuss how we can transform your space into a professional podcast studio.</p>
            <button type="button" className="su-btn su-btn--primary su-btn--lg" onClick={openModal}>Schedule a Call</button>
            <p className="su-final__trust">No commitment required. This is just a chance to explore what is possible for you.</p>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="su-footer">
          <div className="su-footer__inner">
            <div className="su-footer__col">
              <img className="su-footer__logo" src="/LogoAPPWhiteATL.png" alt="ATL Podcast Pros" />
              <p className="su-footer__tag">Professional Podcast Studio Setup for Creators in Atlanta</p>
            </div>
            <div className="su-footer__col">
              <a className="su-footer__link" href="tel:+18555291404">(855) 529-1404</a>
              <a className="su-footer__link" href="mailto:info@atlpodcastpros.com">info@atlpodcastpros.com</a>
            </div>
            <div className="su-footer__col">
              <span className="su-footer__heading">Quick Links</span>
              <button type="button" className="su-footer__link" onClick={() => scrollToId('how-it-works')}>How It Works</button>
              <button type="button" className="su-footer__link" onClick={() => scrollToId('benefits')}>Benefits</button>
              <button type="button" className="su-footer__link" onClick={() => scrollToId('pricing')}>Pricing</button>
              <button type="button" className="su-footer__link" onClick={() => scrollToId('faq')}>FAQ</button>
              <a className="su-footer__link" href="https://atlpodcastpros.com">Main Site</a>
            </div>
          </div>
          <div className="su-footer__bar">
            <span>&copy; 2026 ATL Podcast Pros. All rights reserved.</span>
            <Link to="/privacy-policy" className="su-footer__link">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </>
  )
}
