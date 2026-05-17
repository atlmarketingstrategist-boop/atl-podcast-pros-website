import { createContext, useContext, useState, useEffect } from 'react'
import './BookingModal.css'

const BookingModalContext = createContext(null)

export function useBookingModal() {
  return useContext(BookingModalContext)
}

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return
    const existing = document.getElementById('msgsndr-form-embed-script')
    if (!existing) {
      const script = document.createElement('script')
      script.id = 'msgsndr-form-embed-script'
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      document.body.appendChild(script)
    }
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <BookingModalContext.Provider value={{ openModal }}>
      {children}
      {isOpen && (
        <div className="bm-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="bm-container" onClick={(e) => e.stopPropagation()}>
            <button className="bm-close" onClick={closeModal} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
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
      )}
    </BookingModalContext.Provider>
  )
}
