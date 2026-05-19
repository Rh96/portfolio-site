export interface EducationItem {
  period: string
  name: string
  place: string
}

export interface AwardItem {
  year: string
  name: string
  desc: string
  link?: { href: string; label: string }
}

export const education: EducationItem[] = [
  {
    period: '2019 – 2020',
    name: 'Web Developer',
    place: 'SEDC – Seavus Education and Development Center, Skopje',
  },
  {
    period: '2011 – 2015',
    name: 'High School Degree',
    place: 'SUGS Lazar Tanev, Skopje (EQF Level 4)',
  },
  {
    period: '2020',
    name: 'Certificate in English',
    place: 'Let\'s Learn — B2 Level (Independent User)',
  },
]

export const awards: AwardItem[] = [
  {
    year: '2017',
    name: '🏆 Global Game Jam — 3rd Place',
    desc: 'Won 3rd place at Global Game Jam 2017 with "Wave On The Way" — a browser surfing game where players ride waves, dodge skulls, and collect coins. Built in 48 hours.',
    link: {
      href: 'https://v3.globalgamejam.org/2017/games/wave-way-wotw',
      label: 'View project ↗',
    },
  },
]
