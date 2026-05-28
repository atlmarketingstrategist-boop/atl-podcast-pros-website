import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './About.css'

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Quality',
    desc: 'We use broadcast-grade equipment and professional acoustic treatment on every project. No shortcuts. No "good enough."',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Simplicity',
    desc: 'Our clients should never have to touch a setting or troubleshoot a cable. We build studios that work with one button and keep them that way.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Results',
    desc: 'We measure success by what our clients accomplish: new clients won, authority built, and opportunities created. Not by equipment specs or episode counts.',
  },
]

const whyInHome = [
  {
    title: 'No scheduling friction',
    desc: 'When your studio is in your home, you record when inspiration strikes. 6 a.m., 10 p.m., or between meetings. No booking slots. No driving across town.',
  },
  {
    title: 'Your space, your brand',
    desc: 'Your studio reflects your brand. The aesthetic, the energy, the environment, it is uniquely yours. Not a generic rental room shared with fifty other podcasters.',
  },
  {
    title: 'Record anytime, not just when the studio is available',
    desc: 'Rental studios book up. Your permanent studio never does. Time-sensitive topics and spontaneous guests are never a problem.',
  },
]

export default function About() {
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
      <title>About ATL Podcast Pros | Atlanta's Podcast Production Agency</title>
      <meta name="description" content="ATL Podcast Pros is Atlanta's premier done-for-you podcast production agency. We build in-home studios and manage podcasts for busy professionals and creators." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="About ATL Podcast Pros | Atlanta's Podcast Production Agency" />
      <meta property="og:description" content="ATL Podcast Pros is Atlanta's premier done-for-you podcast production agency. We build in-home studios and manage podcasts for busy professionals and creators." />
      <meta property="og:url" content="https://atlpodcastpros.com/about" />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />

      {/* Hero */}
      <section
        className="page-hero about-hero"
        style={{ backgroundImage: 'url(/assets/images/hero-about1.jpg)' }}
      >
        <div className="page-hero__overlay" />
        <div className="container">
          <span className="section-eyebrow hero-line-1" style={{ color: 'rgba(166,30,49,0.9)' }}>About Us</span>
          <h1 className="hero-line-2">We're ATL Podcast Pros:<br />Atlanta's Podcast<br />Production Agency</h1>
          <p className="hero-sub">We built the done-for-you in-home studio model because busy professionals deserve a better way to build a voice.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section section-neutral">
        <div className="container">
          <div className="about-story fade-up" ref={fadeRef}>
            <div className="about-story__image">
              <img
                src="/assets/images/about-team1.jpg"
                alt="professional in-home podcast studio setup Atlanta"
                loading="lazy"
                width="1920"
                height="1440"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
              />
            </div>
            <div className="about-story__text">
              <div className="section-heading-wrap">
                <span className="section-eyebrow">Our Story</span>
                <h2>Built on a Simple Belief</h2>
              </div>
              <p>
                ATL Podcast Pros was built on a simple belief: busy professionals should not have to choose between running their business and building a powerful content presence.
              </p>
              <p>
                Our team watched influential pastors, business owners, speakers and subject-matter experts struggle with the same problem. They had something meaningful to say, but the logistics of podcasting kept getting in the way. Booking studio time. Learning equipment. Editing audio. Managing distribution. It was a second job they did not sign up for.
              </p>
              <p>
                So we created the done-for-you in-home studio model. We come to you, build a permanent studio inside your home or office, and handle every technical detail from setup to weekly management. Our clients never have to leave home, rent a room, or learn a single piece of tech.
              </p>
              <p style={{ fontFamily: 'Montserrat', fontWeight: 700, color: 'var(--color-dark)' }}>
                They focus on what they do best: talking. We handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why In-Home */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Our Differentiator</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>
                Why In-Home Beats a Rental Studio
              </h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', maxWidth: 520, margin: '16px auto 0' }}>
              We do not rent you a studio for an hour. We build one in your home, permanently, so you can record with one button, any time, without booking appointments or dealing with tech.
            </p>
          </div>
          <div className="why-inhome-grid">
            {whyInHome.map((item, i) => (
              <div
                className={`why-card dark-card fade-up fade-up-delay-${i + 1}`}
                key={item.title}
                ref={fadeRef}
              >
                <div className="why-card__dot" />
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Atlanta */}
      <section className="section section-neutral">
        <div className="container">
          <div className="about-atl fade-up" ref={fadeRef}>
            <div>
              <div className="section-heading-wrap">
                <span className="section-eyebrow">Why Atlanta</span>
                <h2>Atlanta Is Our Home.<br />And Yours.</h2>
              </div>
              <p>
                Atlanta has quietly become one of the most important entrepreneurial and creative hubs in the country. The city is home to Fortune 500 headquarters, one of the most active startup ecosystems in the Southeast, a thriving media and entertainment industry, and some of the most ambitious professionals anywhere.
              </p>
              <p>
                These are our people. Busy, driven, building something that matters, and with a story worth telling. ATL Podcast Pros was built specifically to serve Atlanta's professionals, entrepreneurs, and creators who are ready to build authority through content.
              </p>
              <p>
                We serve clients across metro Atlanta and beyond, with remote management available for clients outside the area.
              </p>
            </div>
            <div className="about-atl__img">
              <img
                src="/assets/images/about-atlanta.jpg"
                alt="Atlanta Georgia skyline"
                loading="lazy"
                width="1920"
                height="1440"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>What We Stand For</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>Our Values</h2>
            </div>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div
                className={`value-card dark-card fade-up fade-up-delay-${i + 1}`}
                key={v.title}
                ref={fadeRef}
              >
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container fade-up" ref={fadeRef}>
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>Work With Us</span>
          <h2>Ready to Work<br />With Our Team?</h2>
          <p>Book a free intro call. No pitch, no pressure, just a conversation about what you are building.</p>
          <div className="cta-buttons">
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/our-work" className="btn btn-outline btn-lg">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
