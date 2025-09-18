const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname),

  entry: {
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
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
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
    // Custom plugin to remove unnecessary JS files
    {
      apply: (compiler) => {
        compiler.hooks.emit.tapAsync('RemoveUnnecessaryJS', (compilation, callback) => {
          // Remove unnecessary JS files for SCSS entries
          delete compilation.assets['js/variables.min.js'];
          delete compilation.assets['js/error.min.js'];
          delete compilation.assets['js/enabel-bootstrap-theme.min.js'];
          callback();
        });
      }
    },
  ],
};
