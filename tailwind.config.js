/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#cee3e9',
        'neon-green': '	#52ffa8',
        'dark-blue': '#1f2632',
        'grayish-blue': '#4e5d73',
        'dark-grayish-blue': '	#323a49',
      },
      fontSize: '28px',
      fontWeight: 800,
    },
  },
  plugins: [],
};
