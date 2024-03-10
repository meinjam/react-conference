import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '0rem',
          xl: '0rem',
          '2xl': '0rem',
        },
      },
      colors: {
        'theme-yellow': '#FFC93E',
        'theme-blue-gulf': '#111D5E',
        'theme-blue-royal': '#2563EB',
        'theme-storm-gray': '#617187',
        'theme-bianca': '#f9fafb',
        'theme-sliver': '#cdcdcd',
      },
      boxShadow: {
        'c-card-shadow': '0px 4px 8px 0px rgba(0,0,0,0.06)',
      },
      fontSize: {
        hero: ['140px', { lineHeight: '140px', fontWeight: 'bold' }],
        'heading-1': ['48px', { lineHeight: '58px', fontWeight: 'bold' }],
        'heading-2': '24px',
        'heading-3': '20px',
        'heading-4': '18px',
        'heading-5': '16px',
        'heading-6': ['14px', { lineHeight: '17px' }],
        'heading-7': '12px',
      },
      screens: {
        '2xl': '1320px',
      },
      borderRadius: {
        '30': '30px',
      },
    },
  },
  plugins: [],
};
export default config;
