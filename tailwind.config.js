/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#17372e',
        pine: '#234c3f',
        moss: '#6c7863',
        sand: '#d9c6a3',
        cream: '#f4efe6',
        terracotta: '#a95f3d',
        ink: '#17201d',
        gold: '#b99a62',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 55, 46, 0.14)',
      },
    },
  },
  plugins: [],
}
