const path = require('path');
const { webpack } = require('webpack');

// ==============================================

module.exports = {
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
};
