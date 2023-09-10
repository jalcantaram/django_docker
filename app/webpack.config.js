'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    module: {
        rules: [
            // {
            //     mimetype: 'image/svgxml',
            //     scheme: 'data',
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'icons/[hash].svg'
            //     }
            // },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: MiniCssExtractPlugin.loader
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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: './templates/index.html' }),
        new MiniCssExtractPlugin({ filename: 'app.css'})
    ],
};