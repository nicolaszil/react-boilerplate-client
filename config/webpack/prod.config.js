/* eslint-disable */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const FileManagerPlugin = require('filemanager-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const path = require("path"); 

module.exports = function () {
  const fileName = process.env.npm_package_name + "-" + process.env.npm_package_version;
  return {
    plugins: [
      new DotenvPlugin({
        path: './.env.prod',
      }),
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportTitle: "Bundles overview",
        reportFilename: "./analyzer.report.html",
        openAnalyzer: false,
      }),
      new FileManagerPlugin({
        events: {
          onEnd: [
            {
              archive: [
                {
                  source:  path.resolve(__dirname, '../../public'),
                  destination: path.resolve(__dirname, '../../target/' + fileName + '.tar.gz'),
                  format: 'tar',
                  options: {
                    gzip: true,
                  },
                },
              ]
            },
          ],
        },
      }),
    ],
  };
};
