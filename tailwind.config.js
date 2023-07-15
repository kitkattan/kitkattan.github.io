/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FCF9F7',
        red: '#F5705F',
        yellow: '#FFC977',
        blue: '#94B4C6',
        gray:'#D9D9D9',
        black: '#585858',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: ['bg-red',]
}
