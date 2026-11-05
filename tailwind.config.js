/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        google: {
          blue: "#4285f4",
          green: "#34a853",
          yellow: "#fbbc04",
          red: "#ea4335",
        },
      },
    },
  },
  plugins: [],
};