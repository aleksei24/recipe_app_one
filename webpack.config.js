const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const postcssJs = require('postcss-js');
const autoprefixer = require('autoprefixer');

const prefixer = postcssJs.sync([autoprefixer]);
const style = prefixer({
  userSelect: 'none',
});

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
      {
        test: '/.style.js$/',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                parser: 'postcss-js',
              },
              execute: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'Recipe App',
      favicon: './src/fav/ladle.png',
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
