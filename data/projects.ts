export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  name: string
  summary: string
  tech: string[]
  highlights: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    name: 'Invoicing & Client Tracker for Freelancers',
    summary:
      'Web app for freelancers to manage clients, build invoices with line items and tax, and track outstanding and overdue payments.',
    tech: ['Next.js', 'TypeScript', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod', 'Tailwind CSS'],
    highlights: [
      'Strict TypeScript with Zod schemas as the single source of domain types; TanStack Query with optimistic updates and rollback; Zustand for UI state only.',
      'Vitest, React Testing Library and Playwright; axe accessibility scans of every route in both themes and a keyboard-only test of the core flow run in CI.',
      'GitHub Actions (lint, type check, tests, build, then end-to-end) with Vercel preview and production deploys; Core Web Vitals measured and slow spots traced.',
    ],
    links: [
      { label: 'Live demo', href: 'https://freelance-invoicing-and-client-trac.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Rh96/freelance_invoicing_and_client_tracker' },
    ],
  },
  {
    name: 'Calendar App',
    summary:
      'Android calendar with month and day views, offline-capable real-time sync and an optional biometric lock.',
    tech: ['React Native', 'TypeScript', 'Firebase (Auth, Firestore)'],
    highlights: [
      'Firestore security rules enforce per-user ownership and validate every event; the biometric lock gates the existing session and never stores a password.',
      'Jest and React Native Testing Library (163 tests) plus 22 security-rules tests in the Firebase emulator; TalkBack roles and labels.',
      'GitHub Actions runs type check, lint and all tests on every pull request.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Rh96/react-native-calendar-app' }],
  },
]
