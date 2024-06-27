import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary-light":"#FBEDE0",
        "primary-text":"#A69484",
        "secondary-light":"#FDD1D2",
        "secondary-text":"#A45759",
        "secondary-extralight":"#FBF5F5",
        "tertiary-light":"#D4BBDD",
        "tertiary-text":"#A982B7",
        "accent-primary":"#D0AB99",
        "primary-dark":"#aba995",
        "secondary-dark":"#92a3a3",
        "tertiary-dark":"#999285"
      },
      screens: {
        'xs': '420px',
      },
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
