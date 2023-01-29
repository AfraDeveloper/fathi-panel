/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191C24",
        black: "#000",
        box: "#12151E",
        success: "#00d25b",
        warning: "#ffab00",
        danger: "#fc424a",
        info: "#8f5fe8",
        "border-color": "#2c2e33",
      },
    },
  },
  plugins: [],
};
