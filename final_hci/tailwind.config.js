/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'dynamic-base': 'var(--dynamic-font-size, 1rem)',
      },
    },
  },
  plugins: [],
};