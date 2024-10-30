/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      color: {
        newnew: "#123456"
      },
      fontSize: {
        huge: ["30rem", { lineHeaight: "1" }],
      },
    },
  },
  plugins: [],
}

