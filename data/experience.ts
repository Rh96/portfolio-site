export interface ExperienceItem {
  period: string
  company: string
  project?: string
  location: string
  role: string
  bullets: string[]
  tech?: string
}

export const experience: ExperienceItem[] = [
  {
    period: '10/2021 – 12/2025',
    company: 'PlayerCoach',
    project: 'Sports-coaching platform',
    location: '📍 Toronto, Canada (Remote)',
    role: 'Frontend Developer',
    bullets: [
      'Owned frontend delivery for a sports-coaching platform covering facility and court booking and practice scheduling, translating product requirements and designs into technical solutions and shipping features through to release.',
      'Made technical and implementation decisions for frontend features, including component structure, state design and API integration, keeping complex booking workflows maintainable.',
      "Built booking and practice scheduling on a customized FullCalendar, adapted to the platform's booking workflows, with real-time availability updates over Socket.io.",
      'Contributed to the migration from Vue 2 and Vuex to Vue 3 and Pinia; managed application state and integrated the UI with REST APIs in coordination with backend developers.',
      'Built multi-step forms with advanced client-side validation for complex sign-up and booking flows, and reusable components for responsive, cross-browser interfaces.',
      'Applied lazy loading to field validation in complex forms to keep them responsive.',
      'Wrote unit tests with Vitest and end-to-end tests with Cypress.',
      'Debugged and resolved production issues in the FullCalendar-based booking system, and kept dependencies current to maintain application stability.',
    ],
    tech: 'Vue 2/3, TypeScript, JavaScript, Vuex, Pinia, FullCalendar, Socket.io, REST APIs, Vitest, Cypress, CI/CD',
  },
]
