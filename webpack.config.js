const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname),

  entry: {
    'color-mode': "./js/color-modes.js",
    'color-mode-auto': "./js/color-modes-auto.js",
    'enabel-bootstrap-theme': "./js/enabel-bootstrap-theme.js",
  },

  output: {
    path: path.resolve(__dirname + "/dist"),
    publicPath: "../",
    filename: 'js/[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/enabel-bootstrap-theme.min.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets/images",
          to: "images",
        },
        {
          from: "scss",
          to: "scss",
        },
      ],
    }),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
  ],
};
