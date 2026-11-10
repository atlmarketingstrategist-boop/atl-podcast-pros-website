import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './ChurchStudio.css'

const TITLE = 'Church Podcast Studio Installation in Metro Atlanta'
const DESC = 'Done-for-you podcast studio installation and management for Atlanta churches and ministries. Your pastor presses one button, our team handles the rest.'
const URL = 'https://atlpodcastpros.com/church-podcast-studio-atlanta'
const IMAGE = 'https://atlpodcastpros.com/2819church.jpeg'

const whyPodcast = [
  {
    title: 'Sunday Reaches Past Sunday',
    desc: 'A sermon preached on Sunday reaches the people in the room. The same sermon recorded and published keeps reaching people during a commute, at the gym, or on a phone in another country. The teaching already exists. Publishing it simply removes the ceiling on who can hear it.',
  },
  {
    title: 'Midweek Teaching Without a Midweek Service',
    desc: 'Not every teaching needs a room and a calendar slot. A studio lets your pastor record a short midweek study, a series introduction, or a leadership message whenever the thought is fresh, without adding another event to the church schedule.',
  },
  {
    title: 'Member Care at Scale',
    desc: 'Questions that come up in counseling, premarital sessions, and new member classes tend to repeat. Recording thoughtful answers once gives your congregation something to return to, and gives your staff something to send instead of starting from scratch each time.',
  },
  {
    title: 'Outreach That Does Not Require a Visit',
    desc: 'Many people will listen to a pastor long before they will walk into a building. Published teaching lowers that first step to a tap, and a congregation member can share it with someone who would never accept an invitation to a service.',
  },
]

const spaces = [
  {
    title: "The Pastor's Study or Office",
    desc: 'The most common request we get, and usually the easiest build. These rooms are private, already furnished, and often carpeted with full bookshelves, which scatter reflections before we hang a single panel. Treatment stays minimal and the room still reads as an office on camera rather than a studio set.',
  },
  {
    title: 'A Dedicated Room in the Church Building',
    desc: 'A spare classroom, a former nursery, or an unused office can become a permanent studio that any staff member can walk into. These rooms often have hard floors and more parallel surfaces, so acoustic scope goes up, and we plan cable runs around existing power and network drops rather than cutting into walls.',
  },
  {
    title: 'A Corner of a Multipurpose Room',
    desc: 'Fellowship halls and worship spaces are the hardest acoustically: high ceilings, hard surfaces, and sound that travels. When a dedicated room is not available, we design a specific corner instead of the whole room, using directional microphone technique, tighter camera framing, and treatment that can sit behind the shot.',
  },
  {
    title: "The Pastor's Home",
    desc: 'For pastors who record early, late, or around a family schedule, a home studio removes the drive to the building entirely. This is the same in-home installation we build for executives and faith leaders across the metro, designed around the room you already have.',
  },
]

const included = [
  'Broadcast-quality microphones matched to your pastor and your room',
  'Audio interface or production console, specified for how many people record at once',
  'Camera and framing for video, if your ministry wants sermon video as well as audio',
  'Professional key and fill lighting so the room reads as intentional on camera',
  'Acoustic treatment designed for the specific space, not a generic panel count',
  'Full cable management so nothing is loose, exposed, or confusing',
  'Calibration of the entire signal chain, locked in so settings do not drift',
  'Hands-on training for your pastor and anyone else who will press record',
]

const managed = [
  'Editing and mixing every episode',
  'Show notes and episode descriptions',
  'Distribution to every major podcast platform',
  'Sermon clips cut for social',
  'YouTube channel management',
]

const steps = [
  {
    n: '01',
    title: 'Intro Call',
    desc: 'A free 20-minute conversation about your ministry, who will record, and what you want the content to do. No pressure and no obligation. If we are not the right fit, we will say so.',
  },
  {
    n: '02',
    title: 'Room Design',
    desc: 'Our team assesses the space, specifies the equipment for that room, and designs the acoustic and lighting plan. You get a firm quote before anything is ordered.',
  },
  {
    n: '03',
    title: 'Install and Training',
    desc: 'Our team arrives and handles everything: equipment, acoustic treatment, camera, lighting, cabling, and calibration. Most installations are completed in a single day. Before we leave, we walk your team through the recording workflow.',
  },
  {
    n: '04',
    title: 'Ongoing Support',
    desc: 'If anything needs adjustment we handle it remotely or schedule a service visit. If you want us to carry the production as well, our management plans pick up everything after you stop talking.',
  },
]

