import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Classic mode
        bg: '#0a0a0a',
        surface: '#111111',
        surface2: '#181818',
        border: '#222222',
        accent: '#e8ff47',
        accent2: '#47d4ff',
        text: '#f0f0f0',
        muted: '#666666',
        muted2: '#888888',
        // Code mode (GitHub-dark + syntax colours), prefixed so it can't clash with classic
        'c-bg': '#0d1117',
        'c-panel': '#161b22',
        'c-line': '#30363d',
        'c-tx': '#c9d1d9',
        'c-mut': '#8b949e',
        'c-grn': '#09c269',
        'c-blu': '#79c0ff',
        'c-org': '#ffa657',
        'c-red': '#ff7b72',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
