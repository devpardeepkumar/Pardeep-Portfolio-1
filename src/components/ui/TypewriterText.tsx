import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

interface TypewriterTextProps {
  phrases: string[]
}

const TYPE_SPEED = 62
const DELETE_SPEED = 34
const HOLD_DURATION = 1450
const PAUSE_DURATION = 320

export function TypewriterText({ phrases }: TypewriterTextProps) {
  const reduceMotion = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) return

    const phrase = phrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text.length < phrase.length) {
      timeout = setTimeout(() => setText(phrase.slice(0, text.length + 1)), TYPE_SPEED)
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), HOLD_DURATION)
    } else if (text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED)
    } else {
      timeout = setTimeout(() => {
        setPhraseIndex((index) => (index + 1) % phrases.length)
        setDeleting(false)
      }, PAUSE_DURATION)
    }

    return () => clearTimeout(timeout)
  }, [deleting, phraseIndex, phrases, reduceMotion, text])

  const displayedText = reduceMotion ? phrases[0] : text

  return (
    <p className="hero-typewriter" aria-label={`Building ${phrases.join(', ')}`}>
      <span aria-hidden="true">Building </span>
      <span className="typewriter-text" aria-hidden="true">
        {displayedText}
        {!reduceMotion && <span className="typewriter-cursor" />}
      </span>
    </p>
  )
}
