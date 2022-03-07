const path = require('path'),
MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './assets/js/app.js' },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'app.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use:  [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
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
        // new CleanWebpackPlugin({
        //   cleanOnceBeforeBuildPatterns: ['**/*', '!src/**']
        // }),
        new MiniCssExtractPlugin({
        filename: 'app.css',
        })
    ]
};
