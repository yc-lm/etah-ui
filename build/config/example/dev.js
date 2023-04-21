const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const config = require('../../utils/config');
const utils = require('../../utils/utils');

module.exports = merge(require('../base'), {
	mode: 'development',

	entry: utils.resolve('example/src/main.ts'),

	devServer: {
		open: config.dev.autoOpenBrowser,
		port: config.dev.port
		/*static: {
			directory: config.dev.assetsPublicPath
		}*/
	},

	output: {
		publicPath: config.dev.assetsPublicPath,
		filename: '[name].js'
	},

	module: {
		rules: [
			//utils.eslintLoader([utils.resolve('example'),utils.resolve('packages')]),
			utils.styleLoaders({
				extract: false
			})
		]
	},

	// cheap-module-eval-source-map is faster for development
	//devtool: 'cheap-module-eval-source-map',

	plugins: [
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.HotModuleReplacementPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			template: utils.resolve('example/public/index.html'),
			templateParameters: {
				NODE_ENV: 'development'
			}
		}),
		new FriendlyErrorsPlugin()
	]
});
