'use strict';

const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const baseWebpackConfig = require('./base');
const cssWebpackConfig = require('./css');
const config = require('../project.config');
const terserOptions = require('./terserOptions');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// gzip
const CompressionPlugin = require('compression-webpack-plugin');
// 获取命令行变量
const configArgv = process.env.npm_config_argv ? JSON.parse(process.env.npm_config_argv) : {};
const original = configArgv.original ? configArgv.original.slice(1) : [];

const plugins = [];
// 如果是build:rp，生成报告
if (original && original.length && original[0] === 'build:rp') {
	plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(baseWebpackConfig, cssWebpackConfig, {
	mode: 'production',

	output: {
		publicPath: config.build.publicPath
	},

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(terserOptions())],
		moduleIds: 'deterministic',
		splitChunks: {
			cacheGroups: {
				defaultVendors: {
					name: `chunk-vendors`,
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: 'initial'
				},
				common: {
					name: `chunk-common`,
					minChunks: 2,
					priority: -20,
					chunks: 'initial',
					reuseExistingChunk: true
				}
			}
		}
	},

	plugins: plugins.concat([
		new CompressionPlugin({
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			threshold: 10240, // 只处理比10kb大的文件
			minRatio: 0.8 // 只有压缩比率小于这个值的资源才会被处理
		})
	])
});
