'use strict';

const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./base');
const cssWebpackConfig = require('./css');
const config = require('../project.config');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');
const resolveClientEnv = require('../utils/resolveClientEnv');
const CopyPlugin = require('copy-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = merge(baseWebpackConfig, cssWebpackConfig, {
	mode: 'development',

	devtool: 'eval-cheap-module-source-map',

	entry: {
		app: './example/src/main.ts'
	},

	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
		buildDependencies: {
			// This makes all dependencies of this file - build dependencies
			config: [__filename]
			// By default webpack and loaders are build dependencies
		},
		cacheDirectory: path.resolve(__dirname, '../../build_cache')
	},

	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /./, to: '/index.html' }]
		},
		devMiddleware: {
			publicPath: config.dev.publicPath
		},
		open: false,
		host: '0.0.0.0',
		port: config.dev.port,
		liveReload: false,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},

	infrastructureLogging: {
		level: 'warn'
	},

	stats: {
		assets: false,
		modules: false
	},
	plugins: [
		new HTMLPlugin({
			template: paths.resolve('example/public/index.html'),
			templateParameters: {
				...resolveClientEnv(
					{ publicPath: isProd ? config.build.publicPath : config.dev.publicPath },
					true /* raw */
				)
			}
		}),
		new CopyPlugin({
			patterns: [
				{
					from: paths.resolve('example/public'),
					toType: 'dir',
					globOptions: {
						ignore: ['.DS_Store', '**/index.html']
					},
					noErrorOnMissing: true
				}
			]
		})
	]
});
