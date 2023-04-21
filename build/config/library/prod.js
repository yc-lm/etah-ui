const {merge} = require('webpack-merge')
const utils = require('../../utils/utils')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(require('../base'), {
    mode: 'production',

    entry: {
        index: utils.resolve('packages/index.ts'),
        test: utils.resolve('packages/test/index.ts'),
        demo: utils.resolve('packages/demo/index.ts')
    },

    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        library: {
            type: 'commonjs2',
            export: 'default'
        }
    },

    externals: {
        // 打包忽略vue，防止把vue源码打进去
        vue: {
            root: 'Vue', // 根下的Vue
            commonjs: 'vue', // commonjs规范的（import {xxx} from 'vue'）
            commonjs2: 'vue'
        }
    },

    module: {
        rules: [
            //utils.eslintLoader('src'),
            utils.styleLoaders({
                extract: true,
            }),
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
})