const faqs = [
  {
    q: 'Can you install a studio inside our church building?',
    a: 'Yes. We install in church buildings regularly, in spare classrooms, former nurseries, unused offices, and pastors studies. We design around the room you have, including its acoustics and its existing power and network drops. If the only available space is a multipurpose room, we design a specific corner of it rather than treating the entire room.',
  },
  {
    q: 'Do we need a dedicated room?',
    a: 'No. Many of the studios we build share their space with another use. A pastors office, a staff room, or a corner of a larger room can all produce professional audio and video. Acoustic treatment and microphone technique matter far more than square footage. We design the setup to work within the space you already have rather than requiring you to free one up.',
  },
  {
    q: 'Can our pastor record with no technical skill at all?',
    a: 'Yes, and that is the point of how we build. Every setting is configured and locked during installation so recording takes one button press. No gain adjustment, no camera settings, no software troubleshooting. We train your pastor hands-on before we leave. Socrates Charos came to us at 77 with no technical background and records on his own.',
  },
  {
    q: 'Do you handle clips for social media?',
    a: 'Yes, as part of our ongoing management. Sermon clips cut for social are included, along with editing, mixing, show notes, episode descriptions, distribution to every major platform, and YouTube channel management. You record the teaching and our team handles what happens to it afterward.',
  },
  {
    q: 'How long does an install take?',
    a: 'Most installations are completed in a single day. Our team arrives, unboxes and installs the equipment, mounts acoustic treatment, configures camera and lighting, runs and manages cabling, calibrates the signal chain, and trains your team before leaving. Larger or more complex projects involving multiple rooms or extensive acoustic work can extend to a second day. We schedule around your ministry calendar.',
  },
  {
    q: 'Do you work with ministries outside Atlanta proper?',
    a: 'Yes. Our standard service area covers the metro, including Buckhead, Midtown, Decatur, Alpharetta, Marietta, Roswell, Dunwoody, and Sandy Springs. We also serve ministries throughout Georgia and can travel for installations outside the standard area with a travel fee disclosed upfront. All ongoing management is handled remotely, so your location does not affect that part of the service.',
  },
  {
    q: 'What does ongoing management include?',
    a: 'Editing, mixing, show notes, episode descriptions, distribution to every major podcast platform, sermon clips for social, and YouTube channel management. Plans are $698 per month or $1,098 per month depending on how much of the production you want our team to carry. There are no long-term contracts, and your ministry retains full ownership of everything we produce.',
  },
  {
    q: 'How do we get a quote?',
    a: 'Start with a free intro call. Our team looks at the actual space, learns who will be recording and what you want to publish, then provides a firm quote before anything is ordered. Installations start at $10,000, and we quote each project individually after a discovery call rather than working from a fixed package list.',
  },
]

