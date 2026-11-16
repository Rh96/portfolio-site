export interface StackGroup {
  label: string
  note: string
  items: string[]
}

// Mirrors the CV: "production" = used in paid work, "project-based" = used in my own projects.
export const stack: StackGroup[] = [
  {
    label: 'Production experience',
    note: 'used in paid, shipped work',
    items: [
      'Vue.js (Vue 2, Vue 3)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vuex', 'Pinia',
      'REST APIs', 'Socket.io', 'FullCalendar', 'Vitest', 'Cypress', 'Git/GitHub', 'CI/CD',
    ],
  },
  {
    label: 'Project-based experience',
    note: 'used in my own projects',
    items: [
      'React (Hooks)', 'Next.js (App Router)', 'React Native', 'React Hook Form', 'Zod', 'shadcn/ui',
      'Firebase', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'Bootstrap', 'React Testing Library',
      'Jest', 'Vitest', 'Playwright', 'CI/CD',
    ],
  },
  {
    label: 'Engineering',
    note: 'how I work',
    items: [
      'Component architecture', 'Complex forms and validation', 'State management',
      'Unit and end-to-end testing', 'Accessibility (axe scans, keyboard and screen-reader support)',
      'Performance profiling (Core Web Vitals)', 'AI-assisted development (Claude Code)',
    ],
  },
]
