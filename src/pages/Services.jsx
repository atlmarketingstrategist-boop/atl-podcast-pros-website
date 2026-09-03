import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './Services.css'

export default function Services() {
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
      <title>Podcast Studio Setup & Management Services Atlanta | ATL Podcast Pros</title>
      <link rel="canonical" href="https://atlpodcastpros.com/services" />
      <meta name="description" content="Professional in-home podcast studio installation starting at $10K and ongoing podcast management from $698/mo. Serving Atlanta and beyond. Book a free call." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="Podcast Studio Setup & Management Services Atlanta | ATL Podcast Pros" />
      <meta property="og:description" content="Professional in-home podcast studio installation starting at $10K and ongoing podcast management from $698/mo. Serving Atlanta and beyond. Book a free call." />
      <meta property="og:url" content="https://atlpodcastpros.com/services" />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />

      {/* Hero */}
      <section
        className="page-hero"
        style={{ backgroundImage: 'url(/assets/images/hero-services1.png)' }}
      >
        <div className="page-hero__overlay" />
        <div className="container">
          <span className="section-eyebrow hero-line-1" style={{ color: 'rgba(166,30,49,0.9)' }}>Pricing and Services</span>
          <h1 className="hero-line-2">Podcast Studio Setup &amp;<br />Management Services in Atlanta</h1>
          <p className="hero-sub">Start with a studio. Add ongoing management when you are ready. No long-term commitments required.</p>
          <p className="hero-sub" style={{ marginTop: 12 }}>
            Not sure what your studio will cost? <Link to="/podcast-budget-calculator" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 700 }}>Use our free budget calculator</Link>.
          </p>
        </div>
      </section>

      {/* ======= SERVICE 01: STUDIO SETUP ======= */}
      <section className="section section-neutral">
        <div className="container">
          <div className="service-block fade-up" ref={fadeRef}>
            <div className="service-block__header">
              <div className="service-block__badge">Service 01</div>
              <div className="section-heading-wrap">
                <h2 className="service-block__title">Studio Setup</h2>
              </div>
              <p className="service-block__tagline">
                We design and build a permanent, professional podcast studio inside your home or office. No tech knowledge required. One button to record.
              </p>
            </div>
            <div className="service-block__body">
              <div className="service-block__includes">
                <h3>What's Included</h3>
                <ul className="checklist">
                  <li>In-home space assessment and studio design plan</li>
                  <li>Curated equipment list sourced for your specific setup</li>
                  <li>Professional delivery, installation and cable management</li>
                  <li>Professional lighting setup</li>
                  <li>Complete technical calibration, every setting dialed in</li>
                  <li>One-button recording workflow setup</li>
                  <li>Live recording session to confirm everything is perfect</li>
                  <li>30-day post-setup support by phone and email</li>
                </ul>
                <div className="trust-line" style={{ marginTop: 28 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  No long-term contracts required
                </div>
                <div className="trust-line">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  You retain full ownership of your studio and all assets
                </div>
              </div>
              <div className="service-block__pricing">
                <div className="pricing-card">
                  <div className="pricing-card__label">Studio Setup</div>
                  <div className="pricing-card__price">
                    <span className="pricing-card__from">Starting at</span>
                    <span className="pricing-card__amount">$10,000</span>
                  </div>
                  <p className="pricing-card__note">
                    Final investment depends on room size, equipment tier, and scope. We will give you a firm quote after an in-person visit by a member of our team.
                  </p>
                  <button onClick={openModal} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Schedule a Free Call
                  </button>
                  <p className="pricing-card__sub">Free 20-min intro call. No pressure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SERVICE 02: ONGOING MANAGEMENT ======= */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="service-block__badge" style={{ display: 'inline-block' }}>Service 02</div>
            <div className="section-heading-wrap centered" style={{ marginTop: 12 }}>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>
                Ongoing Podcast Management
              </h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', maxWidth: 580, margin: '16px auto 0' }}>
              You record. We handle editing, distribution, show notes, and social media content every single week.
            </p>
          </div>

          <div className="tiers-grid">
            {/* Tier 1: Complete Production */}
            <div className="tier-card fade-up fade-up-delay-1" ref={fadeRef}>
              <div className="tier-card__header">
                <h3 className="tier-card__name">Complete Production</h3>
                <div className="tier-card__price">
                  <span className="tier-card__amount">$698</span>
                  <span className="tier-card__period">/month</span>
                </div>
                <p className="tier-card__desc">Everything you need to publish a polished episode every week.</p>
              </div>
              <ul className="checklist checklist--light">
                <li>Up to 4 episodes per month</li>
                <li>Professional audio editing and mastering</li>
                <li>Video editing (if applicable)</li>
                <li>Episode distribution to all major platforms</li>
                <li>SEO-optimized show notes for each episode</li>
                <li>Monthly listener analytics report</li>
                <li>Dedicated producer, one point of contact</li>
              </ul>
              <button onClick={openModal} className="btn btn-primary" style={{ marginTop: 36, width: '100%', justifyContent: 'center' }}>
                Get Started
              </button>
            </div>

            {/* Tier 2: Complete Production + Social (Most Popular) */}
            <div className="tier-card tier-card--featured fade-up fade-up-delay-2" ref={fadeRef}>
              <div className="tier-card__badge">Most Popular</div>
              <div className="tier-card__header">
                <h3 className="tier-card__name">Complete Production + Social</h3>
                <div className="tier-card__price">
                  <span className="tier-card__amount">$1,098</span>
                  <span className="tier-card__period">/month</span>
                </div>
                <p className="tier-card__desc">Full production plus a social media content system built around every episode you record.</p>
              </div>
              <ul className="checklist checklist--light">
                <li>Everything in Complete Production</li>
                <li>3-5 short-form social media clips per episode</li>
                <li>Caption copy for all social posts</li>
                <li>We create all content and publish consistently across your social platforms</li>
                <li>Priority support and faster turnaround</li>
              </ul>

              {/* Short-form content video example */}
              <div style={{
                width: '100%',
                maxWidth: '320px',
                margin: '0 auto',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
              }}>
                <video
                  src="/assets/videos/shortform-example.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <button onClick={openModal} className="btn btn-primary" style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
                Get Started
              </button>
            </div>
          </div>

          <div className="trust-line trust-line--light fade-up" ref={fadeRef} style={{ marginTop: 36, justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            No long-term contracts required, month-to-month, always
          </div>
          <div className="trust-line trust-line--light" style={{ marginTop: 12, justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            You retain full ownership of your podcast and every asset we produce
          </div>
        </div>
      </section>

      {/* ======= COMPARISON NOTE ======= */}
      <section className="section section-neutral">
        <div className="container">
          <div className="compare-note fade-up" ref={fadeRef}>
            <div className="compare-note__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h3>Not sure which is right for you?</h3>
              <p>Most clients start with Studio Setup and add Ongoing Management once their studio is built. Book a free call and our team will recommend the right path for your goals and budget. No sales pressure.</p>
              <button onClick={openModal} className="btn btn-primary" style={{ marginTop: 24 }}>Schedule a Free Call</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container fade-up" ref={fadeRef}>
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>Ready?</span>
          <h2>Let's Build Something<br />Worth Listening To</h2>
          <p>Schedule a free intro call. We will ask a few questions, assess your goals, and tell you exactly what we would recommend.</p>
          <div className="cta-buttons">
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/how-it-works" className="btn btn-outline btn-lg">See How It Works</Link>
          </div>
        </div>
      </section>
    </>
  )
}
