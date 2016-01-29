var path = require('path');

module.exports = function(src_path) {
    var conf = {
        entry: {
            vendor: [
                'jquery',
                'lodash',
                'bootstrap-loader'
            ],
            init: './' + src_path + '/init'
        },
        resolveLoader: {
            modulesDirectories: ['node_modules']
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.css', '.scss'], // ''是用于适配html文件
            root: [path.join(__dirname, src_path, 'common')] //
        },
        postcss: [
            require('postcss-modules-local-by-default')
        ],
        module: {
            loaders: [{
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?importLoaders=1&localIdentName=[name]_[local]_[hash:base64:4]',
                    'postcss',
                    'sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, "./node_modules/compass-mixins/lib")) + '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, src_path, 'assets'))
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=800&name=asset/[name].[hash:4].[ext]'
            }, {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            }, {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000&name=asset/[name].[hash:4].[ext]',
            }, {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue'
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }]
        }
    }
    return conf;
}
