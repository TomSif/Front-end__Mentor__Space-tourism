/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin"); // Importation du plugin

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // Inclure tous les fichiers .html et .js dans le dossier src
  ],
  theme: {
    extend: {
      colors: {
        customBlue900: "#0b0d17",
        customBlue300: "#d0d6f9",
        customWhite: "#ffffff",
      },
      fontFamily: {
        text: ["Barlow Condensed", "sans-serif"],
        heading: ["Bellefair", "Arial", "sans-serif"],
      },
      screens: {
        mobile: "375px", // Mobile
        tablet: "768px", // Tablette
        desktop: "1440px", // Desktop
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".mobile-text-preset-1": {
          fontSize: "clamp(2.5rem, 21.33vw , 6rem)",
          letterSpacing: "0px",
          fontFamily: '"Bellefair", sans-serif',
          fontWeight: "400",
        },
        ".mobile-text-preset-2": {
          fontSize: "3.5rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".mobile-text-preset-3": {
          fontSize: "1.5rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".mobile-text-preset-4": {
          fontSize: "1.125rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".mobile-text-preset-6": {
          fontSize: "clamp(0.25rem, 4.266vw, 1.75rem)",
          letterSpacing: "15%",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
        },
        ".mobile-text-preset-8": {
          fontSize: "0.875rem",
          letterSpacing: "15%",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
        },
        ".mobile-text-preset-9": {
          fontSize: "clamp(0.65rem,4vw, 1rem)",
          lineHeight: "180%",
          letterSpacing: "0px",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
          opacity: "85%",
        },
        ".tablet-text-preset-2": {
          fontSize: "5rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".tablet-text-preset-3": {
          fontSize: "2.5rem",
          letterSpacing: "0%",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".tablet-text-preset-4": {
          fontSize: "1.5rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".tablet-text-preset-5": {
          fontSize: "1.125rem",
          letterSpacing: "15%",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
        },
        ".tablet-text-preset-9": {
          fontSize: "1rem",
          letterSpacing: "0px",
          lineHeight: "180%",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-1": {
          fontSize: "9rem",
          letterSpacing: "0px",
          fontFamily: '"Bellefair", sans-serif',
          fontWeight: "400",
        },
        ".desktop-text-preset-2": {
          fontSize: "6rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-3": {
          fontSize: "3.5rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-4": {
          fontSize: "2rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-5": {
          fontSize: "1.75rem",
          letterSpacing: "4px",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-6": {
          fontSize: "1.75rem",
          letterSpacing: "0px",
          fontFamily: "Bellefair, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-7": {
          fontSize: "0.875remm",
          letterSpacing: "2px",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-8": {
          fontSize: "1rem",
          letterSpacing: "2px",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
        },
        ".desktop-text-preset-9": {
          fontSize: "1.125rem",
          lineHeight: "180%",
          letterSpacing: "0px",
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: "400",
        },
      });
    }),
  ],
};
