/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            lighthover: '#ffb3c1',
            darkhover: '#e91e63',
            darktheme: '#121212',
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
    },
  },
  plugins: [],
};