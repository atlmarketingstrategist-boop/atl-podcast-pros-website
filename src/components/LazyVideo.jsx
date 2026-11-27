import { useCallback, useEffect, useRef, useState } from 'react'
import './LazyVideo.css'

// Only one reel is allowed to play at a time across the page.
const playingNow = new Set()

function pauseOthers(current) {
  playingNow.forEach((el) => {
    if (el !== current) {
      el.pause()
      playingNow.delete(el)
    }
  })
}

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function LazyVideo({ src, poster, label, className = '' }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [failed, setFailed] = useState(false)
  const [reduced, setReduced] = useState(prefersReducedMotion)
  const [startedByUser, setStartedByUser] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const play = useCallback((el) => {
    pauseOthers(el)
    const attempt = el.play()
    if (attempt && typeof attempt.then === 'function') {
      attempt.then(() => playingNow.add(el)).catch(() => {})
    } else {
      playingNow.add(el)
    }
  }, [])

  // Autoplay while at least half the reel is on screen, pause once it leaves.
  useEffect(() => {
    const el = videoRef.current
    if (!el || failed) return
    if (reduced && !startedByUser) {
      el.pause()
      playingNow.delete(el)
      return
    }
    if (typeof IntersectionObserver === 'undefined') {
      play(el)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) play(el)
          else {
            el.pause()
            playingNow.delete(el)
          }
        })
      },
      { threshold: [0, 0.5, 0.75] }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      playingNow.delete(el)
    }
  }, [failed, reduced, startedByUser, play])

  const toggleMute = () => {
    const el = videoRef.current
    if (!el) return
    const next = !muted
    el.muted = next
    setMuted(next)
    // Unmuting should bring this reel forward rather than layering audio.
    if (!next) play(el)
  }

  const handleManualPlay = () => {
    const el = videoRef.current
    if (!el) return
    setStartedByUser(true)
    play(el)
  }

  if (failed) {
    return (
      <div className={`lazy-video ${className}`}>
        <img className="lazy-video__fallback" src={poster} alt={label} />
      </div>
    )
  }

  const showPlayButton = reduced && !startedByUser

  return (
    <div className={`lazy-video ${className}`}>
      <video
        ref={videoRef}
        className="lazy-video__el"
        src={src}
        poster={poster}
        preload="metadata"
        muted={muted}
        loop
        playsInline
        disablePictureInPicture
        aria-label={label}
        onError={() => setFailed(true)}
      />

      {showPlayButton && (
        <button type="button" className="lazy-video__play" onClick={handleManualPlay} aria-label={`Play ${label}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}

      <button
        type="button"
        className="lazy-video__mute"
        onClick={toggleMute}
        aria-label={muted ? `Unmute ${label}` : `Mute ${label}`}
        aria-pressed={!muted}
      >
        {muted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        )}
      </button>
    </div>
  )
}
