import { useEffect, useRef, useState } from 'react'
import { useBookingModal } from '../components/BookingModal'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { Link } from 'react-router-dom'
import './OurWork.css'

const StarRating = () => (
  <div className="testimonial-card-ow__stars" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((n) => (
      <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

const testimonials = [
  {
    quote: "From start to finish, Ben with ATL Podcast Pros was professional, friendly, and highly communicative. He went above and beyond, even adjusting his schedule to ensure this very important project was completed successfully and on time. We highly recommend ATL Podcast Pros for your next podcast project!",
    name: "Executive",
    show: "2819 Church",
  },
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
  const { openModal } = useBookingModal()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    fadeRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const fadeRef = (el) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  return (
    <>
      <title>Podcast Studio Portfolio & Client Results | ATL Podcast Pros</title>
      <link rel="canonical" href="https://atlpodcastpros.com/our-work" />
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

      {/* Transformations */}
      <section className="section section-dark">
        <div className="container">

          {/* Section heading */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="accent-bar" style={{ margin: '0 auto 16px' }} />
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: '#FFFFFF',
              letterSpacing: '0.03em',
              marginBottom: '16px'
            }}>
              Studio Transformations
            </h2>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Drag the slider to see the full transformation. Every studio is built inside a client's existing space.
            </p>
          </div>

          {/* Three sliders stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

            <BeforeAfterSlider
              beforeSrc="/assets/images/before2819.jpg"
              afterSrc="/assets/images/after2819.jpg"
              beforeLabel="Before"
              afterLabel="After"
              clientName="2819 Church — Content Studio"
            />

            <BeforeAfterSlider
              beforeSrc="/assets/images/before2wc.png"
              afterSrc="/assets/images/after2wc.png"
              beforeLabel="Before"
              afterLabel="After"
              clientName="Two Waters Capital — Podcast Studio"
            />

            <BeforeAfterSlider
              beforeSrc="/assets/images/beforebrandi.png"
              afterSrc="/assets/images/afterbrandi.png"
              beforeLabel="Before"
              afterLabel="After"
              clientName="Brandi Raines — Taking Life by the Raines"
            />

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
              <a
                href="https://youtu.be/bimC4i60L-E"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study__thumbnail-link"
                style={{ marginTop: 0 }}
              >
                <img
                  src="/socratesthumbnail.png"
                  alt="Good News with Socrates podcast by ATL Podcast Pros"
                  className="case-study__thumbnail"
                  loading="lazy"
                />
              </a>
              <div className="case-study__tag">pastor turned podcaster</div>
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
                  <span className="case-result__num">2 Year+</span>
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
                <StarRating />
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
