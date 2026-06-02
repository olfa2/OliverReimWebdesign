/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081424',
          900: '#0d1b2f',
          800: '#132742',
          700: '#1a3353',
        },
        mist: '#f7f9fc',
        line: '#e6ebf2',
        accent: '#2f7d78',
        accentDark: '#256661',
        gold: '#c5a46d',
      },
    },
  },
  plugins: [],
}
