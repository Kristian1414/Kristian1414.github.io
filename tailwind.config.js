/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#05060f",
          900: "#0a0c1b",
          800: "#11142a",
          700: "#1b1f3b",
        },
        accent: {
          DEFAULT: "#5b8cff",
          soft: "#8fb0ff",
          violet: "#8b7bff",
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        "fade-in": "fade-in .8s ease forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
