export interface QAItem {
  question: string
  answer: string
}

export const qa: QAItem[] = [
  {
    question: 'What does pixel-perfect design mean to you?',
    answer: "To me, pixel-perfect means translating the design into the frontend as accurately as possible while still keeping the app responsive and usable across devices. I usually pay attention to spacing, typography, alignment, states, and interactions so the final result feels polished and consistent with the design team's vision.",
  },
  {
    question: 'What do you mean by responsive frontend features?',
    answer: 'I worked on making sure the platform worked smoothly across desktop, tablet, and mobile devices. That included layouts, forms, booking flows, and UI interactions.',
  },
  {
    question: 'What was your role in the team?',
    answer: 'I was mainly focused on frontend development in React, implementing features, integrating APIs, improving UI/UX behavior, and collaborating closely with design and backend teams.',
  },
]
