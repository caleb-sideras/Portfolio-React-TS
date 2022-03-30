module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'color_primary': '#222222',
      'color_secondary': '#16161E',
      'accent': '#CF6679',
      'text_primary': '#FFFFFF',
      'text_secondary': '#B3B3B3'
    },
    extend: {
      animation: {
        'fade-in': 'fade 500ms ease-out;',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      },
        grayscale: ['hover'],
        sepia: ['hover'],
        invert: ['hover'],
    }
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus']
  },
  plugins: [],
}
// #1A1B26