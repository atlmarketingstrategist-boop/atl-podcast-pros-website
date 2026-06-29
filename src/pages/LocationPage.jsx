import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './LocationPage.css'

const whyInHome = [
  {
    title: 'No Commute, No Booking Windows',
    desc: 'Your studio lives in your home. Record before sunrise, between meetings, or after a long day. No driving across town, no availability calendars, no wasted time.',
  },
  {
    title: 'Record Any Time You Want',
    desc: 'A rental studio is only available when it is available. Your permanent in-home studio is always available. Time-sensitive topics and spontaneous guests are never a problem.',
  },
  {
    title: 'A Permanent Setup Built for You',
    desc: 'We install everything once and tune it perfectly. From that day forward you sit down, press one button, and sound like a professional. No setup, no troubleshooting, no tech.',
  },
]

const services = [
  {
    title: 'Studio Setup',
    desc: 'We design, source, and install a complete broadcast-quality podcast studio inside your home or office. Acoustic treatment, professional microphones, camera, lighting, and cable management all handled in a single day.',
  },
  {
    title: 'Podcast Management',
    desc: 'After your studio is built, we can handle every aspect of your weekly production: editing, mixing, show notes, distribution, and social content. You record, we handle the rest.',
  },
]

export default function LocationPage({ locations }) {
  const { slug } = useParams()
  const { openModal } = useBookingModal()
  const fadeRefs = useRef([])

  const loc = locations.find((l) => l.slug === slug)

  useEffect(() => {
    if (!loc) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    fadeRefs.current = []
    const els = fadeRefs.current
    document.querySelectorAll('.loc-fade').forEach((el) => {
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [loc, slug])

  if (!loc) {
    return (
      <div className="loc-404">
        <h1>Page Not Found</h1>
        <p>The location page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    )
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ATL Podcast Pros',
    description: loc.metaDescription,
    url: `https://atlpodcastpros.com/locations/${loc.slug}`,
    telephone: '+18555291404',
    email: 'info@atlpodcastpros.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.location,
      addressRegion: loc.state,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: loc.location,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: loc.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <title>{loc.metaTitle}</title>
      <link rel="canonical" href={`https://atlpodcastpros.com/locations/${loc.slug}`} />
      <meta name="description" content={loc.metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content={loc.metaTitle} />
      <meta property="og:description" content={loc.metaDescription} />
      <meta property="og:url" content={`https://atlpodcastpros.com/locations/${loc.slug}`} />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="loc-hero">
        <div className="loc-hero__overlay" />
        <div className="container">
          <div className="loc-hero__inner">
            <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>
              {loc.location}, {loc.state}
            </span>
            <h1 className="loc-hero__title">{loc.heroHeading}</h1>
            <p className="loc-hero__sub">
              Professional in-home podcast studio installation and management, delivered directly to your door. No commute, no rental fees, no tech headaches.
            </p>
            <div className="loc-hero__cta">
              <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
              <Link to="/services" className="btn btn-outline btn-lg">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section section-neutral">
        <div className="container">
          <div className="loc-intro loc-fade">
            <div className="loc-intro__text">
              <div className="section-heading-wrap">
                <span className="section-eyebrow">Serving {loc.location}</span>
                <h2>Your Studio, In Your Home</h2>
              </div>
              <p>{loc.intro}</p>
              <p>
                Our done-for-you model means you never have to research equipment, learn audio software, or troubleshoot a cable. We handle every detail from the initial design consultation through the day of installation and beyond. You show up, sit down, and record.
              </p>
              <p>
                We have built studios for {loc.audienceDescription}. Whatever your background, if you have expertise worth sharing, we can build you a studio that sounds and looks like a professional production from day one.
              </p>
            </div>
            <div className="loc-intro__image">
              <img
                src={loc.image}
                alt={`Aerial view of ${loc.location}, ${loc.state}`}
                loading="lazy"
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why In-Home */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 loc-fade">
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Why In-Home</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>
                A Better Way to Podcast in {loc.location}
              </h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', maxWidth: 520, margin: '16px auto 0' }}>
              Rental studios charge by the hour and book up fast. Your permanent in-home studio costs nothing per session and is always ready.
            </p>
          </div>
          <div className="loc-why-grid">
            {whyInHome.map((item, i) => (
              <div className={`loc-why-card dark-card loc-fade loc-fade-delay-${i + 1}`} key={item.title}>
                <div className="loc-why-card__dot" />
                <h3 className="loc-why-card__title">{item.title}</h3>
                <p className="loc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-neutral">
        <div className="container">
          <div className="text-center mb-12 loc-fade">
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow">What We Do</span>
              <h2>Our Services in {loc.location}</h2>
            </div>
          </div>
          <div className="loc-services-grid">
            {services.map((svc, i) => (
              <div className={`loc-service-card loc-fade loc-fade-delay-${i + 1}`} key={svc.title}>
                <h3 className="loc-service-card__title">{svc.title}</h3>
                <p className="loc-service-card__desc">{svc.desc}</p>
                <Link to="/services" className="loc-service-card__link" aria-label={`Learn more about our ${svc.title} service`}>
                  Learn More
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section section-dark">
        <div className="container">
          <div className="loc-proof loc-fade">
            <div className="loc-proof__text">
              <div className="section-heading-wrap">
                <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Who We Serve</span>
                <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>
                  Built for {loc.location}'s Professionals
                </h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                Our clients are busy professionals who have something valuable to say and a business or ministry to run. They do not have time to become audio engineers. They need a studio that works from day one and a team that keeps it running.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                We have served {loc.audienceDescription}. Our clients use their podcasts to generate new business, build authority in their market, grow their ministry audience, and create a content library that works for them around the clock.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                If you are serious about building a platform and you need a professional studio to match, this is the right place to start.
              </p>
            </div>
            <div className="loc-proof__stats">
              <div className="loc-proof__stat">
                <span className="loc-proof__stat-num">1 Day</span>
                <span className="loc-proof__stat-label">Installation time</span>
              </div>
              <div className="loc-proof__stat">
                <span className="loc-proof__stat-num">0</span>
                <span className="loc-proof__stat-label">Tech skills required</span>
              </div>
              <div className="loc-proof__stat">
                <span className="loc-proof__stat-num">100%</span>
                <span className="loc-proof__stat-label">Content ownership</span>
              </div>
              <div className="loc-proof__stat">
                <span className="loc-proof__stat-num">Free</span>
                <span className="loc-proof__stat-label">Intro call</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-neutral">
        <div className="container">
          <div className="text-center mb-12 loc-fade">
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow">{loc.location} FAQ</span>
              <h2>Common Questions from {loc.location} Clients</h2>
            </div>
          </div>
          <div className="loc-faq-list">
            {loc.faqs.map((faq, i) => (
              <div className={`loc-faq-item loc-fade loc-fade-delay-${i + 1}`} key={i}>
                <h3 className="loc-faq-item__q">{faq.q}</h3>
                <p className="loc-faq-item__a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container loc-fade">
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>
            Serving {loc.location}, {loc.state}
          </span>
          <h2>Ready to Build Your<br />Studio in {loc.location}?</h2>
          <p>Book a free 20-minute intro call. We will walk through your space, your goals, and exactly what we would build for you.</p>
          <div className="cta-buttons">
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/services" className="btn btn-outline btn-lg">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
