const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssPresetEnv = require('postcss-preset-env');

// ==============================================

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'production'),
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
        test: /\.s[ac]ss/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PostcssPresetEnv()],
              },
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
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      favicon: './src/fav/ladle-icon.png',
    }),
    new MiniCssExtractPlugin(),
  ],

  devtool: 'source-map',
};
