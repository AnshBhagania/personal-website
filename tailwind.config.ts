/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],  
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        grotB: ['var(--font-bg)', 'sans-serif'],
        space: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
