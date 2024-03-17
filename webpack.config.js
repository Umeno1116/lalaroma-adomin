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
            // ここに他のローダー（CSSや画像用など）の設定を追加
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 既存のindex.html用の設定
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './public/main.html', // main.html用の設定を追加
            filename: 'main.html'
        }),
    ],

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' }, // ルートへのアクセスをindex.htmlにリダイレクト
                { from: /^\/main.html$/, to: '/main.html' } // main.htmlへのアクセス設定
            ]
        }
    }
};
