var _ = require('lodash');
var src_path = 'src';
var app_path = 'app';

var path = require('path');
var webpack = require('webpack');
var pack = require('./package.json');
var port = JSON.stringify(JSON.parse(process.env.PORT || '8081'));
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackCommonCfg = require('./webpack.common.config.js')(src_path);


var config  = _.assign({},webpackCommonCfg,{
    target: 'node',
    node: {
        __dirname:false
    },
    externals: {
        'sqlite3':'commonjs sqlite3',
    },
    devServer:{
        port:port,
    },
    devtool: 'eval', //cheap-source-map
    debug: true,
    output: {
        path: path.join(__dirname, 'www', app_path),
        filename: '[name].js'
    },
    plugins:[
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template:path.join(src_path,'indexTpl.html'),
            chunksSortMode:function(a,b){
                var tulp = ['vendor','common','init'] ;
                return -tulp.indexOf(a.names);
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            '_':'lodash',
            'window._': 'lodash'
        }),
        //定义自由变量 development production
        new webpack.DefinePlugin({
            __DEV__: true,
            __APP_PATH__: JSON.stringify(app_path),
            __VERSION__: JSON.stringify(pack.version),
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
});

module.exports = config;
