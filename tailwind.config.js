/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A3D5C', // petroleum blue
          light: '#125E8A',
          dark: '#072A40',
        },
        secondary: {
          DEFAULT: '#3DAFE3', // light blue
          light: '#73C7EE',
          dark: '#2089BA',
        },
        accent: {
          DEFAULT: '#E3F2FD',
          light: '#F8FCFF',
          dark: '#C5E3F9',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};