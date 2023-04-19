const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'md': '640px',
      'lg': '900px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-rec)', ...fontFamily.sans],
      },
      typography: ({ theme }) => ({
        blanc: {
          css: {
            a: {
              'font-weight': 'unset',
              'text-underline-offset': '3px',
            },
            code: {
              "@apply font-sans mono-100 font-medium": {},
            },
            blockquote: {
              "@apply not-italic": {},
            },
            '--tw-prose-body': 'rgb(255 255 255 / 100%)',
            '--tw-prose-headings': 'rgb(255 255 255 / 100%)',
            '--tw-prose-lead': 'rgb(255 255 255 / 100%)',
            '--tw-prose-links': 'rgb(255 255 255 / 100%)',
            '--tw-prose-bold': 'rgb(255 255 255 / 100%)',
            '--tw-prose-counters': 'rgb(255 255 255 / 100%)',
            '--tw-prose-bullets': 'rgb(255 255 255 / 100%)',
            '--tw-prose-hr': 'rgb(255 255 255 / 100%)',
            '--tw-prose-quotes': 'rgb(255 255 255 / 100%)',
            '--tw-prose-quote-borders': 'rgb(255 255 255 / 100%)',
            '--tw-prose-captions': 'rgb(255 255 255 / 100%)',
            '--tw-prose-code': 'rgb(255 255 255 / 100%)',
            '--tw-prose-pre-code': 'rgb(255 255 255 / 100%)',
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 30%)',
            '--tw-prose-th-borders': 'rgb(255 255 255 / 10%)',
            '--tw-prose-td-borders': 'rgb(255 255 255 / 100%)',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
