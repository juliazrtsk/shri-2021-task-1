const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'stories.js',
  },
  devtool: dev ? 'source-map' : false,
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'assets'),
    ],
    port: 8080,
    hot: dev,
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~fonts': path.resolve(__dirname, 'assets/fonts'),
      '~images': path.resolve(__dirname, 'assets/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/',
          },
        }, 'css-loader'
      ]},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'images',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '/public/index.html'),
      inject: 'body',
      minify: {
        removeComments: prod,
        collapseWhitespace: prod,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'stories.css',
    }),
  ],
  optimization: {
    // Temporary turned off
    minimize: false,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
