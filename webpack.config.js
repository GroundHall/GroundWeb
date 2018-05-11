const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/containers/App/index.js',
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [
        { loader: 'babel-loader' },
      ],
    }, {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      ]
    }, {
      test: /\.global\.scss$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer],
        },
      }],
    }, {
      test: /^((?!\.global).)*scss$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer({
            browsers: [
              'last 4 versions',
            ],
          })],
        },
      }],
    }, {
      test: /\.(png|jpg|gif)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'url-loader?name=images/[name].[ext]&limit=8192',
      }],
    }, {
      test: /\.svg$/,
      use: [
        'desvg-loader/react',
        'svg-loader'
      ]
    }],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.png', '.jpg', '.jpeg', '.gif'],
  },
};
