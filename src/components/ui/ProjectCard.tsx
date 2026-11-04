import { motion, useReducedMotion } from 'motion/react'
import { Check } from 'lucide-react'
import type { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`project-card tone-${project.tone}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : (index % 2) * 0.08 }}
    >
      <div className="project-topline"><span>{project.type}</span><span>{project.number}</span></div>
      <div className="project-visual" aria-hidden="true">
        <div className="visual-orbit" />
        <div className="visual-window"><span className="visual-symbol">{project.name.slice(0, 1)}</span></div>
        <span className="visual-caption">CASE STUDY / {project.number}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-outcomes">
        {project.outcomes.map((outcome) => (
          <li key={outcome}><Check size={14} />{outcome}</li>
        ))}
      </ul>
      {project.technologies.length > 0 && (
        <div className="tag-row" aria-label="Technologies">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      )}
    </motion.article>
  )
}
