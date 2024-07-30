/** Applies styling to all files in the app directory
 * "/**.*" highlights a) all the folders and b) all the files in the directory
@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy': '#202834',
        'dark_blue': '#3D5A80',
        'sky_blue': '#98C1D9',
        'cyan': '#E0FBFC',
        'orange': '#EE6C4D',
        'white': '#FFFFFF',
        'light_white': '#FCF4F4',
        'gray': '#B0B0B0',
        'dark_fill': '#272C34',
        'green': '#188016'
      },
      fontFamily: {
        popblack: ['Poppins-Black', 'sans-serif'],
        popblackitalic: ['Poppins-BlackItalic', 'sans-serif'],
        popbold: ['Poppins-Bold', 'sans-serif'],
        popbolditalic: ['Poppins-BoldItalic', 'sans-serif'],
        popextrabold: ['Poppins-ExtraBold', 'sans-serif']
      }
    },
  },
  plugins: [],
}

