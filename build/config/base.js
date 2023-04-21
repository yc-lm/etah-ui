const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const utils = require('../utils/utils')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    // resets the default mode
    mode: 'none',

    resolve: {
        extensions: ['.js', '.json', '.vue', '.ts'],
        alias: {
            '@': utils.resolve(''),
            '@example': utils.resolve('example/src'),
            '@packages': utils.resolve('packages'),
        },
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: [
                {loader: 'babel-loader'},
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        appendTsSuffixTo: [
                            '.vue$'
                        ],
                        happyPackMode: false
                    }
                }
            ]
        },
            utils.withCacheLoader({
                test: /\.vue$/, loader: 'vue-loader', options: {
                    compilerOptions: {
                        preserveWhitespace: false,
                    },
                },
            }), utils.withCacheLoader({
                test: /\.js$/, loader: 'babel-loader', include: ['src', 'docs', 'test'].map(utils.resolve),
            }), utils.withCacheLoader({
                test: /\.pug$/, loader: 'pug-loader', options: {
                    pretty: true,
                },
            }),
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader', options: {
                    limit: 10000,
                },
            }
        ],
    },

    optimization: {
        concatenateModules: true,
        noEmitOnErrors: true,
    },

    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            PKG_VERSION: JSON.stringify(require('../../package').version),
        }),
        new ESLintPlugin({
            fix: true,
            extensions: ['js', 'json','vue','ts'],
            exclude: '/node_modules/'
        }),
    ],
}
