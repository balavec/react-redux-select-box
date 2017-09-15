var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


var extractPlugin = new ExtractTextPlugin({
    filename: 'assets/css/style.css'
});

module.exports = {
    context: __dirname,
    // devtool: debug ? 'inline-sourcemap' : false,
    entry: './src/assets/js/scripts.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }
        ],
        rules: [
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                  use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                    }
                }]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/scripts.min.js',
        chunkFilename: '[id].js'
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
