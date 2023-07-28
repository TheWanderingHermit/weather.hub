const path = require('path');
const copyUtil = require('copy-webpack-plugin');
const htmlUtil = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('src/popup/popup.tsx'),
    },
    module: {
        rules: [ 
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new copyUtil({
            patterns: [
                {
                    from: path.resolve('src/manifest.json'),
                    to: path.resolve('dist')
                }
            ]
        }),
        new htmlUtil({
            title: "chrome extension",
            filename: "popup.html",
            chunks: ['popup']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}