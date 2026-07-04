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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0F172A',
        surface:    '#1E293B',
        foreground: '#F8FAFC',
        muted:      '#94A3B8',
        border:     '#334155',
        accent:     '#3B82F6',
        'accent-light': '#60A5FA',
      },
    },
  },
  plugins: [],
};
