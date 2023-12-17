import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-full':
          'linear-gradient(90deg,rgba(0,64,51,.9) 13.41%,rgba(0,89,64,.1) 42.61%,rgba(0,90,64,.2) 92.86%)',
        'hero-tablet':
          'linear-gradient(90deg,#014638 2.08%,rgba(1,70,56,.5) 29.53%,rgba(1,70,56,.1) 44.97%,rgba(1,70,56,0) 68.96%)',
        'hero-mobile': 'linear-gradient(0deg,#004537 48%,rgba(2,68,54,0) 62%)',
        'hero-mobile-break':
          'linear-gradient(0deg,#004537 59%,rgba(2,68,54,0) 72%)',
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-hover-color': 'var(--primary-hover-color)',
        'background-color': 'var(--background-color)',
        'background2-color': 'var(--background2-color)',
        'background3-color': 'var(--background3-color)',
        'background4-color': 'var(--background4-color)',
        'background5-color': 'var(--background5-color)',
        'span-color': 'var(--span-color)',
        'border-color': 'var(--border-color)',
        'border-hover-color': 'var(--border-hover-color)',
        'color-dark-gray': 'var(--color-dark-gray)',
        'color-gray': 'var(--color-gray)',
        'btn-border-color': 'var(--btn-border-color)',
        'btn-hover-background-color': 'var(--btn-hover-background-color)',
        'btn-secondary-hover-background-color':
          'var(--btn-secondary-hover-background-color)',
        'menu-mobile-background': 'var(--menu-mobile-background)',
        'footer-background': 'var(--footer-background)',
      },
      boxShadow: {
        menuItem:
          'inset 0 1px 0 #e6ecf2, inset 1px 0 0 #e6ecf2, inset -1px 0 0 #e6ecf2, inset 0 -1px 0 #fff',
        menuDrop:
          '0 16px 16px rgba(103,116,129,.15), inset 0 -1px 0 #e6ecf2, inset 1px 0 0 #e6ecf2, inset -1px 0 0 #e6ecf2;',
        btn: '0 0 4px 2px rgba(66,236,154,.5)',
      },
      fontFamily: {
        'sharon-display': ['Sharon Display', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        '3sm': '445px',
        '2sm': '478px',
        533: '533px',
      },
    },
  },
  plugins: [],
}
export default config
