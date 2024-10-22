/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "rgb(20,88,248)",
        'secondary': "rgba(0, 0, 0, 0.7)",
        'white-alpha': "rgba(255, 255, 255, 0.6)",
        'black-alpha': "rgba(0, 0, 0, 0.08)",
        'line': "rgba(255, 255, 255, 0.171)"
      }
    },
  },
  plugins: [],
}