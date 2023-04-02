/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#cee3e9',
        'neon-green': '	#52ffa8',
        'dark-blue': '#1f2632',
        'grayish-blue': '#4e5d73',
        'dark-grayish-blue': '	#323a49',
      },
      boxShadow: {
        /*         '3xl': '0 35px 60px 5px rgba(179, 225, 217, 0.5)',
         */
        '3xl': '0 0px 30px 5px rgba(82, 225, 168, 0.5)',
      },

      fontSize: { 'quote-size': '28px' },
      fontWeight: 800,
      fontFamily: {
        manrope: ['manrope', 'system-ui'],
      },
    },
  },
  plugins: [],
};
