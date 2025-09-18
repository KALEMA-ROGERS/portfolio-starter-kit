/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          400: '#d4d4d4',
          600: '#525252', // Add neutral-600 for dark mode if needed
        },
      },
      textDecorationColor: {
        'neutral-400': '#d4d4d4',
        'neutral-600': '#525252',
      },
    },
  },
  plugins: [],
};