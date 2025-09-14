/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // if you use Next.js or React
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx}"    // include app dir if Next.js 13+
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
