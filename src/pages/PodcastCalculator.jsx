import { useState, useEffect, useRef } from 'react'
import { useBookingModal } from '../components/BookingModal'
import './PodcastCalculator.css'

const QUESTIONS = [
  {
    key: 'type',
    q: 'What type of podcast?',
    options: [
      { label: 'Audio Only', val: 'audio' },
      { label: 'Audio + Video', val: 'video' },
      { label: 'Full Production', desc: 'video, multi-camera, social clips', val: 'full' },
    ],
  },
  {
    key: 'hosts',
    q: 'How many hosts or regular guests?',
    options: [
      { label: 'Solo (1 person)', val: 'solo' },
      { label: 'Two People', val: 'two' },
      { label: 'Three or More', val: 'three' },
    ],
  },
  {
    key: 'setup',
    q: 'What is your current setup?',
    options: [
      { label: 'Starting from zero', val: 'zero' },
      { label: 'Have some equipment already', val: 'some' },
      { label: 'Have most equipment, need calibration', val: 'most' },
    ],
  },
  {
    key: 'space',
    q: 'Where will you record?',
    options: [
      { label: 'Dedicated room', val: 'dedicated' },
      { label: 'Home office or bedroom', val: 'office' },
      { label: 'Living room or open space', val: 'open' },
    ],
  },
  {
    key: 'quality',
    q: 'What level of quality are you targeting?',
    options: [
      { label: 'Good enough to start', val: 'good' },
      { label: 'Professional quality', val: 'pro' },
      { label: 'Broadcast / YouTube-ready', val: 'broadcast' },
    ],
  },
]

const BASE = { audio: [400, 800], video: [800, 2000], full: [2000, 4000] }
const EXTRA_HOST = [600, 1200]
const HOSTS_EXTRA = { solo: 0, two: 1, three: 2 }
const SETUP_MULT = { zero: 1.0, some: 0.6, most: 0.2 }
const ACOUSTIC = { dedicated: [0, 0], office: [200, 500], open: [500, 1200] }
const QUALITY = { good: [0, 0], pro: [800, 1500], broadcast: [2000, 5000] }

const roundTo50 = (n) => Math.round(n / 50) * 50

function computeBudget(a) {
  const base = BASE[a.type]
  const extra = HOSTS_EXTRA[a.hosts]
  const mult = SETUP_MULT[a.setup]
  const ac = ACOUSTIC[a.space]
  const ql = QUALITY[a.quality]
  const low = roundTo50((base[0] + EXTRA_HOST[0] * extra) * mult + ac[0] + ql[0])
  const high = roundTo50((base[1] + EXTRA_HOST[1] * extra) * mult + ac[1] + ql[1])
  return { low, high }
}

function recommendTier(a) {
  if (a.quality === 'broadcast' || a.type === 'full' || (a.type === 'video' && a.quality === 'pro')) {
    return 'Professional Done-For-You'
  }
  if (a.quality === 'pro' || a.type === 'video' || a.hosts !== 'solo') {
    return 'Semi-Professional'
  }
  return 'DIY'
}

function explanationFor(a) {
  const parts = []
  parts.push(
    a.type === 'full'
      ? 'A full production build with video, multiple cameras, and social clips sits at the top of the equipment range.'
      : a.type === 'video'
      ? 'Adding video means cameras and lighting on top of your core audio gear.'
      : 'An audio-only setup keeps your core equipment costs lean.'
  )
  if (a.hosts !== 'solo') {
    parts.push('Recording with more than one person adds a microphone and channel for each additional voice.')
  }
  if (a.setup === 'most') {
    parts.push('Because you already own most of your gear, most of this estimate is calibration and finishing rather than new equipment.')
  } else if (a.setup === 'some') {
    parts.push('Owning some equipment already brings your total down since you are filling gaps rather than starting fresh.')
  }
  if (a.space === 'open') {
    parts.push('An open recording space needs the most acoustic treatment to control echo and background noise.')
  } else if (a.space === 'office') {
    parts.push('A home office or bedroom needs a moderate amount of acoustic treatment.')
  }
  if (a.quality === 'broadcast') {
    parts.push('Broadcast and YouTube-ready quality is the biggest driver of the higher end of your range.')
  } else if (a.quality === 'pro') {
    parts.push('Targeting professional quality adds better microphones, cameras, and treatment.')
  }
  return parts.slice(0, 3).join(' ')
}

function useCountUp(target, run, duration = 1200) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)
  useEffect(() => {
    if (!run) {
      setValue(0)
      return
    }
    let startTime = null
    let finished = false
    const step = (ts) => {
      if (finished) return
      if (startTime === null) startTime = ts
      const p = Math.min(1, (ts - startTime) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round((target * eased) / 10) * 10)
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        finished = true
        setValue(target)
      }
    }
    rafRef.current = requestAnimationFrame(step)
    // Guarantee the final value settles even if rAF is throttled (background tab).
    const settle = setTimeout(() => {
      finished = true
      setValue(target)
    }, duration + 200)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearTimeout(settle)
    }
  }, [target, run, duration])
  return value
}

