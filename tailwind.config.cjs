/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "12PMP": "428px",
        "12PMLS": "926px",
      },
    },
  },
  plugins: [],
};
