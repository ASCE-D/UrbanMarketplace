/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212", // Dark Gray
        secondary: "#1e1e1e", // White
        accent: "#00d4ff", // Orange
      },
    },
  },
  plugins: [],
};
