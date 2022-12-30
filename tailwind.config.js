/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      width: {
        '130': '34rem'
      },
      fontSize: {
        '3.5': '2rem',
        '1':'4rem'
      },
    },
  },
  variant: {
    extend: {
    },
  },
  plugins: [
  ],
}
