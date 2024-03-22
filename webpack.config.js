const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production', // ビルドモードを 'production' に設定
    entry: './src/scripts/index.js', // エントリーポイントの設定
    output: {
        path: path.resolve(__dirname, 'dist'), // 出力ファイルのディレクトリを 'dist' に設定
        filename: 'bundle.js', // 出力ファイル名を 'bundle.js' に設定
        publicPath: '', // "/"でもいい？どっちがいいねん
    },
    module: {
        rules: [
            {
                test: /\.js$/, // .js ファイルに対するルール
                use: 'babel-loader', // Babel を使用して ES6 以上をトランスパイル
                exclude: /node_modules/, // node_modules ディレクトリは除外
            },
            {
                test: /\.css$/, // .css ファイルに対するルール
                use: [
                    MiniCssExtractPlugin.loader, // CSS を外部ファイルに抽出
                    'css-loader', // CSS を CommonJS に変換
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/, // 画像ファイルに対するルール
                type: 'asset/resource', // アセットモジュールとして扱う
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // ビルド前に 'dist' ディレクトリをクリア
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css', // 抽出された CSS のファイル名
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // index.html のテンプレート
            filename: 'index.html', // 出力される HTML ファイル名
            inject: true, // バンドルされた JS を自動的に挿入
        }),
        new HtmlWebpackPlugin({
            template: './public/main.html', // main.html のテンプレート
            filename: 'main.html', // 出力される HTML ファイル名
            inject: true, // バンドルされた JS を自動的に挿入
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/favicon.ico', to: 'favicon.ico' }, // favicon.ico をコピー
                // 必要に応じて他の静的ファイルをここに追加
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // 開発サーバーで提供する静的ファイルのディレクトリ
        },
        historyApiFallback: true, // シングルページアプリケーションのルーティングをサポート
        compress: true, // gzip 圧縮を有効化
        port: 8080, // 開発サーバーのポート番号
    },
};
