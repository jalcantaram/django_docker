'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './assets/js/app.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'app.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'static'),
        port: 8080,
        hot: true
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: './templates/index.html' }),
        new miniCssExtractPlugin()
    ],
    module: {
        rules: [
        {
            mimetype: 'image/svgxml',
            scheme: 'data',
            type: 'asset/resource',
            generator: {
                filename: 'icons/[hash].svg'
            }
        },
        {
            test: /\.(scss)$/,
            use: [
                {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    // loader: 'style-loader'
                    loader: miniCssExtractPlugin.loader
                },
                {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                },
                {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                autoprefixer
                            ]
                        }
                    }
                },
                {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                }
            ]
        }
        ]
    }
}
