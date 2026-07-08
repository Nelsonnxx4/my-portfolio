import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'mealmatch',
    name: 'MealMatch',
    description:
      'A food recommendation web app that suggests local meals based on budget, meal times, and country.',
    bullets: [
      'Built a responsive React UI with TanStack Query for state management and Supabase for auth and the database.',
      'Implemented Paystack payments and premium features — favorites, grocery list generation, and history.',
      'Tested the application with React Testing Library and Vitest.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'TanStack Query', 'Vitest', 'Paystack'],
    url: 'https://mealmatch.food',
    kind: 'web',
    featured: true,
  },
  {
    id: 'zende',
    name: 'Zende',
    description: 'A travel journal web app for capturing and organizing trips.',
    bullets: [
      'Built a responsive, user-friendly Vue UI with TypeScript for type safety.',
      'Used Supabase for database and authentication.',
      'Added Stripe to collect payments and gate premium features.',
    ],
    stack: ['Vue.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Stripe'],
    url: 'https://zende-delta.vercel.app/',
    kind: 'web',
    featured: true,
  },
  {
    id: 'not-lify',
    name: 'Not-lify',
    description:
      'A full-stack notes app — create, organize, tag, favorite, and archive notes, with folders, search, and Google or email/password sign-in.',
    bullets: [
      'Built a Node/Express + Prisma + PostgreSQL (Neon) API with Redis and Zod-validated JWT auth alongside Google OAuth.',
      'Built the React + TanStack Query + HeroUI frontend with folders, tags, search, and dedicated favorites/archive views.',
      'Responsive layout — sidebar navigation on desktop, bottom navigation on mobile.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'TanStack Query'],
    url: 'https://not-lify.vercel.app/',
    repoUrl: 'https://github.com/Nelsonnxx4/my-notes',
    kind: 'web',
    featured: true,
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener API',
    description: 'Server-side logic for a URL shortener with click tracking.',
    bullets: [
      'Spun up the server with Node.js and Express.',
      'Used TypeScript for type safety and to reduce errors.',
      'Used Redis for caching and Supertest for API testing.',
    ],
    stack: ['Express', 'TypeScript', 'Node.js', 'Redis', 'Supertest'],
    repoUrl: 'https://github.com/Nelsonnxx4/my-url-shortener-api',
    kind: 'api',
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const apiProjects = projects.filter((project) => project.kind === 'api')
export const webProjects = projects.filter((project) => project.kind === 'web')
