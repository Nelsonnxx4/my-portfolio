import type { SkillGroup } from '@/types/portfolio'

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS (Sass)', 'Python'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['Vue.js', 'React', 'Next.js', 'Tailwind CSS', 'TanStack Query'],
  },
  {
    label: 'Tools & Testing',
    items: [
      'Git',
      'Vite',
      'Webpack',
      'Redux Toolkit',
      'ESLint',
      'Jest',
      'Vitest',
      'Supertest',
      'React Testing Library',
    ],
  },
  {
    label: 'Backend & Database',
    items: ['Node.js', 'Express.js', 'Supabase', 'Firebase', 'MongoDB', 'PostgreSQL', 'Redis'],
  },
]