export default function ChurchStudio() {
  const { openModal } = useBookingModal()
  const fadeRefs = useRef([])
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    fadeRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const fadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Church Podcast Studio Installation and Management',
    serviceType: 'Podcast studio installation and podcast production management',
    description:
      'Done-for-you podcast studio design, installation, and ongoing production management for churches, ministries, and pastors in the Atlanta metro area.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ATL Podcast Pros',
      url: 'https://atlpodcastpros.com',
      telephone: '(855) 529-1404',
      email: 'info@atlpodcastpros.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'City', name: 'Atlanta', addressRegion: 'GA', addressCountry: 'US' },
    url: URL,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 10000,
        priceCurrency: 'USD',
        description: 'Studio installation starting at $10,000',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <title>{TITLE}</title>
      <link rel="canonical" href={URL} />
      <meta name="description" content={DESC} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={URL} />
      <meta property="og:image" content={IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="cps-hero">
        <div className="cps-hero__overlay" />
        <div className="container">
          <div className="cps-hero__inner fade-up" ref={fadeRef}>
            <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>
              For Churches and Ministries
            </span>
            <h1 className="cps-hero__title display-text">Church Podcast Studio Installation in Atlanta</h1>
            <p className="cps-hero__sub">
              We design, install, and manage the studio so your pastor presses one button and talks.
            </p>
            <ul className="cps-chips">
              <li>Installed in one day</li>
              <li>One-button recording</li>
              <li>Metro Atlanta and beyond</li>
              <li>No long-term contracts</li>
            </ul>
            <div className="cps-hero__btns">
              <button type="button" className="btn btn-primary btn-lg" onClick={openModal}>
                Book a Free Intro Call
              </button>
              <Link to="/services" className="btn btn-outline btn-lg">
                See Setup and Management
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why churches podcast */}
      <section className="section section-neutral">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow">Why It Matters</span>
              <h2>Why Churches and Ministries Publish Their Teaching</h2>
            </div>
          </div>
          <div className="cps-grid">
            {whyPodcast.map((item, i) => (
              <div className={`cps-card fade-up fade-up-delay-${(i % 4) + 1}`} key={item.title} ref={fadeRef}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we install */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>The Space</span>
              <h2 style={{ color: '#fff' }}>Where We Install</h2>
            </div>
            <p className="cps-lede">
              We design around the room you already have. What changes from one space to the next is the acoustic
              scope, the camera framing, and how the cable runs are planned.
            </p>
          </div>
          <div className="cps-grid">
            {spaces.map((item, i) => (
              <div className={`cps-card cps-card--dark fade-up fade-up-delay-${(i % 4) + 1}`} key={item.title} ref={fadeRef}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section section-neutral">
        <div className="container">
          <div className="cps-split">
            <div className="fade-up" ref={fadeRef}>
              <div className="section-heading-wrap">
                <span className="section-eyebrow">The Install</span>
                <h2>What Is Included</h2>
              </div>
              <p>
                One project, handled end to end. Our team specifies the equipment for your room, installs and
                calibrates all of it, and trains the people who will use it.
              </p>
              <ul className="checklist">
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="cps-price fade-up fade-up-delay-1" ref={fadeRef}>
              <div className="cps-price__label">Studio Installation</div>
              <div className="cps-price__amount">
                <span className="cps-price__from">Starting at</span>
                <span className="cps-price__num">$10,000</span>
              </div>
              <p className="cps-price__note">
                Where a project lands above that comes down to whether you are recording video, how many people
                record at once, and how much acoustic work the room needs. You get a firm quote after a discovery
                call, before anything is ordered.
              </p>
              <button type="button" className="btn btn-primary btn-lg cps-price__btn" onClick={openModal}>
                Get a Firm Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What we manage */}
      <section className="section section-neutral cps-manage">
        <div className="container">
          <div className="cps-split">
            <div className="fade-up" ref={fadeRef}>
              <div className="section-heading-wrap">
                <span className="section-eyebrow">After Launch</span>
                <h2>What We Manage</h2>
              </div>
              <p>
                The install is one time. If you want the recording to become a finished, distributed show without
                adding work to your staff, our team carries the production.
              </p>
              <ul className="checklist">
                {managed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="cps-manage__note">
                Plans are $698 per month or $1,098 per month depending on how much of the production we carry. No
                long-term contracts, and your ministry keeps full ownership of everything we produce.
              </p>
              <Link to="/services" className="btn btn-outline btn-lg">
                Compare Both Plans
              </Link>
            </div>
            <div className="cps-steps fade-up fade-up-delay-1" ref={fadeRef}>
              <div className="section-heading-wrap">
                <span className="section-eyebrow">The Process</span>
                <h2>How It Works</h2>
              </div>
              {steps.map((s) => (
                <div className="cps-step" key={s.n}>
                  <span className="cps-step__n">{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Our Work</span>
              <h2 style={{ color: '#fff' }}>Two Projects for Faith Leaders</h2>
            </div>
          </div>
          <div className="cps-proof">
            <div className="cps-proof__card fade-up fade-up-delay-1" ref={fadeRef}>
              <h3>Pastor Socrates Charos</h3>
              <p className="cps-proof__meta">Good News with Socrates</p>
              <p>
                Socrates came to our team at 77 years old with decades of ministry experience and no technical
                background at all. We designed and installed his complete studio inside his home in a single day,
                then took over the production. Within his first year the channel passed 12,000 YouTube subscribers
                and was monetized within months, and he has been a client ever since.
              </p>
              <blockquote>
                I want to thank Mr. Benjamin in Atlanta. He put together a beautiful studio for us to minister the
                gospel around the world.
                <cite>Socrates Charos, Good News with Socrates</cite>
              </blockquote>
              <Link to="/blog/faith-leader-podcast-launch-atlanta" className="cps-proof__link">
                Read how faith leaders launch a podcast
              </Link>
            </div>
            <div className="cps-proof__card fade-up fade-up-delay-2" ref={fadeRef}>
              <h3>2819 Church</h3>
              <p className="cps-proof__meta">In-house content studio</p>
              <img
                src="/2819church.jpeg"
                alt="Content studio installed by ATL Podcast Pros for 2819 Church in Atlanta"
                width="1200"
                height="800"
                loading="lazy"
              />
              <p>
                Our team built an in-house content studio for Pastor Phillip Anthony Mitchell at 2819 Church. The
                ministry uses the space to produce content for the YouVersion Bible App.
              </p>
              <Link to="/our-work" className="cps-proof__link">
                See this project in our portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-neutral">
        <div className="container">
          <div className="text-center mb-12 fade-up" ref={fadeRef}>
            <div className="section-heading-wrap centered">
              <span className="section-eyebrow">Questions</span>
              <h2>Common Questions from Churches and Ministries</h2>
            </div>
          </div>
          <div className="cps-faq fade-up" ref={fadeRef}>
            {faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <div className={`cps-faq__item ${open ? 'cps-faq__item--open' : ''}`} key={f.q}>
                  <button
                    type="button"
                    className="cps-faq__q"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span>{f.q}</span>
                    <span className="cps-faq__icon" aria-hidden="true">{open ? '−' : '+'}</span>
                  </button>
                  <div className="cps-faq__a" hidden={!open}>
                    <p>{f.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container fade-up" ref={fadeRef}>
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>Ready?</span>
          <h2>
            Let's Build Your
            <br />
            Ministry a Studio
          </h2>
          <p>
            Book a free 20-minute intro call. We will walk through your space, who will record, and exactly what we
            would build for you.
          </p>
          <div className="cta-buttons">
            <button type="button" className="btn btn-primary btn-lg" onClick={openModal}>
              Book a Free Intro Call
            </button>
            <Link to="/services" className="btn btn-outline btn-lg">
              See Setup and Management
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
