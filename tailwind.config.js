/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          500: '#0F1819',
          100: '#414141',
        },
        white: '#dddada',
        yellow: {
          100: '#FBFF2A',
          500: '#eab308',
        },
        blue: '#1a2a3a',
      },

      fontSize: {
        sm: '0.75rem',
        md: '0.875rem',
        base: '1rem',
        lg: '1.375rem',
        xl: '2rem',
        xxl: '3.25rem',
      },
    },
  },
  plugins: [],
};
