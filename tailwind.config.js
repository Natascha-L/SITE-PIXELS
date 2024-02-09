/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        'imageFond': "url('imageFond.png')",
      },

      fontFamily: {
        Pixel: '"pf-pixelscript", "sans-serif"',

      },

    },
  },
  plugins: [],
}

