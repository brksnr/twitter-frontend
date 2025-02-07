 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        'Aside': '37rem',
      },
      colors: {
        "blue": '#1DA1F2',
        "black": '#14171A',
        "darkgray": '#657786',
        "lightgray": '#AAB8C2',
        "extralightgray": '#E1E8ED',
        "extraextralightgray": '#F5F8FA',
      }
    },
  },
  plugins: [],
}