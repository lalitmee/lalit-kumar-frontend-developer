/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#161E29',
      secondary: '#FF811D',
      white: '#FFFFFF',
      black: '#000000',
      success: '#00BFB3',
      warning: '#FEC514',
      danger: '#BD271E',
      lgray: '#EDEFF2',
      link: '#0071C2',
      ldark: '#364C63',
      title: '#130F26',
      shade: {
        light: '#D3DAE6',
        lightest: '#F5F7FA',
        mlight: '#98A2B3',
        dark: '#69707D',
        mdark: '#747F92',
        darkest: '#343741',
      },
    },
    screens: {
      sm: '360px',
      md: '640px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
  },
  plugins: [],
};
