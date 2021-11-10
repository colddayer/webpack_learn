const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: path.resolve('src/loader/codeLoader.js') },
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.(png|jpeg)$/,
        use: [{ loader: path.resolve('src/loader/fileLoader.js') }],
        type: 'javascript/auto'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
