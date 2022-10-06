const { resolve } = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new NodemonWebpackPlugin({
      script: './dist/index.js',
      watch: resolve('./dist'),
      args: [],
      nodeArgs: [],
      ignore: ['*.js.map'],
      ext: 'js,json',
      delay: '1000',
      verbose: true,
      env: {
        NODE_ENV: 'development',
      },
    }),
  ],
});
