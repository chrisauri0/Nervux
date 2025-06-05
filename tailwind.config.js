module.exports = {
   content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010119",
        secondary: "#1b56ac",
        accent: "#0de7fc",
        neutral: "#a6a6a6",
        light: "#e7f1f8",
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        sans: [
          "Glacial Indifference",
          "Roboto",
          "League Spartan",
          "sans-serif",
        ],
      },
    },
  },
};
