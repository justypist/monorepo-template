const { EnvironmentPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: 'hidden-source-map',
  plugins: [
    new EnvironmentPlugin({
      'mode': 'production',
    }),
  ]
});
