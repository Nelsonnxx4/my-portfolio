export type IconName = 'github' | 'linkedin' | 'mail' | 'home' | 'arrow-up-right' | 'repo'

export interface SocialLink {
  label: string
  href: string
  icon: IconName
}

export interface SiteInfo {
  name: string
  shortName: string
  role: string
  tagline: string
  summary: string
  email: string
  location: string
  socialLinks: SocialLink[]
}

export interface Project {
  id: string
  name: string
  description: string
  bullets: string[]
  stack: string[]
  url?: string
  repoUrl?: string
  image?: string
  kind: 'web' | 'api'
  featured: boolean
}

export interface WorkExperience {
  org: string
  role: string
  location: string
  start: string
  end: string | null
  bullets: string[]
}

export interface Education {
  school: string
  degree: string
  location: string
  start: string
  end: string | null
}

export interface SkillGroup {
  label: string
  items: string[]
}
