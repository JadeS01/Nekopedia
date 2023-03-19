const production = process.env.NODE_ENV === 'production';
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    production && require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.svelte', './src/**/*.html'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
};
