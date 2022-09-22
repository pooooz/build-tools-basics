const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    gallery: './src/js/gallery/index.js',
  },
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
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
        test: /\.(mp4)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/i,
        loader: 'img-optimize-loader',
        options: {
          compress: {
            mode: 'high',
            webp: true,
            gifsicle: true,
            disableOnDevelopment: false,
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: resolve(__dirname, 'src/index.html'), filename: 'index.html'}),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/pages/gallery.html'),
      filename: './src/pages/gallery.html'
    }),
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
  ],
  devServer: {
    hot: true,
    port: 3000,
    watchFiles: ['./*']
  }
}