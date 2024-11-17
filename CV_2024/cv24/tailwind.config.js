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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes:{
        'open-menu':{
          '0%': {transform: 'scaleY(0)'},
          '60%': {transform: 'scaleY(1.4)'},
          '90%': {transform: 'scaleY(0.9)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
};
