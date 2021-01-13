const path = require('path');
const library = '[name]_lib';
const webpack = require('webpack');

module.exports = {
  // 需要单独打包的公共文件
  entry: {
    // framework7 框架  md5加密 前端rem适配方案flexible
    commonPlugin: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'antd',
      'wangeditor'
    ]
  },
  // 公共文件输出位置
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'src/static'),
    // 文件名字
    filename: 'js/[name]_lib.js',
    // 生成全局dll文件函数名
    library
  },
  module: {
    rules: [
      // 处理js文件
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [
    // 配置生成的
    new webpack.DllPlugin({
      // 上下文，当前目录
      context: path.resolve(__dirname, ''),
      // 暴露出的dll文件函数名
      name: library,
      // 生成mainfest.json到指定位置
      path: path.join(__dirname, "manifest.json"),
    })
  ],
}