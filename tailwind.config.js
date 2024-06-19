/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      
      extend: {
        colors: {
          "env_green": "#254330",
          "lightenv_green": "#53C351",
          "lightorange": "#C16E6F",
          "shedaorange": "#FED8D8",
          "shedapagebg": "#FBF9F9",
          "shedaicon-green": "#00990F",
          "shedaicon-purple": "#9747FF",
        },
      }
    ,
  },
  plugins: [],
}

