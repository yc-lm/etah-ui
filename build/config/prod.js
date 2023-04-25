'use strict';

const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const baseWebpackConfig = require('./base');
const cssWebpackConfig = require('./css');
const config = require('../project.config');
const paths = require('../utils/paths');
const entry = require('../utils/getEntry');
const terserOptions = require('./terserOptions');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// gzip
const CompressionPlugin = require('compression-webpack-plugin');
// 获取命令行变量
const configArgv = process.env.npm_config_argv ? JSON.parse(process.env.npm_config_argv) : {};
const original = configArgv.original ? configArgv.original.slice(1) : [];

const plugins = [
	new CompressionPlugin({
		filename: '[path].gz[query]',
		algorithm: 'gzip',
		threshold: 10240, // 只处理比10kb大的文件
		minRatio: 0.8 // 只有压缩比率小于这个值的资源才会被处理
	})
];
// 如果是build:rp，生成报告
if (original && original.length && original[0] === 'build:rp') {
	plugins.push(new BundleAnalyzerPlugin());
}

const entryPath = './packages/**/*.ts';

module.exports = merge(baseWebpackConfig, cssWebpackConfig, {
	mode: 'production',

	entry: entry.getEntry(entryPath),

	output: {
		path: paths.resolve('lib'),
		filename: pathData => {
			return pathData.chunk.name === 'index' ? '[name].js' : '[name]/index.js';
		},
		library: {
			type: 'commonjs2',
			export: 'default'
		}
	},

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(terserOptions())]
	},

	plugins: plugins,

	externals: {
		vue: {
			root: 'Vue', // 通过 script 标签引入，此时全局变量中可以访问的是 Vue
			commonjs: 'vue', // 可以将vue作为一个 CommonJS 模块访问
			commonjs2: 'vue', // 和上面的类似，但导出的是 module.exports.default
			amd: 'vue' // 类似于 commonjs，但使用 AMD 模块系统
		}
	}
});
