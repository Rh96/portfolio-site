export const certifications: string[] = [
  'Getting Started with Front-End and Web Development',
  'Introduction to Software Engineering',
  'Designing User Interfaces and Experiences (UI/UX)',
  'Introduction to HTML, CSS, & JavaScript',
  'Developing Websites and Front-Ends with Bootstrap',
  'Getting Started with Git and GitHub',
  'Developing Front-End Apps with React',
  'Intermediate Web and Front-End Development',
  'Get Started with Cloud Native, DevOps, Agile, and NoSQL',
  'Front-End Development Capstone Project',
]

export interface AiCertification {
  title: string
  issuer: string
  href?: string
}

export const aiCertifications: AiCertification[] = [
  {
    title: 'Claude 101',
    issuer: 'Anthropic Academy',
    href: 'https://verify.skilljar.com/c/ytv8mpr7zbuj',
  },
]
