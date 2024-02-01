/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,php,json}",
  ],
  theme: {

    extend: {
      colors: {
        // Add custom colors to the 'extend' section
        custom: {
          primary: '#3498db',     // Example primary color
          secondary: '#2ecc71',   // Example secondary color
          danger: '#e74c3c',      // Example danger color
          dark: '#34495e',        // Example dark color
          light: '#ecf0f1',       // Example light color
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

