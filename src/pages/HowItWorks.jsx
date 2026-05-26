import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './HowItWorks.css'

const phases = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'Free intro call. Zero pressure.',
    body: 'Our free intro call is where we get to know you and your podcasting vision. We learn about your niche, your expertise, and your goals and we determine together if we are the right fit. This is a no-pressure conversation that sets the foundation for everything that follows.',
    flip: false,
    image: '/assets/images/hiw-discovery1.jpg',
  },
  {
    num: '02',
    title: 'Setup',
    subtitle: 'One button to record.',
    body: 'Our team handles everything from equipment sourcing to installation and full technical calibration. We guide you through getting the right gear for your setup, and we configure every piece of equipment so you never have to touch a setting. The setup is typically done in one day.',
    flip: true,
    video: '/assets/images/setup-timelapse-.mov',
    image: '/assets/images/hiw-setup1.jpg',
  },
  {
    num: '03',
    title: 'Launch',
    subtitle: 'A full-scale podcast launch.',
    body: 'We produce your first episode from start to finish. Our team creates all creative assets including your podcast logo, YouTube banner, and episode thumbnail. We write all SEO copy including your show description, set up your YouTube channel, and distribute your podcast across all major platforms. This is not just a first episode. It is a carefully produced podcast channel and a digital footprint that positions you as an authority in your niche.',
    flip: false,
    image: '/assets/images/hiw-launch2.jpg',
  },
  {
    num: '04',
    title: 'Ongoing Management',
    subtitle: 'You record. We handle everything else.',
    body: 'Week after week, we handle editing, distribution, show notes, and social media content. Our team picks up your raw recording, edits it to broadcast quality, writes SEO-optimized show notes, distributes to every major platform, and delivers 3-5 social clips ready to post. You own your podcast and every asset we produce. Your management is month-to-month with no long-term contracts.',
    flip: true,
    image: '/assets/images/hiw-ongoing1.jpg',
  },
]

const faqs = [
  {
    q: 'Do I need to buy my own equipment?',
    a: 'We do not purchase equipment for you. We provide a carefully crafted equipment list and you order everything directly to your home or office. When our team arrives on setup day, we unbox every item, install and configure all equipment, and take the packaging and trash with us when we leave. It is a fully white-glove experience.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most studio installations are completed in a single day. Complex multi-camera setups or larger rooms may require two days. We will give you an accurate timeline during the Discovery call.',
  },
  {
    q: 'Do you work outside Atlanta?',
    a: 'Yes, we do. We work with clients across the country. For clients outside of the Atlanta metro area, we add a travel fee to the setup package. Our ongoing management is handled fully remotely.',
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No long-term contracts required. Our ongoing management packages are month-to-month. We earn your business every month by delivering results, not by trapping you in an agreement.',
  },
]

export default function HowItWorks() {
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
      <title>How Our Podcast Studio Setup Process Works | ATL Podcast Pros</title>
      <meta name="description" content="See exactly how ATL Podcast Pros transforms your space into a professional podcast studio. Discovery, setup, launch and ongoing management. Book a free call." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="How Our Podcast Studio Setup Process Works | ATL Podcast Pros" />
      <meta property="og:description" content="See exactly how ATL Podcast Pros transforms your space into a professional podcast studio. Discovery, setup, launch and ongoing management. Book a free call." />
      <meta property="og:url" content="https://atlpodcastpros.com/how-it-works" />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need to buy my own equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We do not purchase equipment for you. We provide a carefully crafted equipment list and you order everything directly to your home or office. When our team arrives on setup day, we unbox every item, install and configure all equipment, and take the packaging and trash with us when we leave. It is a fully white-glove experience."
            }
          },
          {
            "@type": "Question",
            "name": "How long does setup take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most studio installations are completed in a single day. Complex multi-camera setups or larger rooms may require two days. We will give you an accurate timeline during the Discovery call."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work outside Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we do. We work with clients across the country. For clients outside of the Atlanta metro area, we add a travel fee to the setup package. Our ongoing management is handled fully remotely."
            }
          },
          {
            "@type": "Question",
            "name": "Am I locked into a contract?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No long-term contracts required. Our ongoing management packages are month-to-month. We earn your business every month by delivering results, not by trapping you in an agreement."
            }
          }
        ]
      }) }} />

      {/* Hero */}
      <section
        className="page-hero hiw-hero"
        style={{ backgroundImage: 'url(/assets/images/hero-how-it-works1.jpg)' }}
      >
        <div className="page-hero__overlay" />
        <div className="container">
          <span className="section-eyebrow hero-line-1" style={{ color: 'rgba(166,30,49,0.9)' }}>The Process</span>
          <h1 className="hero-line-2">Your Podcast Studio Setup,<br />Handled End to End.</h1>
          <p className="hero-sub">
            We take your idea and turn it into a fully produced podcast with a professional studio, a complete digital footprint, and a distribution strategy that puts you in front of your audience. By the time we are done, you are not just a podcaster. You are an authority in your niche.
          </p>
        </div>
      </section>

      {/* Phases */}
      <div className="hiw-phases">
        {phases.map((phase, i) => (
          <section
            key={phase.num}
            className={`hiw-phase section ${i % 2 === 0 ? 'section-neutral' : 'section-dark'}`}
          >
            <div className={`container hiw-phase__inner ${phase.flip ? 'hiw-phase__inner--flip' : ''}`}>
              <div className="hiw-phase__text fade-up" ref={fadeRef}>
                <div className="hiw-phase__num-wrap">
                  <span className="hiw-phase__num">{phase.num}</span>
                </div>
                <div className="section-heading-wrap">
                  <h2 className="hiw-phase__title">{phase.title}</h2>
                </div>
                <p className={`hiw-phase__subtitle ${i % 2 !== 0 ? 'hiw-subtitle--light' : ''}`}>{phase.subtitle}</p>
                <p className={`hiw-phase__body ${i % 2 !== 0 ? 'hiw-body--light' : ''}`}>{phase.body}</p>
              </div>
              <div className="hiw-phase__image fade-up fade-up-delay-1" ref={fadeRef}>
                {phase.video ? (
                  <video
                    src={phase.video}
                    poster={phase.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
                  />
                ) : (
                  <img
                    src={phase.image}
                    alt={phase.title}
                    style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
                  />
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Common Questions</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div
                className={`faq-card dark-card fade-up fade-up-delay-${(i % 2) + 1}`}
                key={i}
                ref={fadeRef}
              >
                <h3 className="faq-card__q">{faq.q}</h3>
                <p className="faq-card__a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container fade-up" ref={fadeRef}>
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>Let's Get Started</span>
          <h2>Ready to Launch<br />Your Podcast?</h2>
          <p>Book a free intro call and we will walk you through exactly what your studio and launch could look like.</p>
          <div className="cta-buttons">
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/services" className="btn btn-outline btn-lg">View Services and Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
