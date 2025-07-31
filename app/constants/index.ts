// Navigation sections for the portfolio
export const NAVIGATION_SECTIONS = [
  'Intro',
  'Work', 
  'Values',
  'Background',
  'About',
  'Contact'
] as const

// Animation timing constants
export const ANIMATION_TIMINGS = {
  LOADER: {
    TEXT_IN_DELAY: 1000,
    EXIT_DELAY: 1900,
    EXIT_DURATION: 1000,
  },
  SCROLL: {
    INTERSECTION_THRESHOLD: 0.3,
  },
} as const

// Theme colors (matches CSS variables)
export const THEME_COLORS = {
  BG: 'var(--color-bg)',
  TEXT: 'var(--color-text)',
  MUTED: 'var(--color-muted)',
  ACCENT: 'var(--color-accent)',
} as const

// Work card default colors
export const WORK_CARD_COLORS = [
  'bg-amber-300',
  'bg-indigo-300', 
  'bg-emerald-300',
  'bg-rose-300',
  'bg-violet-300',
  'bg-cyan-300',
] as const

// Font classes mapping
export const FONT_CLASSES = {
  GROT: 'font-grot',
  GROT_BOLD: 'font-grotB',
  GROT_EXTRA_BOLD: 'font-grotXB',
  SPACE: 'font-space',
} as const

export type NavigationSection = typeof NAVIGATION_SECTIONS[number]
