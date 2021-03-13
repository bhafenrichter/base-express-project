const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

const outputDirectory = 'dist';

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/client/js/index.ts'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: './js/[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.js', '.json', '.scss'],
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      },
    },
    port: 3001,
    open: true,
    hot: true,
    // writes to dist folder in live reload
    // writeToDisk: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    // new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    // new CleanWebpackPlugin([outputDirectory]),
    new MiniCssExtractPlugin({
      filename: './css/main.css',
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    // minimize: true,
    // minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
