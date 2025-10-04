/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        navbar: "64px",
      },
      colors: {
        brand: {
          DEFAULT: "#4BA6A8", // text-brand and logo color
        },
      },
    },
  },
  plugins: [],
}
