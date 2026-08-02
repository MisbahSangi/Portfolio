/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plex)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        background: '#FAFAFA',
        surface: '#FFFFFF',
        foreground: '#0A0A0A',
        muted: '#5B6472',
        border: '#E2E5E9',
        accent: '#1E3A5F',
        'accent-light': '#22C55E',
      },
    },
  },
  plugins: [],
};