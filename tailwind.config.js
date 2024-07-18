/** Applies styling to all files in the app directory
 * "/**.*" highlights a) all the folders and b) all the files in the directory
@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

