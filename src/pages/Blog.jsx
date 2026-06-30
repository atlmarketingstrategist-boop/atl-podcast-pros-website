import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import { blogPosts } from '../data/blogPosts'
import './Blog.css'

const categories = ['All', 'Studio Setup', 'Production', 'Equipment', 'Strategy', 'Case Study']

const categoryColors = {
  'Studio Setup': '#7a3a1a',
  Production: '#1a6a6a',
  Equipment: '#1a5aa6',
  Strategy: '#2a7a2a',
  'Case Study': '#4a1a7a',
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
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <title>Podcast Studio Tips &amp; Guides | ATL Podcast Pros Blog</title>
      <link rel="canonical" href="https://atlpodcastpros.com/blog" />
      <meta name="description" content="Podcast studio setup guides, gear reviews and production tips from Atlanta's leading in-home podcast experts. Learn how to launch, record and grow your podcast." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="Podcast Studio Tips &amp; Guides | ATL Podcast Pros Blog" />
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
                  <img src={post.image || '/assets/images/blog-default.jpg'} alt={post.title} loading="lazy" width="800" height="450" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
                  <Link to={`/blog/${post.slug}`} className="blog-card__cta" aria-label={`Read more about ${post.title}`}>
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
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
