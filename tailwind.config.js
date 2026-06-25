/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#EDB04F",
        dark: "#1a1a2e",
        muted: "#6b6b7b",
      },
      fontFamily: {
        sans: ["Neue Haas", "sans-serif"],
        serif: ["GT Super Display", "serif"],
      },
    },
  },
  plugins: [],
};
