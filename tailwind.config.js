/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#800080",
        secondary: "#d500f9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },

    },
  },
  plugins: [],
}

