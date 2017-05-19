const {
  addPlugins, resolveAliases, createConfig, defineConstants, entryPoint, env, performance, setOutput, sourceMaps, webpack, customConfig
} = require('@webpack-blocks/webpack2');

const path = require('path');

const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const extractText = require('@webpack-blocks/extract-text2');
const plugins = require('./webpack.plugins');

const config = require('./config');

const appDir = config.appPath;
const buildDir = config.buildPath;

function sassModules() {
  return (context) => ({
    module:
      {
        loaders: [
          {
            test: context.fileType('text/x-sass'),
            loaders: [
              'style-loader',
              'css-loader?importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]&modules',
              'sass-loader',
            ]
          }
        ]
      }
  });
}

const webpackConfig = createConfig([
  setOutput({
    filename: '[name].[hash].js',
    path: buildDir(),
    publicPath: '/',
  }),
  babel(),
  addPlugins(plugins.basePlugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
    'process.env.FEDERATION_DOMAIN': process.env.FEDERATION_DOMAIN,
    'process.env.STELLAR_NETWORK': process.env.STELLAR_NETWORK,
    'process.env.API_SERVER': process.env.API_SERVER,
    'process.env.DEMO': process.env.DEMO,
  }),
  resolveAliases({
    styles: appDir('styles'),
    images: appDir('images'),
    js: appDir('js'),
  }),
  sassModules(),
  customConfig({
    node: {
      fs: 'empty'
    }
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

module.exports = webpackConfig;