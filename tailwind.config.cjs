/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "back-ground": "#1F1D2B",
        "blue-dot": "#00C5E1",
        secondary: "#7F848B",
        primary: "#DDAC58",
        "light-back": "#252836",
        "dark-blue": "#676CDB",
      },
    },
  },
  plugins: [],
};
