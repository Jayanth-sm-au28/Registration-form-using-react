import { join } from 'path';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

export const output = {
    path: join( __dirname, '/dist' ),
    filename: 'index.bundle.js',
};
export const devServer = {
    port: 3010,
    watchContentBase: true,
};
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.scss$/,
            use: [
                _loader,
                'css-loader',
                'sass-loader',
            ],
        }
    ]
};
export const plugins = [ new MiniCssExtractPlugin() ];



// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     output: {
//         path: path.join(__dirname, '/dist'),
//         filename: 'index.bundle.js',
//     },
//     devServer: {
//         port: 3010,
//         watchContentBase: true,
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'sass-loader',
//                 ],
//             }
//         ]
//     },
//     plugins: [new MiniCssExtractPlugin()],
// };