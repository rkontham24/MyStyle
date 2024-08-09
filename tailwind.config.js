/** Applies styling to all files in the app directory
 * "/**.*" highlights a) all the folders and b) all the files in the directory
@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'nav': '#202834',
        'new_nav': '#FFFFFF',
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
        popbold: ['Poppins-Bold', 'sans-serif'],
        popextrabold: ['Poppins-ExtraBold', 'sans-serif'],
        popextralight: ['Poppins-ExtraLight', 'sans-serif'],
        poplight: ['Poppins-Light', 'sans-serif'],
        popmedium: ['Poppins-Medium', 'sans-serif'],
        popregular: ['Poppins-Regular', 'sans-serif'],
        popsemibold: ['Poppins-SemiBold', 'sans-serif'],
        popthin: ['Poppins-Thin', 'sans-serif'],

        interblack: ['Inter-Black', 'sans-serif'],
        interbold: ['Inter-Bold', 'sans-serif'],
        interextrabold: ['Inter-ExtraBold', 'sans-serif'],
        interextralight: ['Inter-ExtraLight', 'sans-serif'],
        interlight: ['Inter-Light', 'sans-serif'],
        intermedium: ['Inter-Medium', 'sans-serif'],
        interregular: ['Inter-Regular', 'sans-serif'],
        intersemibold: ['Inter-SemiBold', 'sans-serif'],
        interthin: ['Inter-Thin', 'sans-serif']
      }
    },
  },
  plugins: [],
}

