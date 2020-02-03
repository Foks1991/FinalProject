const path = require("path");
const CssWebpackPlugin = require('mini-css-extract-plugin');
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
            {test: /\.less$/, use: [CssWebpackPlugin.loader, 'css-loader', 'less-loader']},
            {test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: './images',
                        esModule: false,
                    },
                }]
            },
            {
                test: /\.(woff|eot|ttf)$/,
                use: [{
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: 25000,
                        name: 'fonts/[name].[ext]'
                    }
                }]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new CssWebpackPlugin({
            filename: 'style.css',
        })
    ],
    watch: true,
};