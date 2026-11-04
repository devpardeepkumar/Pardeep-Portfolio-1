import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.15,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
