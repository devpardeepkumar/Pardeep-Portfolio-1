import type { ReactNode } from 'react'
import { SectionLabel } from './SectionLabel'

interface SectionHeadingProps {
  number: string
  eyebrow: string
  title: ReactNode
  description?: string
}

export function SectionHeading({ number, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <>
      <SectionLabel number={number}>{eyebrow}</SectionLabel>
      {description ? (
        <div className="section-heading-row">
          <h2 className="section-title">{title}</h2>
          <p>{description}</p>
        </div>
      ) : (
        <h2 className="section-title">{title}</h2>
      )}
    </>
  )
}
