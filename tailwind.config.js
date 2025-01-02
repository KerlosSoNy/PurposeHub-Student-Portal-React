/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        "background":'#e6f4f7',
        "brand":'#008AAB',
        "secondBrand":"#CBB264",
        "errorState":"#E11A0B",
        "successState":"#14AE5C",
        "warningState":"#F39E09",
        "warningState-02":"#cbb264",
        "gray-01":"#1F1F1F",
        "gray-02":"#525252",
        "gray-03":"#A9A9A9",
        "login":"#CBB264"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        "3xl": "1920px"
      },
      fontSize:{
        "headSection":"clamp(20px, 2vw, 28px)",
      },
      width:{
        "inputForms":'clamp(303px,50vw,343px)'
      }
    },
  },
  plugins: [],
}