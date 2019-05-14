const webpack = require('webpack'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      baseConfig = require('./webpack.config.js'),
      {BaseHrefWebpackPlugin} = require('base-href-webpack-plugin');

baseConfig.mode = 'production';
baseConfig.output.chunkFilename = '[name].[chunkhash].bundle.js';

baseConfig.plugins.push(
  new webpack.EnvironmentPlugin(['NODE_ENV'])
);

baseConfig.plugins.push(
  new BaseHrefWebpackPlugin({ baseHref: 'https://moonl1ght.github.io/' })
)

baseConfig.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
  splitChunks: {
    cacheGroups: {
      commons: {
        name: 'commons',
        chunks: 'initial',
        minChunks: 2
      },
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
      },
    }
  }
};

module.exports = baseConfig;