export default function PodcastCalculator() {
  const { openModal } = useBookingModal()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const current = QUESTIONS[step]
  const answeredAll = QUESTIONS.every((q) => answers[q.key])
  const onLastQuestion = step === QUESTIONS.length - 1

  const budget = showResult ? computeBudget(answers) : { low: 0, high: 0 }
  const tier = showResult ? recommendTier(answers) : null
  const animLow = useCountUp(budget.low, showResult)
  const animHigh = useCountUp(budget.high, showResult)

  const selectOption = (val) => {
    setAnswers((prev) => ({ ...prev, [current.key]: val }))
    if (!onLastQuestion) {
      setTimeout(() => setStep((s) => Math.min(QUESTIONS.length - 1, s + 1)), 220)
    }
  }

  const goBack = () => setStep((s) => Math.max(0, s - 1))

  const calculate = () => setShowResult(true)

  const restart = () => {
    setShowResult(false)
    setAnswers({})
    setStep(0)
  }

  return (
    <>
      <title>Podcast Studio Budget Calculator | ATL Podcast Pros</title>
      <link rel="canonical" href="https://atlpodcastpros.com/podcast-budget-calculator" />
      <meta
        name="description"
        content="Free podcast studio budget calculator. Find out how much your setup will cost based on your show format, number of hosts, recording space, and quality goals."
      />
      <meta property="og:title" content="Podcast Studio Budget Calculator | ATL Podcast Pros" />
      <meta
        property="og:description"
        content="Free podcast studio budget calculator. Estimate your setup cost based on your format, hosts, space, and quality goals."
      />
      <meta property="og:url" content="https://atlpodcastpros.com/podcast-budget-calculator" />

      <div className="pc-page">
        <div className="pc-wrap">
          <div className="pc-intro">
            <span className="pc-eyebrow">Free Tool</span>
            <h1 className="pc-headline">Podcast Studio Budget Calculator</h1>
            <p className="pc-sub">
              Answer five quick questions and get an instant estimate of what your podcast studio setup could cost, plus a recommendation on the right path for your goals.
            </p>
          </div>

          <div className="pc-card">
            {!showResult ? (
              <div className="pc-flow">
                <div className="pc-progress">
                  <span className="pc-progress__label">Question {step + 1} of {QUESTIONS.length}</span>
                  <div className="pc-progress__bar">
                    <div
                      className="pc-progress__fill"
                      style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="pc-question" key={step}>
                  <h2 className="pc-q-title">{current.q}</h2>
                  <div className="pc-options">
                    {current.options.map((opt) => {
                      const selected = answers[current.key] === opt.val
                      return (
                        <button
                          type="button"
                          key={opt.val}
                          className={`pc-option ${selected ? 'pc-option--selected' : ''}`}
                          onClick={() => selectOption(opt.val)}
                          aria-pressed={selected}
                        >
                          <span className="pc-option__label">{opt.label}</span>
                          {opt.desc && <span className="pc-option__desc">{opt.desc}</span>}
                        </button>
                      )
                    })}
                  </div>

                  <div className="pc-nav">
                    {step > 0 && (
                      <button type="button" className="pc-back" onClick={goBack}>
                        &larr; Back
                      </button>
                    )}
                    {onLastQuestion && answeredAll && (
                      <button type="button" className="pc-calc-btn" onClick={calculate}>
                        Calculate My Budget
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="pc-result" key="result">
                <p className="pc-result__label">Your estimated studio budget</p>
                <div className="pc-result__range">
                  ${animLow.toLocaleString()} - ${animHigh.toLocaleString()}
                </div>
                <p className="pc-result__explain">{explanationFor(answers)}</p>

                <div className="pc-tier">
                  <span className="pc-tier__label">Recommended path</span>
                  <span className="pc-tier__value">{tier}</span>
                </div>

                {tier === 'Professional Done-For-You' && (
                  <div className="pc-pro-block">
                    <p>
                      ATL Podcast Pros specializes in professional done-for-you studio installations starting at $10,000, including equipment sourcing, full installation, and your first episode launch.
                    </p>
                    <button type="button" className="pc-schedule-btn" onClick={openModal}>
                      Schedule a Free Call
                    </button>
                  </div>
                )}

                <p className="pc-note">
                  Want a precise quote for your specific space?{' '}
                  <button type="button" className="pc-note__link" onClick={openModal}>
                    Book a free intro call
                  </button>{' '}
                  and we will assess your room and give you a firm number.
                </p>

                <button type="button" className="pc-restart" onClick={restart}>
                  Start over
                </button>
              </div>
            )}
          </div>

          {/* How We Built This Estimate */}
          <div className="pc-how">
            <h2 className="pc-how__title">How We Built This Estimate</h2>
            <p className="pc-how__intro">
              This calculator combines the main cost categories that shape a real studio build. Your estimate is a starting range, not a firm quote.
            </p>
            <div className="pc-how__grid">
              <div className="pc-how__cat">
                <h3>Core Equipment</h3>
                <p>Microphones, an interface or production console, headphones, and cabling. Audio-only setups start lowest, while full video productions with multiple cameras sit at the top.</p>
              </div>
              <div className="pc-how__cat">
                <h3>Hosts and Guests</h3>
                <p>Every additional person at the table needs their own microphone and channel, which adds to both the equipment and the setup complexity.</p>
              </div>
              <div className="pc-how__cat">
                <h3>What You Already Own</h3>
                <p>If you already have some or most of your gear, we scale the estimate down since much of the work becomes calibration rather than new purchases.</p>
              </div>
              <div className="pc-how__cat">
                <h3>Acoustic Treatment</h3>
                <p>A dedicated room needs little treatment. A home office needs a moderate amount, and an open living space needs the most to control echo and noise.</p>
              </div>
              <div className="pc-how__cat">
                <h3>Quality Target</h3>
                <p>Good enough to start keeps costs lean. Professional and broadcast-ready targets add better microphones, cameras, lighting, and treatment.</p>
              </div>
              <div className="pc-how__cat">
                <h3>Installation and Calibration</h3>
                <p>A professional done-for-you build includes sourcing, full installation, and tuning so your studio works with one button from your first episode.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
