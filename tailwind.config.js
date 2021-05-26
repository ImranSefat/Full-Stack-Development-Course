module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        unprose: {
          css: {
            h1: {
              'margin-top': '0',
              'margin-bottom': '0',
            },
            h2: {
              'margin-top': '0',
              'margin-bottom': '0',
            },
            h3: {
              'margin-top': '0',
              'margin-bottom': '0',
            },
            h4: {
              'margin-top': '0',
              'margin-bottom': '0',
            },
            p: {
              'margin-top': '0',
              'margin-bottom': '0',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
