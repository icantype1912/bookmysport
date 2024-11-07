/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#121212',
        purple: '#7209b7',
        error: '#f44336',
        green: '#4BB543',
        pink: '#f72585'
      },
    },
  },
  plugins: [],
};
