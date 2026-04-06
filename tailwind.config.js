/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0a1628',
          mid: '#1e3a5f',
          light: '#2a4f80',
        },
        amber: {
          accent: '#f0a500',
          light: '#f5bc40',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
