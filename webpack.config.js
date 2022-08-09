const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'Recipe App',
      favicon: './src/fav/ladle-icon.png',
    }),
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
