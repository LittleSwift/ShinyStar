/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'background': "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(255,251,235,1) 100%), url('/img/background.jpg')",
      },
    },
  },
  plugins: [],
}

