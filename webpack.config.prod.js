/**
 * webpack打包配置（生产环境）
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nPlugin = require("i18n-webpack-plugin");
const autoprefixer = require('autoprefixer');

const path = require('path');
const { srcPath, rootPath, distPath, publicPath } = require('./config/base.config');

// 本地化
const locale = require('./i18n/locale');

process.env.NODE_ENV = 'production';
module.exports = (env = {}) => {

  env.refer = env.refer || 'dev';
  // env.lang = env.lang || 'zh-cn';

  return ['zh-cn', 'en'].map((lang) => ({
    name: lang,
    entry: {
      app: path.resolve(srcPath, './app'),
      // 第三方
      vendor: ['vue', 'element-ui', 'moment', 'axios']
    },
    output: {
      path: distPath,
      publicPath: publicPath,
      filename: 'static/js/[name].[chunkhash:5].js',
      chunkFilename: 'static/js/[name].[chunkhash:5].js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.sass', '.scss'],
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
          use: ['babel-loader']
        },
        {
          test: /\.(css|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?minimize',
              'postcss-loader',
              'sass-loader'
            ],
            // publicPath: publicPath
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ['url-loader?limit=25000']
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: ['url-loader']
        }
      ]
    },
    plugins: [
      // 独立css文件
      new ExtractTextPlugin({
        filename: 'static/css/app.[chunkhash:5].css',
        disable: false,
        allChunks: true
      }),

      // 提取相同的文件
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor'],
        minChunks: 5
      }),

      // 修改页面静态文件路径
      new HtmlWebpackPlugin({
        title: 'Vis UI组件',
        lang: lang,
        template: path.resolve(srcPath, './index.html'),
        filename: `index_${lang}.html`,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
      }),

      new I18nPlugin(locale.use(lang)),

      // 压缩
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        }
      }),

      // 自定义参数
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        },
        'NODE_REFER': JSON.stringify(env.refer)
      })
    ]
  }));
}
