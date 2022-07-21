const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { webpack } = require('webpack');

// ==============================================

module.exports = {
  mode: 'none',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'production'),
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Recipe App',
    }),
  ],
};
