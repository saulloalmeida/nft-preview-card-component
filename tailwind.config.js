module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit': ['Outfit']
    },
    extend: {
      colors: {
        'cyan-hsl': 'hsl(178, 100%, 50%)',
        'soft-blue': 'hsl(215, 51%, 70%)',
        'darkblue-main-bg': 'hsl(217, 54%, 11%)',
        'darkblue-card-bg': 'hsl(216, 50%, 16%)',
        'darkblue-line': 'hsl(215, 32%, 27%)',
        'white-hsl': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}