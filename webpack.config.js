const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ ".js", ".ts", ".tsx",],
    },
    module: {
        rules: [
            {test: /\.ts$/, use: 'ts-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    devtool: 'source-map'
}
;