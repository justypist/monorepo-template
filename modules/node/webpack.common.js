const { resolve } = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.common');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals(),
  ],
  entry: resolve('src', 'index.ts'),
  output: {
    filename: 'index.js',
    path: resolve('./dist'),
    clean: true,
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: ['.json', '.ts', '.js'],
    alias: {
      '@controller': resolve('src', 'controller'),
      '@service': resolve('src', 'service'),
      '@entity': resolve('src', 'entity'),
      '@util': resolve('src', 'util'),
      '@middleware': resolve('src', 'middleware'),
      "@config": resolve('src', 'config.ts'),
    },
  },
});
