export interface StackItem {
  icon: string
  name: string
  tag: string
}

export const stack: StackItem[] = [
  { icon: '🟢', name: 'Vue.js', tag: 'Proficient' },
  { icon: '⚛️', name: 'React', tag: 'Proficient' },
  { icon: '📱', name: 'React Native', tag: 'Mobile' },
  { icon: '🔷', name: 'TypeScript', tag: 'Typed JS' },
  { icon: '🗃️', name: 'Vuex', tag: 'State Mgmt' },
  { icon: '🔗', name: 'Redux', tag: 'State Mgmt' },
  { icon: '🔌', name: 'REST APIs', tag: 'Integration' },
  { icon: '⚡', name: 'Socket.io', tag: 'Real-time' },
  { icon: '📦', name: 'npm / Git', tag: 'Tooling' },
  { icon: '🎨', name: 'Bootstrap', tag: 'Styling' },
  { icon: '🌊', name: 'Tailwind CSS', tag: 'Styling' },
  { icon: '🎛️', name: 'FullCalendar', tag: 'Scheduling' },
  { icon: '🖼️', name: 'UI/UX Design', tag: 'Figma' },
  { icon: '☁️', name: 'Cloud Native', tag: 'DevOps/NoSQL' },
  { icon: '🤖', name: 'GitHub', tag: 'CI/CD' },
]
