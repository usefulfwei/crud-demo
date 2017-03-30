var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        "babel-polyfill",
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, './public/'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['es2015','stage-0', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devtool: 'source-map'
}