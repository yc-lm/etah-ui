const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = exports.resolve = dir => (
	path.join(__dirname, '../..', dir)
);

exports.eslintLoader = dirs => ({
	test: /\.(js|vue)$/,
	loader: 'eslint-loader',
	enforce: 'pre',
	include: dirs,
	options: {
		cache: true
	}
});

exports.styleLoaders = (options = {}) => {
	const loaders = [{
		loader: 'css-loader',
		options: {
			importLoaders: 1,
			sourceMap: options.sourceMap
		}
	}, {
		loader: 'postcss-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}, {
		loader: 'sass-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}];
	if (options.extract) {
		loaders.unshift(MiniCssExtractPlugin.loader);
	}
	loaders.unshift('vue-style-loader');
	return {
		test: /\.(css|sass|scss)$/,
		use: loaders
	};
};

exports.withCacheLoader = rule => {
	// Disable cache-loader when running tests.
	if (process.env.NODE_ENV === 'testing') {
		return rule;
	}

	const { loader, options, use, ...rest } = rule;
	const loaders = Array.isArray(use)
		? use
		: typeof loader === 'string' && !options
			? [loader]
			: [{ loader, options }];

	return {
		use: ['cache-loader', ...loaders],
		...rest
	};
};
