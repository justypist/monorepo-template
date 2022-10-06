module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /.tsx?$/i,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.ts', '.tsx'],
  }
};
