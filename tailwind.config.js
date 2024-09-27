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
          "shedalightgreen": "#75B629",
          "shedamuchlightgreen": "#E7F7D0",
          "shedamuchlightgreen2": "#E4F6CB",
          "shedalightblue": "#E7EAFF",
          "shedanormalblue": "#4C50FF",
          "shedadeepblue": "#00037A",
          "shedalightpurple": "#ECE8FF",
          "shedanormalpurple": "#8247E5",
          "shedalightyellow": "#FFEDC6",
          "shedanormalyellow": "#FFA820",
          "lightorange": "#C16E6F",
          "shedaorange": "#FED8D8",
          "shedapagebg": "#FBF9F9",
          "shedaicon-green": "#00990F",
          "shedaicon-purple": "#9747FF",
          "shedainfo-yellow": "#FFA820",
          "shedagray": "#757E9F",
          "shedared": "#B30608",
          "shedanewred": "#FF2929",
          "shedalightred": "#FFDFDF",
          "shedalightred2": "#FFC2C2",
          "shedaoffwhite": "#F5F5F5",
          "new": "#0099D9"
        },
        backgroundImage: {
          "sign_in_img": "url('./src/assets/images/Sheda Academy - Sign in form.png')"
        },
        fontFamily: {
          lato: ['Lato', 'sans-serif'], // Define your custom font
        },
      }
    ,
  },
  plugins: [],
}

