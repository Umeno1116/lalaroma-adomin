const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/index.js', // 修正: 不要なピリオドを削除
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
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
            // 他のローダーの設定...
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 修正: 不要なピリオドを削除
            filename: 'index.html'
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
    },
    // 必要に応じてその他の設定...
};
