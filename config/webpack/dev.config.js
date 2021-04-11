const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DotenvPlugin = require('dotenv-webpack');
const fs = require('fs');

module.exports = function (env, argv) {
  return {
    devServer: {
      index: 'index.html',
      host: '0.0.0.0',
      port: 8010,
      disableHostCheck: true,
      historyApiFallback: true,
    },
    plugins: [
      new DotenvPlugin({
        path: fs.existsSync(".env.local") && !!env.local ? '.env.local' : '.env.dev',
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: '8015',
        openAnalyzer: false,
        reportTitle: "Bundles overview",
      }),
    ],
  };
};
