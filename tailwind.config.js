/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4fb',
          100: '#d9e6f5',
          200: '#b3cbe8',
          300: '#84aad7',
          400: '#5585c2',
          500: '#3365a8',
          600: '#234e8c',
          700: '#1b3d70',
          800: '#16305a',
          900: '#112544',
          950: '#0b1830',
        },
        accent: {
          50: '#fff5ec',
          100: '#ffe8d3',
          200: '#fdcda5',
          300: '#fbab6d',
          400: '#f88232',
          500: '#f58220',
          600: '#e26a05',
          700: '#bb5308',
          800: '#95430d',
          900: '#7a380e',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
