/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#4F9D69", // example green
        "brand-cream": "#FFF8E1", // example cream
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
