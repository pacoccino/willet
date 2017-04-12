const {
  addPlugins, resolveAliases, createConfig, defineConstants, entryPoint, env, performance, setOutput, sourceMaps, webpack
} = require('@webpack-blocks/webpack2');

const path = require('path');

const babel = require('@webpack-blocks/babel6');
const cssModules = require('@webpack-blocks/css-modules');
const sass = require('@webpack-blocks/sass');
const devServer = require('@webpack-blocks/dev-server2');
const extractText = require('@webpack-blocks/extract-text2');
const plugins = require('./webpack.plugins');

const config = require('./config');

const appDir = config.appPath;
const buildDir = config.buildPath;

module.exports = createConfig([
  setOutput({
    filename: '[name].[hash].js',
    path: buildDir(),
    publicPath: '/',
  }),
  babel(),
  cssModules(),
  sass(),
  addPlugins(plugins.basePlugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
    'process.env.FEDERATION_DOMAIN': process.env.FEDERATION_DOMAIN,
    'process.env.STELLAR_NETWORK': process.env.STELLAR_NETWORK,
    'process.env.API_SERVER': process.env.API_SERVER,
  }),
  resolveAliases({
    styles: appDir('styles'),
    images: appDir('images'),
    js: appDir('js'),
  }),
  env('development', [
    entryPoint({
      main: appDir('js/main.js'),
    }),
    sourceMaps(),
    devServer(),
    performance({
      // Increase performance budget thresholds for development mode
      maxAssetSize: 1500000,
      maxEntrypointSize: 1500000
    })
  ]),
  env('production', [
    entryPoint({
      main: appDir('js/main.prod.js'),
      vendor: 'stellar-sdk'
    }),
    extractText(),
    performance({
      // Increase performance budget thresholds for development mode
      maxAssetSize: 1500000,
      maxEntrypointSize: 1500000
    }),
    addPlugins(plugins.productionPlugins)
  ])
]);
