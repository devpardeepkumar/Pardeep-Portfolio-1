import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()

  const cardContent = (
    <>
      <div className="project-topline">
        <span>{project.type}</span>
        <span>{project.number}</span>
      </div>

      <div className={`project-visual ${project.image ? 'has-image' : ''}`} aria-hidden="true">
        {project.image ? (
          <div className="project-image-box">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="project-card-img"
              loading="lazy"
            />
            <div className="project-image-overlay" />
            <span className="visual-caption">CASE STUDY / {project.number}</span>
          </div>
        ) : (
          <>
            <div className="visual-orbit" />
            <div className="visual-window">
              <span className="visual-symbol">{project.name.slice(0, 1)}</span>
            </div>
            <span className="visual-caption">CASE STUDY / {project.number}</span>
          </>
        )}
      </div>

      <h3 className="project-title">
        <span>{project.name}</span>
        {project.link && (
          <ArrowUpRight size={17} className="project-link-icon" aria-hidden="true" />
        )}
      </h3>

      <p className="project-description">{project.description}</p>
      <ul className="project-outcomes">
        {project.outcomes.map((outcome) => (
          <li key={outcome}>
            <Check size={14} />
            {outcome}
          </li>
        ))}
      </ul>
      {project.technologies.length > 0 && (
        <div className="tag-row" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      )}
    </>
  )

  const motionProps = {
    className: `project-card tone-${project.tone} ${project.link ? 'is-clickable' : ''}`,
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      delay: reduceMotion ? 0 : (index % 2) * 0.08,
    },
  }

  if (project.link) {
    return (
      <motion.a
        {...motionProps}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} in a new tab`}
      >
        {cardContent}
      </motion.a>
    )
  }

  return <motion.article {...motionProps}>{cardContent}</motion.article>
}
