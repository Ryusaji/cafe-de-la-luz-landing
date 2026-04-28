/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        luxury: {
          50: '#F9F9F8',
          100: '#F3F2EF',
          200: '#E6E4DD',
          800: '#2C2A29',
          900: '#1A1918',
        }
      },
      boxShadow: {
        'soft': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
