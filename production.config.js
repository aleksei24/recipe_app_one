const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// ==============================================

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'production'),
    clean: {
      dry: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'Recipe App',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],

  devtool: 'source-map',
};
