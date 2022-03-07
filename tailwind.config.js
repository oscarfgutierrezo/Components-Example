const theme = require('tailwindcss/defaulttheme')

module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      container: {
        center: true,
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      },
      extend: {
        colors: {
          "primary": "#2F1893",
          "background": "#F2F2F2",
          "green": "#25DAC5",
          "dark-green": "#1EAE9E",
          "violet": "#1E0E62",
          "dark-violet": "#151439",
          "bright-gray": "#EBEAED",
          "blue-focus": "#2563EB"
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
};
