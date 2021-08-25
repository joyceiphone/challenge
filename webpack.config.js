const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/frontend", "index.js"),
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "src"),
    port: 3030,
    historyApiFallback: true,
    devMiddleware:{
        writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  resolve: {
    fallback: {
      path: false,
      stream: false,
      http: false,
      fs: false,
      zlib: false,
      crypto: false,
      net: false,
    },
    extensions: [".css", ".html", ".js"],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, "public/favicon.png")
    }),
  ],
};
