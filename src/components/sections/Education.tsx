import { ArrowUpRight } from 'lucide-react'
import { education } from '../../data/portfolio'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section className="education section-wrap section-space">
      <ScrollReveal>
        <SectionHeading
          number="06"
          eyebrow="FOUNDATIONS"
          title={<>Education & <span>learning.</span></>}
        />
      </ScrollReveal>
      <div className="education-grid">
        {education.map((entry) => (
          <div className="education-item" key={entry.institution}>
            <span>{entry.date}</span>
            <div><h3>{entry.degree}</h3><p>{entry.institution}</p></div>
            <ArrowUpRight size={17} />
          </div>
        ))}
      </div>
    </section>
  )
}
