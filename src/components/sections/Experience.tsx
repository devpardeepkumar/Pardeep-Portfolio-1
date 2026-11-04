import { MoveUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { experience } from '../../data/portfolio'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="experience section-wrap section-space" id="experience">
      <ScrollReveal>
        <SectionHeading
          number="04"
          eyebrow="WHERE I’VE BEEN"
          title={<>Experience built <span>over time.</span></>}
          description="From hands-on product delivery to independent consulting and team leadership."
        />
      </ScrollReveal>
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.company}
            initial={reduceMotion ? false : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
          >
            <div className="timeline-date">{item.date}</div>
            <span className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-heading">
                <div><h3>{item.company}</h3><span>{item.role}</span></div>
                <MoveUpRight size={17} />
              </div>
              <p>{item.detail}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
