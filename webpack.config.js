const path = require("path");

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
    /*devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, './build'),
        hot: true,
        open: true,
        watchContentBase: true,
        watchOptions: {
            ignored: 'node_modules'
        },
    },*/
    watch: true,
};