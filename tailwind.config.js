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
        },
      }
    ,
  },
  plugins: [],
}

