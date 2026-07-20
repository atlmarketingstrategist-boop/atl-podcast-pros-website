import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './Home.css'

const featuredClients = [
  {
    name: "Socrates Charos",
    show: "Good News With Socrates",
    result: "12K subscribers in first year",
    image: "/socrates-logo.png",
  },
  {
    name: "Two Waters Capital",
    show: "Lessons The Hard Way",
    result: "In-home Pro Studio Install",
    image: "/brian-logo.png",
  },
  {
    name: "Brandi Raines",
    show: "Taking Life by the Raines",
    result: "Nationwide Audience Post-Launch",
    image: "/brandi-logo.png",
  },
]

const niches = [
  "Faith", "Education", "Real Estate", "Women's Empowerment", "Finance & Investing", "Marriage",
]

const testimonials = [
  {
    quote: "ATL Podcast Pros is truly the best of the best. They helped me to do what God has called me to do with the Good News with Socrates podcast.",
    name: "Socrates",
    role: "Good News with Socrates",
  },
  {
    quote: "If you are looking for someone who can help you expand your reach, increase your visibility, and connect you with quality podcast hosts, I recommend ATL Podcast Pros without hesitation. If I could give them 10 stars, I would. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    name: "Joy",
    role: "Google Review",
  },
  {
    quote: "I appreciate their help so much. My space has been transformed beautifully and is ready to book. Very kind people with great attention to detail and execute with excellence. Highly recommended.",
    name: "Laii",
    role: "Google Review",
  },
]

