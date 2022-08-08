const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// ==============================================

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev'),
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
      favicon: './src/fav/ladle.png',
    }),
    new MiniCssExtractPlugin(),
  ],

  devServer: {
    open: true,
    port: 8080,
    liveReload: true,
    hot: false,
    static: './dev/',
  },

  devtool: 'eval-source-map',
};
