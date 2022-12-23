/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./styles/tailwind.config.js",
  content: ["./src/**/*.{jsx,ts,js,tsx}"],
  theme: {
    extend: {
      width: {
        90: "90%",
      },
    },
  },
  plugins: [],
}
