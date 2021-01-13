const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const publicPath = "/";
module.exports = {
  // 入口文件
  entry: path.resolve(__dirname, "src/index.js"),
  /// 打包出口配置
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]-[hash].js",
    chunkFilename: "js/[name]-[chunkhash].js",
    publicPath: publicPath,
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".less"],
    alias: {
      "@asset": path.resolve(__dirname, "src/asset"),
      "@views": path.resolve(__dirname, "src/views")
    }
  },
  // 模块加载
  module: {
    rules: [
      // js,jsx文件加载
      {
        test: /\.jsx?$/,
        loader: "babel-loader?cacheDirectory=true",
        include: [
          path.resolve(__dirname, "src")
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        include: path.resolve(__dirname, "src"),
        options: {
          fix: true,
        },
      },
      // 静态资源加载解析
      {
        test: /\.(gif|ttf|woff|tff|png|jpe?g|svg)$/,
        use:
          "url-loader?name=img/[name].[hash].[ext]&limit=8192&publicPath=" +
          publicPath,
      },
    ],
  },
  // 插件
  plugins: [
    // html解析
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      inject: "body"
    }),
    // 压缩文件
    new CompressionWebpackPlugin({
      test: /\.(js|css)$/,
      algorithm: "gzip",
      minRatio: 0.8,
    }),
    // dll文件应用
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '.'),
      manifest: path.resolve(__dirname, 'manifest.json')
    }),
    // 拷贝文件
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'src/static/js'), 
          to: path.resolve(__dirname, 'dist/js') 
        },
      ]
    })
  ],
  optimization: {
    minimize: true,
    // 模块解析, 加载文件，用于管理分离后的模块包
    runtimeChunk: {
      name: "runtime",
    },
    // 代码拆分配置
    splitChunks: {
      // 生成的快的名字，    为true时，将会自动生成一个快的名字
      name: false,
      // 对那些模块进行优化  可选值   all  所有  async 异步模块  initial 常规模块
      chunks: "async",
      // 生成的文件按的最小限制。单位 字节 b
      minSize: 1,
      // 提取文件时模块引入次数限制。
      minChunks: 1,
      cacheGroups: {
        default: false,
        // js 代码拆分 // 将公共模块提取到vendors文件中
        vendors: {
          // 将common提取到vendors文件中
          name: "common",
          // 所有引入的模块
          chunks: "all",
          // 最小引入次数
          minChunks: 2,
          // 提取文件的路径匹配规则
          test: /node_modules/,
          enforce: true,
        }
      },
    },
  },
};
