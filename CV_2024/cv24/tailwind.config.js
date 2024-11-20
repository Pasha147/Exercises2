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
      screens:{
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
      },
      backgroundImage: {
        'dark-theme': `linear-gradient(25deg, rgba(2,0,36,1) 28%, rgba(0,46,82,1) 67%, rgba(0,86,159,1) 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none' stroke='rgba(255,255,255,0.05)'%3E%3Cpath d='M0 40L40 0M-1 10L11 -1M29 40L40 29M0 30L30 0'/%3E%3C/svg%3E")`,
      
      
      
        'gradient-main': 'linear-gradient(180deg, #4A90E2 0%, #50E3C2 100%)',
        'wave-pattern': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23ffffff%22 fill-opacity=%220.5%22 d=%22M0,32L60,42.7C120,53,240,75,360,96C480,117,600,139,720,122.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z%22/%3E%3C/svg%3E')",
        'subtle-grid': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22 viewBox=%220 0 50 50%22 fill=%22none%22%3E%3Crect width=%2250%22 height=%2250%22 fill=%22%23ffffff%22 fill-opacity=%220.01%22/%3E%3Cpath d=%22M0 50L50 0H0V50Z%22 fill=%22%23ffffff%22 fill-opacity=%220.02%22/%3E%3C/svg%3E')"
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