const StarRating = () => (
  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((n) => (
      <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

export default function Home() {
  const fadeRefs = useRef([])
  const { openModal } = useBookingModal()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    fadeRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const fadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  return (
    <>
      <title>In-Home Podcast Studio Setup Atlanta | ATL Podcast Pros</title>
      <link rel="canonical" href="https://atlpodcastpros.com/" />
      <meta name="description" content="Atlanta's done-for-you in-home podcast studio service. We design, install and manage your studio. One button to record. Book your free intro call." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="In-Home Podcast Studio Setup Atlanta | ATL Podcast Pros" />
      <meta property="og:description" content="Atlanta's done-for-you in-home podcast studio service. We design, install and manage your studio. One button to record. Starting at $10K. Book your free intro call today." />
      <meta property="og:url" content="https://atlpodcastpros.com/" />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />

      {/* ======= HERO ======= */}
      <section className="home-hero grain-overlay">
        <div className="home-hero__bg-img" />
        <div className="home-hero__overlay" />
        <div className="home-hero__scroll-indicator">
          <div className="scroll-arrow" />
        </div>
        <div className="container home-hero__content">
          <span className="section-eyebrow hero-line-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Atlanta's Premier In-Home Podcast Studio Service
          </span>
          <h1 className="home-hero__headline display-text">
            <span className="hero-line-1">Your In-Home</span><br />
            <span className="hero-line-2 home-hero__headline-accent">Podcast Studio</span><br />
            <span className="hero-line-3">Setup in Atlanta</span>
          </h1>
          <p className="home-hero__sub hero-sub">
            Your idea becomes a fully produced, professionally distributed podcast without you ever leaving home. We handle the studio, the tech, and the production. You just show up and talk.
          </p>
          <div className="cta-buttons hero-btns" style={{ justifyContent: 'flex-start' }}>
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/how-it-works" className="btn btn-outline btn-lg">See How It Works</Link>
          </div>
        </div>
      </section>

      {/* ======= DIFFERENTIATOR BANNER ======= */}
      <section className="diff-bar">
        <div className="diff-bar__inner">
          <span className="diff-bar__item">Studio-Grade Quality</span>
          <span className="diff-bar__divider" />
          <span className="diff-bar__item">You Maintain 100% Ownership</span>
          <span className="diff-bar__divider" />
          <span className="diff-bar__item">One Button to Record</span>
        </div>
      </section>

      {/* ======= CHECKLIST DOWNLOAD BANNER ======= */}
      <section className="checklist-banner">
        <p className="checklist-banner__text">
          Free Download: The Complete Podcast Studio Setup Checklist
        </p>
        <a
          className="checklist-banner__btn"
          href="https://api.leadconnectorhq.com/widget/form/35xjK13efvByA1hPYwdn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Free
        </a>
      </section>

      {/* SCROLL ANIMATION PLACEHOLDER — Re-insert ScrollAnimation component here when new video is ready */}

      {/* ======= HOW IT WORKS TEASER ======= */}
      <section className="section section-neutral" style={{ paddingTop: '48px' }}>
        <div className="container">
          <div className="text-center mb-12" ref={fadeRef}>
            <div className="fade-up section-heading-wrap centered">
              <span className="section-eyebrow">The Process</span>
              <h2 className="steps-heading">Studio-Quality Sound in Three Steps</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: 520, margin: '16px auto 0', fontFamily: 'var(--font-body)' }}>
                From your first call to your first published episode, our team manages every step of the journey.
              </p>
            </div>
          </div>
          <div className="steps-grid">
            {[
              {
                num: '01',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                ),
                title: 'Discovery',
                desc: 'We assess your vision, goals and available space to create a customized plan for your podcast.',
              },
              {
                num: '02',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                ),
                title: 'Setup',
                desc: 'Our team arrives, installs everything and calibrates every setting. Then, we hand over a studio that runs with one button.',
              },
              {
                num: '03',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                ),
                title: 'Launch',
                desc: 'We produce your first episode, design creative assets and distribute your podcast to all major platforms where your audience is listening.',
              },
            ].map((step, i) => (
              <div
                className={`step-card fade-up fade-up-delay-${i + 1}`}
                key={step.num}
                ref={fadeRef}
              >
                <span className="step-card__num">{step.num}</span>
                <div className="step-card__icon">{step.icon}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 fade-up" ref={fadeRef}>
            <Link to="/how-it-works" className="btn btn-outline-dark">
              See the Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* ======= SERVICES OVERVIEW ======= */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>What We Offer</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800 }}>
                Two Ways We Help You Podcast
              </h2>
            </div>
          </div>
          <div className="services-grid">
            {[
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
                title: 'Studio Setup',
                desc: 'We design and build a permanent, professional podcast studio inside your home or office. No tech knowledge required. One button to record.',
                bullets: ['Full equipment sourcing and installation', 'Professional lighting setup', 'Technical calibration and one-button workflow'],
                delay: 1,
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
                title: 'Ongoing Management',
                desc: 'You record. We handle editing, distribution, show notes, and social media clips every single week. Your podcast grows while you focus on your business.',
                bullets: ['Professional audio and video editing', 'Distribution to all major platforms', 'Show notes and social media clips'],
                delay: 2,
              },
            ].map((svc) => (
              <div className={`service-card fade-up fade-up-delay-${svc.delay}`} key={svc.title} ref={fadeRef}>
                <div className="service-card__icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <ul className="service-card__list">
                  {svc.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Link to="/services" className="btn btn-primary" style={{ marginTop: 28 }} aria-label={`Learn more about our ${svc.title} service`}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= NICHE MARQUEE ======= */}
      <section className="marquee-section">
        <div className="marquee-section__label">Trusted by Podcasters Across Various Niches</div>
        <div className="marquee-track" aria-hidden="true">
          {/* Four copies: animation moves translateX(-25%) so first copy exits as fourth enters — zero gap, zero pause */}
          <div className="marquee-inner">
            {[...niches, ...niches, ...niches, ...niches].map((name, i) => (
              <span className="marquee-chip" key={i}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FEATURED CLIENTS ======= */}
      <section className="section section-neutral">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow">Featured Clients</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800 }}>
                Featured Clients
              </h2>
            </div>
          </div>
          <div className="home-clients-grid">
            {featuredClients.map((c, i) => (
              <div
                className={`home-client-card fade-up fade-up-delay-${i + 1}`}
                key={c.show}
                ref={fadeRef}
              >
                <div className="home-client-card__thumb">
                  <img src={c.image} alt={c.show} loading="lazy" width="400" height="400" />
                </div>
                <div className="home-client-card__body">
                  <h3 className="home-client-card__show">{c.show}</h3>
                  <p className="home-client-card__name">{c.name}</p>
                  <span className="home-client-card__result">{c.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= TESTIMONIALS ======= */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Client Voices</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800 }}>
                What Our Clients Say
              </h2>
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div
                className={`testimonial-card dark-card fade-up fade-up-delay-${i + 1}`}
                key={i}
                ref={fadeRef}
              >
                <StarRating />
                <div className="testimonial-card__quote">"</div>
                <p className="testimonial-card__text">{t.quote}</p>
                <div className="testimonial-card__footer">
                  <div>
                    <span className="testimonial-card__name">{t.name}</span>
                    <span className="testimonial-card__show">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FINAL CTA ======= */}
      <section className="cta-section home-page-cta">
        <div className="container">
          <div className="fade-up" ref={fadeRef}>
            <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Ready to Start?</span>
            <h2>Ready to Build<br />Your Studio?</h2>
            <p>Book a free 20-minute intro call. No pressure, no tech jargon, just a conversation about your goals.</p>
            <div className="cta-buttons">
              <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
              <Link to="/our-work" className="btn btn-outline btn-lg">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
