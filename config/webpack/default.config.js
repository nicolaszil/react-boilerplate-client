const ProvidePlugin = require('webpack').ProvidePlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCSSPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = function(env, argv) {
  return {
    mode: env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: env.NODE_ENV !== 'production' ? 'source-map' : false,
    entry: {
      main: './src/index.js',
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../../public'),
      filename: process.env.npm_package_name + '.[name].js',
      chunkFilename: process.env.npm_package_name + '.[name].js',
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: "all",
        maxSize: 500000,
        hidePathInfo: true,
        cacheGroups: {
          ReactChunk: {
            name: "react",
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|react-intl)[\\/]/,
            priority: 10,
          },
          MUIChunk: {
            name: "mui",
            test: /[\\/]node_modules[\\/](@material-ui|material-ui)[\\/]/,
            priority: 6,
          },
          UtilsChunk: {
            name: "utils",
            test: /[\\/]node_modules[\\/](lodash|lodash-es|moment|moment-timezone|sockjs)[\\/]/,
            priority: 2,
          },
          VariousChunk: {
            name: "various",
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["thread-loader", "babel-loader"],
        },
        {
          test: /\.(jpg|png|gif)$/i,
          use: ["file-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.css$/i,
          use: [ExtractCSSPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new ProvidePlugin({
        process: 'process/browser',
      }),
      new DefinePlugin({
        NODE_ENV: JSON.stringify(env.NODE_ENV),
        VERSION: JSON.stringify(process.env.npm_package_version),
      }),
      new HtmlWebpackPlugin({
        favicon: './src/assets/favicon.svg',
        template: './src/index.html',
        filename: './index.html',
      }),
      new ExtractCSSPlugin({
        filename: process.env.npm_package_name + '[name].[fullhash].css',
        chunkFilename: process.env.npm_package_name + '[name].[fullhash].css',
      }),
      new ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /fr|en/,
      ),
    ],
  };
};
