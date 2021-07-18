const path = require('path')

/* global __dirname */

const config = {
  mode: "development",
  context: path.join(__dirname, 'src'),
  entry: {
    // test: "./test.ts",
    contentScript: "./contentScript.ts"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /(node_modules)/
      },
      {
        enforce: 'pre',
        test: /\.(js|ts)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
}
module.exports = config
