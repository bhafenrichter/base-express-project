const common = require('./webpack.config');
const merge = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// minimizes css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin({
    filename: 'index.min.css',
  })],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),                                    // third-party plugin for css minification
      new TerserPlugin(),                                               // default plugin for JS minification
      new HtmlWebpackPlugin({                                           // minifies js
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        }
      })                                          
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,                                  // injects it into css which injects it into the dom
          'css-loader',                                                 // takes CSS and turns it into JS in index.min.js
          'sass-loader'],                                               // takes scss and turns it into css
      },                                                                // order matters, style must come first before injecting it
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  }
});
