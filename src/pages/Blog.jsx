import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import './Blog.css'

const posts = [
  {
    slug: 'podcast-studio-setup-cost-2026',
    category: 'Budgeting',
    title: 'How Much Does a Podcast Studio Setup Cost in 2026?',
    excerpt: "From DIY setups under $500 to broadcast-quality studios over $10k: here's the full breakdown of what you should expect to spend.",
    date: 'April 1, 2026',
    image: null,
  },
  {
    slug: 'renting-vs-building-podcast-studio',
    category: 'Strategy',
    title: 'Renting a Podcast Studio vs. Building Your Own: The True Cost Comparison',
    excerpt: "Studio rentals feel affordable, until you do the math over 12 months. Here's a side-by-side comparison every podcaster should read.",
    date: 'March 24, 2026',
    image: null,
  },
  {
    slug: 'home-podcast-studio-setup-guide',
    category: 'Setup Guide',
    title: 'How to Set Up a Professional Podcast Studio at Home: Step-by-Step',
    excerpt: 'A complete guide to building a broadcast-quality home studio: room selection, acoustic treatment, microphone placement, and recording software.',
    date: 'March 10, 2026',
    image: null,
  },
  {
    slug: 'busy-professional-podcast-guide',
    category: 'For Professionals',
    title: "The Busy Professional's Guide to Launching a Podcast Without the Tech Headache",
    excerpt: "If you're running a business, leading a team, or building a practice, this guide shows you the fastest and simplest path from idea to published episode.",
    date: 'February 28, 2026',
    image: null,
  },
  {
    slug: 'best-podcast-equipment-home-studio-2026',
    category: 'Equipment',
    title: 'The Best Podcast Equipment for a Home Studio in 2026',
    excerpt: "We've tested and installed hundreds of gear combinations. These are the mics, interfaces, cameras, and accessories our team recommends for every budget tier.",
    date: 'February 14, 2026',
    image: null,
  },
  {
    slug: 'podcast-studio-interior-design-ideas',
    category: 'Design',
    title: 'Podcast Studio Interior Design: 15 Ideas to Make Your Space Camera-Ready',
    excerpt: 'Your studio is your brand on camera. These 15 design ideas will make your background look intentional, professional, and uniquely yours.',
    date: 'January 30, 2026',
    image: null,
  },
]

const categories = ['All', 'Budgeting', 'Strategy', 'Setup Guide', 'For Professionals', 'Equipment', 'Design']

const categoryColors = {
  Budgeting: '#2a7a2a',
  Strategy: '#1a5aa6',
  'Setup Guide': '#7a3a1a',
  'For Professionals': '#4a1a7a',
  Equipment: '#1a6a6a',
  Design: '#7a1a4a',
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
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

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <>
      <title>Podcast Studio Tips & Guides | ATL Podcast Pros Blog</title>
      <meta name="description" content="Podcast studio setup guides, gear reviews and production tips from Atlanta's leading in-home podcast experts. Learn how to launch, record and grow your podcast." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="Podcast Studio Tips & Guides | ATL Podcast Pros Blog" />
      <meta property="og:description" content="Podcast studio setup guides, gear reviews and production tips from Atlanta's leading in-home podcast experts. Learn how to launch, record and grow your podcast." />
      <meta property="og:url" content="https://atlpodcastpros.com/blog" />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />

      {/* Hero */}
      <section className="page-hero blog-hero">
        <div className="page-hero__overlay" />
        <div className="container">
          <span className="section-eyebrow hero-line-1" style={{ color: 'rgba(166,30,49,0.9)' }}>Resources</span>
          <h1 className="hero-line-2">Podcast Studio Tips,<br />Guides and Insights</h1>
          <p className="hero-sub">Practical expertise from the team that builds professional studios for Atlanta's top podcasters.</p>
        </div>
      </section>

      {/* Category filter */}
      <section className="blog-filter-bar section-dark">
        <div className="container">
          <div className="blog-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-cat-btn ${activeCategory === cat ? 'blog-cat-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section section-neutral">
        <div className="container">
          <div className="blog-grid">
            {filteredPosts.map((post, i) => (
              <article
                className={`blog-card fade-up fade-up-delay-${(i % 3) + 1}`}
                key={post.slug}
                ref={fadeRef}
              >
                <div className="blog-card__image">
                  <img src="/assets/images/blog-default.jpg" alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <span
                    className="blog-card__category"
                    style={{ background: categoryColors[post.category] || 'var(--color-primary)' }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="blog-card__body">
                  <time className="blog-card__date">{post.date}</time>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-card__cta">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container fade-up" ref={fadeRef}>
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>Done Reading?</span>
          <h2>Ready to Build<br />Your Studio?</h2>
          <p>Skip the research rabbit hole. Book a free call and our team will tell you exactly what you need.</p>
          <div className="cta-buttons">
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/services" className="btn btn-outline btn-lg">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
