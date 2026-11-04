import { motion, useReducedMotion } from 'motion/react'
import { skillGroups } from '../../data/portfolio'
import { SkillBadge } from '../ui/SkillBadge'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="expertise section-wrap section-space" id="expertise">
      <ScrollReveal>
        <SectionHeading
          number="05"
          eyebrow="TOOLS OF THE TRADE"
          title={<>Broad by design. <span>Deep where it matters.</span></>}
          description="A versatile toolkit for building end-to-end products and dependable systems."
        />
      </ScrollReveal>
      <div className="skill-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon
          return (
            <motion.article
              className="skill-card"
              key={group.name}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.07 }}
            >
              <div className="skill-heading"><Icon size={18} /><h3>{group.name}</h3></div>
              <div className="skill-list">{group.skills.map((skill) => <SkillBadge key={skill}>{skill}</SkillBadge>)}</div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
