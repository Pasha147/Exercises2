/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
    },

    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      backgroundImage: {
        "resume-section": `
          linear-gradient(25deg, rgba(2,0,36,0.95) 28%, rgba(0,46,82,0.95) 67%, rgba(0,86,159,0.95) 100%), 
          url('/chestnut2.svg')`,
      },

      backgroundSize: {
        "gradient-cover-grid": "cover, 300px 300px",
      },
      backgroundRepeat: {
        "no-repeat-grid": "no-repeat, repeat",
      },
      backgroundPosition: {
        "center-grid": "center, center",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "60%": { transform: "scaleY(1.4)" },
          "90%": { transform: "scaleY(0.9)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     ".mask-fade-bottom": {
    //       "-webkit-mask-image":
    //         "linear-gradient(to bottom, black 70%, transparent)",
    //       "mask-image": "linear-gradient(to bottom, black 70%, transparent)",
    //       "-webkit-mask-repeat": "no-repeat",
    //       "mask-repeat": "no-repeat",
    //     },
    //   });
    // },
  ],
};
