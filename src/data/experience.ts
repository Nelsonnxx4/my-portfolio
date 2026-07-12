import type { Education, WorkExperience } from '@/types/portfolio'

export const workExperience: WorkExperience[] = [
  {
    org: 'NITDA Nigeria',
    url: 'https://nitda.gov.ng/',
    role: 'Software Engineering Intern',
    location: 'Abuja, Nigeria',
    start: 'Jun 2026',
    end: null,
    bullets: [
      'Selected for an intensive technical acceleration program covering Python development, data science, product design, and embedded systems.',
      'Leveraging Python to build backend scripts and logic, accelerating a transition into full-stack application development.',
      'Collaborating on product design workflows, using UI/UX principles to wireframe and architect user-centered interface layouts.',
      'Programming embedded systems for hands-on experience with hardware-software integration, low-level architecture, and IoT concepts.',
    ],
  },
]

export const education: Education[] = [
  {
    school: 'Benue State University',
    degree: 'BSc Computer Science',
    location: 'Makurdi, Benue State',
    start: 'Apr 2024',
    end: null,
  },
]
