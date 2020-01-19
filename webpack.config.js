const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_PATH =  path.resolve(__dirname, './src/js/init.js');
const PUBLIC_PATH =  path.resolve( __dirname + "/build");

module.exports = {
    mode: "production",
    entry: ENTRY_PATH,
    output: {
        filename: "bundle.js",
        path: PUBLIC_PATH,
    },
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']},
            {test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: './images',
                    },
                }]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    watch: true,
};