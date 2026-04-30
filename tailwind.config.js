/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0b2a4a',
          charcoal: '#101820',
          orange: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}
