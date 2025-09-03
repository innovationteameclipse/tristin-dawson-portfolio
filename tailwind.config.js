/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1a1a1a',
        'light-gray': '#9ca3af',
        'accent-green': '#10b981',
        'border-gray': '#374151',
        // Light mode colors
        'light-bg': '#ffffff',
        'light-text': '#1f2937',
        'light-card': '#f3f4f6',
        'light-border': '#e5e7eb',
      },
      fontFamily: {
        'sans': ['var(--font-public-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
