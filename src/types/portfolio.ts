import type { LucideIcon } from 'lucide-react'

export type ProjectTone = 'lime' | 'violet' | 'blue' | 'orange'

export interface Project {
  name: string
  type: string
  number: string
  description: string
  outcomes: string[]
  technologies: string[]
  tone: ProjectTone
  image?: string
  link?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  date: string
  detail: string
  tags: string[]
}

export interface SkillGroup {
  name: string
  icon: LucideIcon
  skills: string[]
}

export interface Achievement {
  value: string
  count: number
  label: string
}

export interface EducationEntry {
  date: string
  degree: string
  institution: string
}

export interface NavigationItem {
  label: string
  href: string
}
