const {merge} = require('webpack-merge');
// 公共配置
const CommonConfig = require('./webpack.config');
// css样式提取
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 打包前清楚代码
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// 代码压缩
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = merge(CommonConfig, {
  module: {
    rules: [
      // css文件加载
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      // less文件加载解析
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "less-loader", options: {
            lessOptions: {javascriptEnabled: true}
          }  },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 将所有样式文件进行合并
        // 将所有css文件进行合并，提取到一个css文件中
        styles: {
          // 合并后输出的文件名字,js公共文件的名字也会被重新为此名字
          name: "common",
          // 在所有模块中进行提取
          chunks: "all",
          // 被拆分的样式最少引入次数
          minChunks: 2,
          // 拆分文件匹配规则
          test: /\.css$/,
          // 为次样式缓存创建独立模块
          enforce: true,
          // 设置该模块的优化优先级 默认为0 根据优先级确定代码放置的位置
          priority: 50,
        },
      }
    },
    minimizer: [
      // 压缩代码
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          ie8: false,
          ecma: 2015
        },
      }),
      // 提取css
      new MiniCssExtractPlugin({
        chunkFilename: 'css/[id]-[chunkhash].css',
        filename: 'css/[name]-[hash].css'
      }),
    ],
  }
})