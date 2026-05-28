import { useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useBookingModal } from '../components/BookingModal'
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts'
import './BlogPost.css'

const categoryColors = {
  'Studio Setup': '#7a3a1a',
  Production: '#1a6a6a',
  Equipment: '#1a5aa6',
  Strategy: '#2a7a2a',
  'Case Study': '#4a1a7a',
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { openModal } = useBookingModal()
  const fadeRefs = useRef([])

  const post = getPostBySlug(slug)
  const related = post ? getRelatedPosts(slug, post.category, 3) : []

  useEffect(() => {
    if (!post) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    fadeRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [post])

  const fadeRef = (el) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  if (!post) {
    return (
      <div className="blog-post-404">
        <h1>Article Not Found</h1>
        <p>The article you are looking for does not exist or may have moved.</p>
        <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      <title>{post.metaTitle}</title>
      <meta name="description" content={post.metaDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content={post.metaTitle} />
      <meta property="og:description" content={post.metaDescription} />
      <meta property="og:url" content={`https://atlpodcastpros.com/blog/${post.slug}`} />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.metaTitle} />
      <meta name="twitter:description" content={post.metaDescription} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            author: {
              '@type': 'Organization',
              name: 'ATL Podcast Pros',
              url: 'https://atlpodcastpros.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'ATL Podcast Pros',
              logo: {
                '@type': 'ImageObject',
                url: 'https://atlpodcastpros.com/favicon1.png',
              },
            },
            url: `https://atlpodcastpros.com/blog/${post.slug}`,
            mainEntityOfPage: `https://atlpodcastpros.com/blog/${post.slug}`,
          }),
        }}
      />

      {/* Hero */}
      <section className="post-hero">
        <div className="post-hero__overlay" />
        <div className="container">
          <div className="post-hero__inner">
            <Link to="/blog" className="post-hero__back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to Blog
            </Link>
            <div className="post-hero__meta">
              <span
                className="post-hero__category"
                style={{ background: categoryColors[post.category] || 'var(--color-primary)' }}
              >
                {post.category}
              </span>
              <time className="post-hero__date">{post.date}</time>
              <span className="post-hero__read">{post.readTime}</span>
            </div>
            <h1 className="post-hero__title">{post.title}</h1>
            <p className="post-hero__excerpt">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section section-neutral post-body-section">
        <div className="container">
          <div className="post-layout">
            <article className="post-content fade-up" ref={fadeRef}>
              <div
                className="post-content__body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="post-sidebar fade-up" ref={fadeRef}>
              <div className="post-sidebar__cta">
                <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)', fontSize: '0.65rem' }}>Free Consultation</span>
                <h3>Ready to Build Your Studio?</h3>
                <p>Book a free 20-minute call with our team. No pressure, no pitch, just a straight conversation about your goals.</p>
                <button onClick={openModal} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Schedule a Free Call
                </button>
              </div>

              <div className="post-sidebar__share">
                <p className="post-sidebar__share-label">Share this article</p>
                <div className="post-sidebar__share-links">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://atlpodcastpros.com/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="post-sidebar__share-btn"
                    aria-label="Share on LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://atlpodcastpros.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="post-sidebar__share-btn"
                    aria-label="Share on X"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section section-dark">
          <div className="container">
            <div className="post-related-heading fade-up" ref={fadeRef}>
              <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Keep Reading</span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>
                Related Articles
              </h2>
            </div>
            <div className="post-related-grid">
              {related.map((rp, i) => (
                <Link
                  to={`/blog/${rp.slug}`}
                  key={rp.slug}
                  className={`post-related-card fade-up fade-up-delay-${i + 1}`}
                  ref={fadeRef}
                >
                  <div className="post-related-card__image">
                    <img src="/assets/images/blog-default.jpg" alt={rp.title} />
                    <span
                      className="post-related-card__cat"
                      style={{ background: categoryColors[rp.category] || 'var(--color-primary)' }}
                    >
                      {rp.category}
                    </span>
                  </div>
                  <div className="post-related-card__body">
                    <time className="post-related-card__date">{rp.date}</time>
                    <h3 className="post-related-card__title">{rp.title}</h3>
                    <span className="post-related-card__cta">
                      Read More
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container fade-up" ref={fadeRef}>
          <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.85)' }}>Done Reading?</span>
          <h2>Ready to Build<br />Your Studio?</h2>
          <p>Skip the research rabbit hole. Book a free call and our team will tell you exactly what you need.</p>
          <div className="cta-buttons">
            <button onClick={openModal} className="btn btn-primary btn-lg">Schedule a Free Call</button>
            <Link to="/blog" className="btn btn-outline btn-lg">Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  )
}
