const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const allSCSS = new ExtractTextPlugin('example/style.css')
const baseSCSS = new ExtractTextPlugin('main/js-tabs-base.css')
const extractTextConfig = {
  fallback: 'style-loader',
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
}

module.exports = {
  entry: {
    example: [
      path.resolve('src', 'example', 'index.js')
    ],
    main: [
      'idempotent-babel-polyfill',
      path.resolve('src', 'index.js')
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: path.join('[name]', 'index.js'),
    library: 'JsTabs',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve('src', 'example'),
        use: allSCSS.extract(extractTextConfig),
      },
      {
        test: /\js-tabs-base.scss$/,
        use: baseSCSS.extract(extractTextConfig),
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin('dist', {}),
    allSCSS,
    baseSCSS,
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: path.resolve('src', 'example', 'index.html'),
      filename: path.join('example', 'index.html')
    })
  ]
}
