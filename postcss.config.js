module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-cssnext': {
      features: {
        customProperties: {
            warnings: false
        }
    }
    },
  },
}
