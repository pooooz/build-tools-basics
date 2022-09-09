const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(wav|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(png|jpeg|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'src/index.html'), filename: 'index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ],
  devServer: {
    port: 3000,
    watchFiles: ['./*']
  }
}