/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mercari-red': '#ff0021',
        'bg-light': '#f8f9fa',
      },
    },
  },
  plugins: [],
}

