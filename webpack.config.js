const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV == "dev";
 const config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path:path.join(__dirname,'dist'),
     },
     resolve: {
         alias: {
             component: path.resolve(__dirname, 'src/view/component/'),
             css: path.resolve(__dirname, 'src/public/css/'),
             layer: path.resolve(__dirname, 'src/public/layer/'),
         },
     },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },
            {
                test: /\.tpl$/,
                use: [
                    'ejs-loader',
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
     },
     plugins: [
         new webpack.DefinePlugin({
             'process.env': {
                 NODE_ENV:isDev?'"dev"':'"prd'
             }
         }) ,
         new HTMLPlugin({
             template: path.join(__dirname, 'src/index.html'),
             inject: 'body',
             title:"活动页面"
        })
    ]
 }


if (isDev) {
    config.devtool = "#cheap-module-eval-source-map"
    config.devServer = {
        port: '8003',
        host: '0.0.0.0',
        overlay: {
            errors:true
        },
     }
 }

module.exports = config