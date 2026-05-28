import { useEffect, useRef, useState } from 'react'
import { useBookingModal } from '../components/BookingModal'
import { Link } from 'react-router-dom'
import './OurWork.css'

const testimonials = [
  {
    quote: "Best to do it! Thank you for my setup. Professional and timely service.",
    name: "Jason Stephens",
    show: "Owner, 12:16 Entertainment",
  },
  {
    quote: "Taught me not only about the equipment I need to buy but also how to set it up and have it running efficiently with great quality!",
    name: "Area 31 Podcast",
    show: "Host, Area 31",
  },
]

const stats = [
  { num: '1M+', label: 'YouTube Views Generated' },
  { num: '195+', label: 'Countries Reached' },
  { num: '2010', label: 'Year We Started' },
]

function useCountUp(target, duration = 2000, isVisible) {
  const [count, setCount] = useState('0')

  useEffect(() => {
    if (!isVisible) return
    const targetStr = String(target)
    const match = targetStr.match(/^(\d+)(.*)$/)
    if (!match) { setCount(targetStr); return }
    const numTarget = parseInt(match[1], 10)
    const suffix = match[2]
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * numTarget)
      setCount(String(current) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isVisible, target, duration])

  return count
}

function StatItem({ num, label }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const display = useCountUp(num, 1800, visible)

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-item__num">{display}</span>
      <span className="stat-item__label">{label}</span>
    </div>
  )
}

export default function OurWork() {
  const fadeRefs = useRef([])
  const caseVideoRef = useRef(null)
  const { openModal } = useBookingModal()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    fadeRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Lazy-load case study video only when in view
  useEffect(() => {
    const video = caseVideoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const src = video.dataset.src
          if (src && !video.src) {
            video.src = src
            video.load()
          }
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const fadeRef = (el) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  return (
    <>
      <title>Podcast Studio Portfolio & Client Results | ATL Podcast Pros</title>
      <meta name="description" content="See real podcast studios built by ATL Podcast Pros. 1M+ YouTube views generated. Clients in every country. Building studios and managing productions since 2010." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="Podcast Studio Portfolio & Client Results | ATL Podcast Pros" />
      <meta property="og:description" content="See real podcast studios built by ATL Podcast Pros. 1M+ YouTube views generated. Clients in every country. Building studios and managing productions since 2010." />
      <meta property="og:url" content="https://atlpodcastpros.com/our-work" />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />

      {/* Hero -- text only, dark background with grain */}
      <section className="page-hero ow-hero grain-overlay">
        <div className="page-hero__overlay" style={{ background: 'rgba(17,17,17,0.9)' }} />
        <div className="container">
          <span className="section-eyebrow hero-line-1" style={{ color: 'rgba(166,30,49,0.9)' }}>Portfolio</span>
          <h1 className="hero-line-2">Real Podcast Studios.<br />Real Results.</h1>
          <p className="hero-sub">
            Our clients do not just have a podcast. They have a platform. A growing audience. A credibility signal that opens doors before a single sales conversation begins.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="section section-neutral">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow">Transformations</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>Before and After</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', maxWidth: 540, margin: '16px auto 0' }}>
              Most of our clients start with an empty bedroom, a home office, or a spare room. Here is what we do with it.
            </p>
          </div>
          <div className="before-after fade-up" ref={fadeRef}>
            <div className="before-after__col">
              <img
                src="/Beforeafter4.png"
                alt="home living room before podcast studio installation"
                loading="lazy"
                width="1200"
                height="900"
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
              />
              <p className="before-after__caption">A spare bedroom, home office, or empty corner. The starting point for every project.</p>
            </div>
            <div className="before-after__arrow">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
            <div className="before-after__col">
              <img
                src="/beforeafter2.png"
                alt="professional podcast studio installed in Atlanta home"
                loading="lazy"
                width="1200"
                height="900"
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
              />
              <p className="before-after__caption">A broadcast-quality studio that is camera-ready and operational with one button. No tech knowledge required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip section-dark">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <StatItem key={s.label} num={s.num} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study: Socrates */}
      <section className="section section-neutral">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow">Client Story</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>
                Featured: Good News with Socrates
              </h2>
            </div>
          </div>
          <div className="case-study fade-up" ref={fadeRef}>
            <div className="case-study__image">
              <video
                ref={caseVideoRef}
                data-src="/timelapse-landscape.mov"
                poster="/assets/images/afterroom1.jpeg"
                preload="none"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block' }}
              />
              <div className="case-study__tag">pastor turned podcaster</div>
              <a
                href="https://youtu.be/bimC4i60L-E"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study__thumbnail-link"
              >
                <img
                  src="/socratesthumbnail.png"
                  alt="Good News with Socrates podcast by ATL Podcast Pros"
                  className="case-study__thumbnail"
                  loading="lazy"
                  width="320"
                  height="180"
                />
              </a>
            </div>
            <div className="case-study__content">
              <h3>Socrates Charos</h3>
              <p className="case-study__show">Good News with Socrates</p>
              <p className="case-study__summary">
                Socrates is a 77-year-old pastor turned podcaster with no prior tech experience. Our team installed his full podcast studio in person in a single day. We have managed his podcast remotely ever since. Within a few months of launching his YouTube channel from scratch, Socrates surpassed 12,000 subscribers and became monetized. He has been a client for over a year and continues to grow.
              </p>
              <div className="case-study__results">
                <div className="case-result">
                  <span className="case-result__num">12K+</span>
                  <span className="case-result__label">YouTube Subscribers</span>
                </div>
                <div className="case-result">
                  <span className="case-result__num">1 Day</span>
                  <span className="case-result__label">Setup Time</span>
                </div>
                <div className="case-result">
                  <span className="case-result__num">1 Year+</span>
                  <span className="case-result__label">Ongoing Client</span>
                </div>
              </div>
              <blockquote className="case-study__quote">
                "I want to thank Mr. Benjamin in Atlanta. He's working behind the scenes and he put everything together. He brought the equipment here and he put together a beautiful studio for us to minister the gospel around the world."
                <cite>Socrates Charos, Good News with Socrates</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Client Voices</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>
                What Our Clients Say
              </h2>
            </div>
          </div>
          <div className="testimonials-grid-ow">
            {testimonials.map((t, i) => (
              <div
                className={`testimonial-card-ow dark-card fade-up fade-up-delay-${i + 1}`}
                key={i}
                ref={fadeRef}
              >
                <div className="testimonial-card-ow__quote">"</div>
                <p className="testimonial-card-ow__text">{t.quote}</p>
                <div className="testimonial-card-ow__footer">
                  <span className="testimonial-card-ow__name">{t.name}</span>
                  <span className="testimonial-card-ow__show">{t.show}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container fade-up" ref={fadeRef}>
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>Your Turn</span>
          <h2>Your Podcast Could<br />Be Next</h2>
          <p>Book a free intro call and let us talk about what we would build for your goals, your niche, and your audience.</p>
          <div className="cta-buttons">
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/services" className="btn btn-outline btn-lg">View Services and Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
