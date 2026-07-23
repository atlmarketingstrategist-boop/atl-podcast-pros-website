import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './FloatingChecklistBanner.css'

const FORM_URL = 'https://api.leadconnectorhq.com/widget/form/35xjK13efvByA1hPYwdn'
const STORAGE_KEY = 'checklistBannerDismissed'

export default function FloatingChecklistBanner() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setDismissed(true)
      return
    }

    const handleScroll = () => {
      if (window.scrollY > 400) setVisible(true)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setDismissed(true)
  }

  if (dismissed || pathname.startsWith('/client/')) return null

  return (
    <aside
      className={`checklist-float ${visible ? 'is-visible' : ''}`}
      aria-hidden={!visible}
    >
      <button
        type="button"
        className="checklist-float__close"
        onClick={handleDismiss}
        aria-label="Dismiss checklist offer"
      >
        &times;
      </button>
      <img
        className="checklist-float__img"
        src="/Checklist-Product-Image-web.jpg"
        alt="Free Podcast Studio Setup Checklist"
        loading="lazy"
        width="500"
        height="500"
      />
      <div className="checklist-float__body">
        <p className="checklist-float__headline">Free Download</p>
        <p className="checklist-float__sub">Podcast Studio Setup Checklist</p>
        <a
          className="checklist-float__btn"
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
        >
          Get It Free
        </a>
      </div>
    </aside>
  )
}
