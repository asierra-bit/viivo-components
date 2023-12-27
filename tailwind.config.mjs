const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geologica', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-1': {
          DEFAULT: '#A925C3',
        },
        'primary-2': {
          DEFAULT: '#532DEE',
        },
        'secondary-1': {
          DEFAULT: '#1406E0',
        },
        'secondary-2': {
          DEFAULT: '#7A03F9',
        },
        ebony: {
          DEFAULT: '#0D0919',
        },
        haiti: {
          DEFAULT: '#191139',
        },
        'jordy-blue': {
          DEFAULT: '#9CA1FA',
        },
      },
    },
  },
  plugins: [],
};
