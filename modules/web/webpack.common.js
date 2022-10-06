const { resolve } = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: {
    index: resolve('src', 'index.tsx'),
  },
  output: {
    filename: 'index.[contenthash].js',
    path: resolve('dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'less-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
      filename: resolve('dist', '[name].html'),
      favicon: false,
      hash: true,
      cache: true,
      inject: true,
      minify: 'auto',
    }),
  ],
});
