import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'
import type { Achievement } from '../../types/portfolio'

interface AnimatedCounterProps {
  achievement: Achievement
}

export function AnimatedCounter({ achievement }: AnimatedCounterProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)
  const suffix = achievement.value.slice(String(achievement.count).length)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, achievement.count, {
      duration: reduceMotion ? 0 : 1.1,
      ease: 'easeOut',
      onUpdate: (value) => setCount(Math.round(value)),
    })
    return () => controls.stop()
  }, [achievement.count, isInView, reduceMotion])

  return <motion.strong ref={ref} aria-label={achievement.value} aria-live="off">{count}{suffix}</motion.strong>
}
