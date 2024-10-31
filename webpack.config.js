// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    watchFiles: [
      path.join(__dirname, 'src', 'template.html'), 
      path.join(__dirname, 'src', 'styles', '**/*.scss')
    ],
    compress: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      
    ],
  },
};
