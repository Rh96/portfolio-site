export interface ExperienceItem {
  period: string
  company: string
  project?: string
  location: string
  role: string
  bullets: string[]
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    period: '02/2026 – 05/2026',
    company: 'Quipu',
    project: 'ProCredit Mobile Banking App',
    location: '📍 Skopje, North Macedonia',
    role: 'React Native Developer',
    bullets: [
      'Developed and maintained mobile applications using React Native for both Android and iOS.',
      'Built reusable UI components and implemented responsive mobile interfaces.',
      'Integrated REST APIs and optimized app performance across platforms.',
      'Collaborated closely with designers and developers to ship features on time.',
    ],
  },
  {
    period: '10/2021 – 12/2025',
    company: 'PlayerCoach',
    project: 'Sports club management & booking platform',
    location: '📍 Toronto, Canada (Remote)',
    role: 'Frontend Developer (Vue JS / TypeScript)',
    bullets: [
      'Developed responsive, pixel-perfect frontend features including advanced form validation.',
      'Maintained and updated packages with npm to ensure stability and compatibility.',
      'Integrated new features in collaboration with design and backend teams.',
      'Connected frontend with RESTful APIs for seamless data flow and UX.',
      'Managed global application state using Vuex; implemented real-time updates with Socket.io.',
      'Customized FullCalendar for court and practice booking systems.',
    ],
  },
]
