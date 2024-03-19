const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // 画像やその他のファイルタイプ用のローダーをここに追加
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            favicon: './src/images/favicon.ico' // faviconのパスを指定

        }),
        new HtmlWebpackPlugin({
            template: './public/main.html',
            filename: 'main.html',
            favicon: './src/images/favicon.ico' // faviconのパスを指定

        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: true
    }
};
