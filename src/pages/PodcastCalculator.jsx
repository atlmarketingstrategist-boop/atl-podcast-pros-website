import { useState, useEffect, useRef } from 'react'
import { useBookingModal } from '../components/BookingModal'
import './PodcastCalculator.css'

const QUESTIONS = {
  format: {
    q: 'What best describes your show format?',
    options: [
      { val: 'audio', label: 'Audio Only', desc: 'podcast with no video' },
      { val: 'video', label: 'Audio + Video', desc: 'filmed podcast for YouTube and social' },
      { val: 'full', label: 'Full Production', desc: 'multi-camera, social clips, professional broadcast quality' },
    ],
  },
  people: {
    q: 'How many people will be filmed regularly?',
    options: [
      { val: 'just-me', label: 'Just Me', desc: 'solo host' },
      { val: 'two', label: 'Two People', desc: 'co-host or regular guest' },
      { val: 'three', label: 'Three or More People' },
    ],
  },
  tier: {
    q: 'What equipment tier do you prefer?',
    options: [
      { val: 'budget', label: 'Budget', desc: 'solid quality, cost-conscious', cost: '~$1,600 per camera' },
      { val: 'premium', label: 'Premium', desc: 'Sony FX30, broadcast-grade', cost: '~$2,460 per camera' },
    ],
  },
  room: {
    q: 'What type of space will the studio be in?',
    options: [
      { val: 'dedicated', label: 'Dedicated room or home office', desc: 'good natural acoustics' },
      { val: 'bedroom', label: 'Bedroom or converted space', desc: 'some acoustic treatment needed' },
      { val: 'open', label: 'Open plan living room or large open space', desc: 'significant acoustic treatment needed' },
    ],
  },
  existing: {
    q: 'Do you have any existing equipment?',
    options: [
      { val: 'scratch', label: 'Starting completely from scratch' },
      { val: 'some', label: 'I have some equipment', desc: 'microphones, lights, etc.' },
      { val: 'most', label: 'I have most of the equipment already' },
    ],
  },
}

const SEQ_FULL = ['format', 'people', 'tier', 'room', 'existing']
const SEQ_AUDIO = ['format', 'room', 'existing']

const PEOPLE_MAP = { 'just-me': 1, two: 2, three: 3 }

function calculateEstimate(format, people, tier, room, existing) {
  const cameraCount = format === 'audio' ? 0 : people + 1
  const cameraCostPerPosition = tier === 'premium' ? 2460 : 1600
  const totalCameraCost = cameraCount * cameraCostPerPosition
  const switcherCost = format !== 'audio' && cameraCount >= 2 ? 900 : 0
  const audioCostLow = people === 1 ? 1500 : people === 2 ? 2200 : 3200
  const audioCostHigh = people === 1 ? 2000 : people === 2 ? 2800 : 4000
  const lightingCostLow = format === 'audio' ? 0 : cameraCount <= 2 ? 700 : cameraCount === 3 ? 1000 : 1400
  const lightingCostHigh = format === 'audio' ? 0 : cameraCount <= 2 ? 900 : cameraCount === 3 ? 1300 : 1800
  const fullProductionAdd = format === 'full' ? 1800 : 0
  const roomAddLow = room === 'dedicated' ? 200 : room === 'bedroom' ? 500 : 900
  const roomAddHigh = room === 'dedicated' ? 400 : room === 'bedroom' ? 800 : 1400
  const miscLow = 400
  const miscHigh = 700
  const existingMultiplier = existing === 'scratch' ? 1.0 : existing === 'some' ? 0.75 : 0.4
  let equipLow = (totalCameraCost + switcherCost + audioCostLow + lightingCostLow + fullProductionAdd + roomAddLow + miscLow) * existingMultiplier
  let equipHigh = (totalCameraCost + switcherCost + audioCostHigh + lightingCostHigh + fullProductionAdd + roomAddHigh + miscHigh) * existingMultiplier
  const SERVICE_FEE = 5000
  let totalLow = equipLow + SERVICE_FEE
  let totalHigh = equipHigh + SERVICE_FEE
  totalLow = Math.max(10000, totalLow)
  totalHigh = Math.max(totalLow + 1000, totalHigh)
  totalLow = Math.round(totalLow / 500) * 500
  totalHigh = Math.round(totalHigh / 500) * 500
  return { low: totalLow, high: totalHigh, cameras: cameraCount }
}

function tierLabel(total) {
  if (total >= 25000) return 'Full Broadcast Production Suite'
  if (total >= 15000) return 'Mid-Range Broadcast Studio'
  return 'Entry-Level Professional Studio'
}

