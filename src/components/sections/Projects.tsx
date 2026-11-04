import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { ProjectCard } from '../ui/ProjectCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section className="work section-wrap section-space" id="work">
      <ScrollReveal>
        <SectionHeading
          number="02"
          eyebrow="SELECTED WORK"
          title={<>A few things I’ve <span>helped build.</span></>}
          description="Product engineering across industries, platforms, and emerging technology."
        />
      </ScrollReveal>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
      <button
        className="text-button project-toggle"
        type="button"
        onClick={() => setShowAll((show) => !show)}
        aria-expanded={showAll}
      >
        {showAll ? 'Show selected projects' : 'View all projects'}
        {showAll ? <ChevronDown className="chevron-up" size={16} /> : <ArrowRight size={16} />}
      </button>
    </section>
  )
}
