const commonConfig = require('./webpack.config');
const {merge} = require('webpack-merge');
module.exports = merge(commonConfig, {
  // 调试服务
  devServer: {
    host: 'localhost',
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // css文件加载
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      // less文件加载解析
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { 
            loader: "less-loader", 
            options: {
              lessOptions: {javascriptEnabled: true}
            } 
          },
        ],
      },
    ]
  }
})