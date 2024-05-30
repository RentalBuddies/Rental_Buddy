/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs","./public/**/*.js"],
  theme: {
    extend: {
      colors:{
        "theme":"#000"
      }
    },
  },
  plugins: [],
}