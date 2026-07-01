import { Link } from 'react-router-dom'
import './Footer.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/services', label: 'Services' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/about', label: 'About' },
  { to: '/book', label: 'Book a Call' },
  { to: '/blog', label: 'Blog' },
]

const serviceAreas = [
  { to: '/locations/podcast-studio-setup-buckhead', label: 'Buckhead' },
  { to: '/locations/podcast-studio-setup-midtown-atlanta', label: 'Midtown Atlanta' },
  { to: '/locations/podcast-studio-setup-decatur', label: 'Decatur' },
  { to: '/locations/podcast-studio-setup-alpharetta', label: 'Alpharetta' },
  { to: '/locations/podcast-studio-setup-sandy-springs', label: 'Sandy Springs' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="container">
          <div className="footer__grid">
            {/* Brand col */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img
                  src="/LogoAPPWhiteATL.png"
                  alt="ATL Podcast Pros"
                  className="footer__logo-img"
                  width="3991"
                  height="2797"
                />
              </Link>
              <p className="footer__tagline">
                Atlanta's premier done-for-you in-home podcast studio setup and management agency. We build it. You talk. We handle the rest.
              </p>
              <div className="footer__social">
                <a href="https://instagram.com/atlpodcastpros" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Nav col */}
            <div className="footer__nav">
              <h4 className="footer__nav-heading">Pages</h4>
              <ul>
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer__nav-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas col */}
            <div className="footer__nav">
              <h4 className="footer__nav-heading">Service Areas</h4>
              <ul>
                {serviceAreas.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer__nav-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact col */}
            <div className="footer__contact">
              <h4 className="footer__nav-heading">Contact</h4>
              <ul className="footer__contact-list">
                <li>
                  <span className="footer__contact-label">Email</span>
                  <a href="mailto:info@atlpodcastpros.com">info@atlpodcastpros.com</a>
                </li>
                <li>
                  <span className="footer__contact-label">Phone</span>
                  <a href="tel:+18555291404">(855) 529-1404</a>
                </li>
                <li>
                  <span className="footer__contact-label">Location</span>
                  <span>Atlanta, GA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} ATL Podcast Pros. All rights reserved. <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline' }}>Privacy Policy</Link></p>
            <p className="footer__bottom-right">Built for Atlanta's boldest voices.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
