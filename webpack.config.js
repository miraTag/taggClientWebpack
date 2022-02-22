const path = require('path');
const yaml = require('yamljs'); //for dev dashboard
const json5 = require('json5'); //for multi file entry point

const HtmlWebpackPlugin = require('html-webpack-plugin'); //try this for also multi file entry
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



const plugins = [
    new HtmlWebpackPlugin({
    filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, '', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",

    }),
];
//The webpack-dev-server provides you with a rudimentary web server and the ability to use live reloading

module.exports = {
    mode: 'production',
    entry: {
        'taggstar': [
            path.resolve(__dirname, 'src/css/balloons.less'),
          ],
          'modules.js': [
            path.resolve(__dirname, 'src/js/index.js')
          ]
    },

    devServer: {
        static: './build',
        // path: path.resolve(__dirname, './build')
    },
    plugins,
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'build'),
        // path: path.resolve(__dirname, 'src/es5'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.(sc|le|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                        }, //add The publicPath option as function https://webpack.js.org/plugins/mini-css-extract-plugin/#recommended
                    },
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },

        ],
    },
    optimization: {
        // minimizer: [
        //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        //     // `...`,
        //     new CssMinimizerPlugin(),
        // ],
        // splitChunks: {
        //     cacheGroups: {
        //         styles: {
        //             name: "styles",
        //             type: "css/mini-extract",
        //             chunks: "all",
        //             enforce: true,
        //         },
        //     },
        // },

    },
};
