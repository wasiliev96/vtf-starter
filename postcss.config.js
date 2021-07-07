module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 1, // early WD
      browsers: 'last 2 versions',
      autoprefixer: { grid: true },
      features: {

      }
    },
  },
}
