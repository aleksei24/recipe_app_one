const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// ==============================================

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev'),
    clean: true,
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
    }),
  ],

  devServer: {
    open: true,
    port: 8080,
    liveReload: true,
    hot: false,
  },

  devtool: 'inline-source-map',
};
