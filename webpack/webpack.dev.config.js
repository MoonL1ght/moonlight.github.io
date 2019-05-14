const webpack    = require('webpack'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      baseConfig = require('./webpack.config.js'),
      path = require('path');

baseConfig.output.publicPath = '/';
baseConfig.output.filename = 'main.js';
baseConfig.mode = 'development';
baseConfig.entry = ['webpack-hot-middleware/client', './entry.jsx'];

baseConfig.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    loaders: ['eslint-loader'],
    include: [
      path.resolve(__dirname, '../src')
    ],
    enforce: 'pre'
  }
);

baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = baseConfig;