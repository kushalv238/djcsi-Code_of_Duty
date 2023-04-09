/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
    },
    colors: {
      blue: "#3E54AC",
      purple: "#A87AE6",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#d9d9d9",
      lightGrey: "#f5f5f5",
    },
    fontFamily: {
      // sans: ['PT Sans', 'sans-serif'],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
