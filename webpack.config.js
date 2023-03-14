const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: "./src/prisma.js",
  output: {
    filename: "prismaMain.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: './public',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // path to your index.html file
      filename: 'index.html' // name of the output HTML file
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Match all JS files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
