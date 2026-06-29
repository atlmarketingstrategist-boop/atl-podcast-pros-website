import { useEffect } from 'react'
import './Book.css'

const trustPoints = [
  { text: 'Month-to-month, no long-term contracts' },
  { text: 'You retain 100% ownership of your content' },
  { text: 'Free 20-minute intro call, zero pressure' },
]

export default function Book() {
  useEffect(() => {
    const existing = document.getElementById('msgsndr-form-embed-script')
    if (!existing) {
      const script = document.createElement('script')
      script.id = 'msgsndr-form-embed-script'
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <>
      <title>Schedule a Free Podcast Studio Consultation | ATL Podcast Pros</title>
      <link rel="canonical" href="https://atlpodcastpros.com/book" />
      <meta name="description" content="Book a free 20-minute intro call with ATL Podcast Pros. No pressure. No long-term contracts. Just a conversation about your podcast goals." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ATL Podcast Pros" />
      <meta property="og:title" content="Schedule a Free Podcast Studio Consultation | ATL Podcast Pros" />
      <meta property="og:description" content="Book a free 20-minute intro call with ATL Podcast Pros. No pressure. No long-term contracts. Just a conversation about your podcast goals." />
      <meta property="og:url" content="https://atlpodcastpros.com/book" />
      <meta property="og:image" content="https://atlpodcastpros.com/assets/images/home-hero2.jpeg" />

      <div className="book-page">
        {/* Left panel */}
        <div className="book-page__left">
          <div className="book-page__left-inner">
            <span className="section-eyebrow" style={{ color: 'rgba(166,30,49,0.9)' }}>Free Consultation</span>
            <div className="book-heading-wrap">
              <h1 className="book-page__headline display-text">Book a Free<br />Podcast Studio Consultation</h1>
            </div>
            <p className="book-page__sub">
              Pick a time that works for you. Our intro calls are free, 20 minutes, and zero pressure. We'll ask about your goals, walk through your space, and tell you exactly what we'd recommend.
            </p>

            <div className="book-trust">
              {trustPoints.map((pt, i) => (
                <div className="book-trust__item" key={i}>
                  <div className="book-trust__check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>{pt.text}</span>
                </div>
              ))}
            </div>

            <div className="book-page__contact">
              <p className="book-page__contact-label">Prefer to reach out directly?</p>
              <a href="mailto:info@atlpodcastpros.com" className="book-page__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@atlpodcastpros.com
              </a>
              <a href="tel:+18555291404" className="book-page__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.09-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                (855) 529-1404
              </a>
            </div>
          </div>
        </div>

        {/* Right panel: Booking form embed */}
        <div className="book-page__right">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/d17mhp7YoUyfl7EUTAdQ"
            style={{ width: '100%', height: '923px', border: 'none', borderRadius: '0px' }}
            id="inline-d17mhp7YoUyfl7EUTAdQ"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Us Form"
            data-height="923"
            data-layout-iframe-id="inline-d17mhp7YoUyfl7EUTAdQ"
            data-form-id="d17mhp7YoUyfl7EUTAdQ"
            title="Contact Us Form"
          />
        </div>
      </div>

      {/* Trust bar */}
      <div className="book-footer-trust">
        <span>No long-term contracts.</span>
        <span className="dot">·</span>
        <span>No tech headaches.</span>
        <span className="dot">·</span>
        <span>Just results.</span>
      </div>
    </>
  )
}
