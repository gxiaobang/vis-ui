/**
 * 编译配置（开发环境）
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const path = require('path');
const { rootPath, srcPath } = require('./config/base.conf');
const proxyTable = require('./config/proxy.conf');

const argv = require('yargs')
  .option('proxy', {
    default: 'dev'
  })
  .option('port', {
    alias: 'p',
    default: 8000
  })
  .argv

module.exports = {
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  entry: {
    app: path.resolve(srcPath, './app'),
    // 第三方
    vendor: ['vue', 'element-ui', 'moment', 'axios']
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.sass', '.scss', '.json'],
    // 简称
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': srcPath,
      'vis-ui': path.resolve(srcPath, './components/vis-ui'),
      'config': path.resolve(rootPath, './config'),
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  stats: "errors-only",

  plugins: [

    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    new FriendlyErrorsPlugin(),

    // new ExtractTextPlugin('styles.css'),

    // 提取相同的文件
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 5
    }),

    // 修改页面静态文件路径
    new HtmlWebpackPlugin({
      title: 'Vis UI组件',
      template: path.resolve(srcPath, './index.html')
    }),

    // 浏览器打开地址
    new OpenBrowserPlugin({
      url: 'http://localhost:' + argv.port
    }),

    // 自定义参数
    new webpack.DefinePlugin({
      NODE_REFER: JSON.stringify(argv.proxy)
    })
  ],

  // 代理服务器
  devServer: {
    contentBase: srcPath,
    host: '0.0.0.0',
    port: argv.port,
    hot: true,
    noInfo: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    proxy: proxyTable[argv.proxy]
  }
}
