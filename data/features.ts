export interface FeatureCard {
  number: string
  title: string
  desc: string
  tags: string[],
  company: string,
}

export const features: FeatureCard[] = [
  {
    number: '01',
    title: 'Court Booking & Scheduling',
    desc: "The platform allowed users to reserve courts and practice sessions. My role was mainly on the frontend side, building the booking experience and customizing the calendar behavior based on business requirements. Users needed to see available time slots, different court schedules, and booking restrictions depending on memberships or availability. We used FullCalendar, but a lot of customization was needed because the default behavior didn't fully match the sports club workflow.",
    tags: ['Vue.js', 'FullCalendar', 'Vuex'],
    company: 'PlayerCoach',
  },
  {
    number: '02',
    title: 'Real-Time Updates',
    desc: "One important part was handling real-time updates with Socket.io. In booking systems, availability changes frequently, so users needed to see updates immediately without refreshing the page. If another user booked a court, blocked a slot, or changed a reservation, the frontend updated dynamically to prevent conflicts and improve user experience.",
    tags: ['Socket.io', 'Vue.js', 'Real-time'],
    company: 'PlayerCoach',
  },
  {
    number: '03',
    title: 'REST API Integration',
    desc: "The frontend relied heavily on REST APIs for booking data, schedules, memberships, and user management. Part of my role was integrating those APIs into the UI, handling loading states, error handling, and making sure the data flow felt smooth for the user.",
    tags: ['REST API', 'Vue.js', 'UX'],
    company: 'PlayerCoach',
  },
  {
    number: '04',
    title: 'Responsive & Pixel-Perfect UI',
    desc: "The product was used on desktop, tablets, and mobile devices, so responsiveness was important. A lot of the work involved translating Figma or design requirements into clean, production-ready UI while maintaining consistency across different screen sizes.",
    tags: ['Responsive', 'Figma', 'CSS', 'Vue.js'],
    company: 'PlayerCoach',
  },
  {
    number: '05',
    title: 'Team Collaboration',
    desc: "I worked closely with both backend developers and designers. Usually we discussed feature behavior, API responses, edge cases, and how the booking flow should behave from the user perspective.",
    tags: ['Collaboration', 'Backend', 'Design'],
    company: 'PlayerCoach',
  },
]
