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
    'variables': "./scss/enabel-variables.scss",
    'error': "./scss/enabel-error.scss",
  },

  output: {
    path: path.resolve(__dirname + "/dist"),
    publicPath: "../",
    filename: 'js/[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
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
      filename: "css/[name].min.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
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
