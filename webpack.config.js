const { merge } = require('webpack-merge');
const defaultConfig = require('./config/webpack/default.config');
const devConfig = require('./config/webpack/dev.config');
const prodConfig = require('./config/webpack/prod.config');

const webpackConfig = function(env, argv) {
  if (env.NODE_ENV === 'development') return merge(defaultConfig(env, argv), devConfig(env, argv));
  if (env.NODE_ENV === 'production') return merge(defaultConfig(env, argv), prodConfig(env, argv));
  return {};
};

module.exports = webpackConfig;
