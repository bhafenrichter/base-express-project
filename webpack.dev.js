const common = require('./webpack.config');
const merge = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSS_FILENAME = 'index';

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    proxy: {
      "/": "http://localhost:3000"
    },
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 3001
  },
  plugins: [
    new MiniCssExtractPlugin({
      moduleFilename: ({ name }) => `${name.replace('/js/', '/dist/').replace('main', CSS_FILENAME)}.css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,                                  // injects it into js which injects it into the dom
          'css-loader',                                                 // takes CSS and turns it into JS in index.min.js
          'sass-loader'],                                               // takes scss and turns it into css
      }                                                                 // order matters, style must come first before injecting it
    ]
  }
});
