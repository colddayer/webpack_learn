const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: path.resolve('src/loader/myLoader.js') },
          { loader: 'ts-loader' },
        ],
      },
    ],
  },
};
