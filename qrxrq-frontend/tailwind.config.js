export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // ✅ Ensures font works in Firefox
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
