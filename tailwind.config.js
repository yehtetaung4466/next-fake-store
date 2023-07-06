/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      "modsm": "528px",
      "modmd": "912px",
      "modlg" : "1216px",
    },
    extend: {
    },
  },
  plugins: [require("daisyui")],
}
