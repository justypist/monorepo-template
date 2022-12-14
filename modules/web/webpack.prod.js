const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
  },
});