function buildSummary(a, peopleVal, cameras) {
  const bullets = []
  if (cameras > 0) {
    bullets.push(`Camera setup: ${cameras} positions (${a.tier === 'premium' ? 'premium' : 'budget'} tier)`)
  } else {
    bullets.push('Format: audio-only podcast setup')
  }
  bullets.push(`Audio configuration: ${peopleVal >= 2 ? 'multi-host' : 'solo'} setup`)
  if (cameras > 0) {
    const enhanced = a.format === 'full' || cameras >= 4
    bullets.push(`Lighting: ${enhanced ? 'enhanced' : 'standard'} package`)
  }
  const acoustic = a.room === 'dedicated' ? 'minimal' : a.room === 'bedroom' ? 'moderate' : 'significant'
  bullets.push(`Acoustic treatment: ${acoustic} for your room type`)
  return bullets
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
      setValue(Math.round((target * eased) / 100) * 100)
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        finished = true
        setValue(target)
      }
    }
    rafRef.current = requestAnimationFrame(step)
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
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const sequence = answers.format === 'audio' ? SEQ_AUDIO : SEQ_FULL
  const safeStep = Math.min(step, sequence.length - 1)
  const currentKey = sequence[safeStep]
  const currentQ = QUESTIONS[currentKey]
  const isLast = safeStep === sequence.length - 1
  const currentAnswered = Boolean(answers[currentKey])
  const answeredInSeq = sequence.filter((k) => answers[k]).length
  const progress = Math.min(100, (answeredInSeq / sequence.length) * 100)

  const peopleVal = answers.format === 'audio' ? 1 : PEOPLE_MAP[answers.people] || 1
  const result = showResult
    ? calculateEstimate(answers.format, peopleVal, answers.tier || 'budget', answers.room, answers.existing)
    : { low: 0, high: 0, cameras: 0 }
  const animLow = useCountUp(result.low, showResult)
  const animHigh = useCountUp(result.high, showResult)

  const selectOption = (key, val) => setAnswers((prev) => ({ ...prev, [key]: val }))

  const next = () => {
    if (isLast) {
      setShowResult(true)
    } else {
      setStep((s) => s + 1)
    }
  }
  const back = () => setStep((s) => Math.max(0, s - 1))
  const restart = () => {
    setShowResult(false)
    setAnswers({})
    setStep(0)
  }

  const summary = showResult ? buildSummary(answers, peopleVal, result.cameras) : []

  return (
    <>
      <title>Podcast Studio Budget Calculator | ATL Podcast Pros</title>
      <link rel="canonical" href="https://atlpodcastpros.com/podcast-budget-calculator" />
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="Free podcast studio budget calculator. Find out your all-in studio investment based on your show format, number of hosts, room type, and equipment goals."
      />
      <meta property="og:title" content="Podcast Studio Budget Calculator | ATL Podcast Pros" />
      <meta
        property="og:description"
        content="Free podcast studio budget calculator. Estimate your all-in studio investment based on your format, hosts, room, and equipment goals."
      />
      <meta property="og:url" content="https://atlpodcastpros.com/podcast-budget-calculator" />

      <div className="pc-page">
        <div className="pc-wrap">
          <div className="pc-intro">
            <span className="pc-eyebrow">Free Tool</span>
            <h1 className="pc-headline">Podcast Studio Budget Calculator</h1>
            <p className="pc-sub">
              Answer a few quick questions and get an instant all-in estimate for your professional studio, including installation, equipment, and your first episode launch.
            </p>
          </div>

          <div className="pc-card">
            <div className="pc-progress">
              <div className="pc-progress__fill" style={{ width: `${showResult ? 100 : progress}%` }} />
            </div>

            {!showResult ? (
              <div className="pc-flow">
                <div className="pc-question" key={currentKey}>
                  <h2 className="pc-q-title">{currentQ.q}</h2>
                  <div className="pc-options">
                    {currentQ.options.map((opt) => {
                      const selected = answers[currentKey] === opt.val
                      return (
                        <button
                          type="button"
                          key={opt.val}
                          className={`pc-option ${selected ? 'pc-option--selected' : ''}`}
                          onClick={() => selectOption(currentKey, opt.val)}
                          aria-pressed={selected}
                        >
                          <span className="pc-option__label">{opt.label}</span>
                          {opt.desc && <span className="pc-option__desc">{opt.desc}</span>}
                          {opt.cost && <span className="pc-option__cost">{opt.cost}</span>}
                        </button>
                      )
                    })}
                  </div>

                  <div className="pc-nav">
                    {safeStep > 0 && (
                      <button type="button" className="pc-back" onClick={back}>
                        &larr; Back
                      </button>
                    )}
                    {currentAnswered && (
                      <button type="button" className="pc-next" onClick={next}>
                        {isLast ? 'Calculate My Estimate' : 'Next'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="pc-result" key="result">
                {result.cameras > 0 && (
                  <div className="pc-cameras">
                    <p className="pc-cameras__count">
                      Based on your setup: {result.cameras} camera positions recommended
                    </p>
                    <p className="pc-cameras__note">
                      We use the People + 1 rule to ensure every angle is covered
                    </p>
                  </div>
                )}

                <h2 className="pc-result__heading">Your All-In Studio Estimate</h2>
                <div className="pc-result__range">
                  ${animLow.toLocaleString()} &mdash; ${animHigh.toLocaleString()}
                </div>
                <p className="pc-result__sub">
                  This estimate includes professional installation, equipment sourcing, setup, calibration, and your first episode launch. No hidden fees.
                </p>

                <div className="pc-tier">
                  <span className="pc-tier__label">Recommended tier</span>
                  <span className="pc-tier__value">{tierLabel(result.high)}</span>
                </div>

                <div className="pc-summary">
                  <p className="pc-summary__title">What drives your estimate</p>
                  <ul className="pc-summary__list">
                    {summary.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="pc-cta">
                  <h3 className="pc-cta__title">Want a Firm Quote for Your Specific Space?</h3>
                  <p className="pc-cta__sub">
                    Every studio is different. Book a free 20-minute intro call and we will assess your room, confirm your equipment needs, and give you an exact number. No pressure.
                  </p>
                  <button type="button" className="pc-cta__btn" onClick={openModal}>
                    Schedule a Free Call
                  </button>
                </div>

                <button type="button" className="pc-restart" onClick={restart}>
                  Start over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
