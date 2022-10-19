const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context : path.resolve(__dirname, 'src'),
    entry: './index.js',
    devServer: {
        port: 5001
    },
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist'),
        publicPath : '/'
    },
    mode : 'development',
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }
            ]
        })
    ],
    module : {
        rules : [
            {
                test : /\.m?jsx?$/,
                exclude : /node_modules/,
                resolve : {
                    extensions : ['.js', '.jsx']
                },
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.css$/i,
                use : ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              }
        ]
    }
}