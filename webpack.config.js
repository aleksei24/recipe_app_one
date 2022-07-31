const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

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

  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
        },
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.squooshGenerate,
            options: {
              encodeOptions: {
                webp: {
                  quality: 90,
                },
              },
            },
          },
        ],
      }),
    ],
  },
};
