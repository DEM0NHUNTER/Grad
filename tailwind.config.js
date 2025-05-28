/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '480px',   // small phones
      'md': '768px',   // tablets
      'lg': '1024px',  // small laptops
      'xl': '1280px',  // desktops
    },
    extend: {
        animation: {
            'fade-in': 'fadeIn 0.5s ease-out forwards',
        },
        keyframes: {
            fadeIn: {
             '0%': { opacity: 0, transform: 'translateY(10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
            },
         },
      colors: {
        primary: '#1e40af',
        secondary: '#9333ea',
        accent: '#f59e0b',
        background: '#f9fafb',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
