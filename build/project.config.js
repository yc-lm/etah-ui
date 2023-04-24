'use strict';
const paths = require('./utils/paths');
module.exports = {
	outputDir: 'dist',

	dev: {
		publicPath: '/',
		port: 8091
	},

	build: {
		assetsRoot: paths.resolve('lib'),
		assetsSubDirectory: '/',
		publicPath: '/',
		bundleAssets2Dest: process.env.bundleAssets2Dest
	}
};
