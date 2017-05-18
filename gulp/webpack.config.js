var webpack = require('webpack');
var gutil = require('gulp-util');
var merge = require('webpack-merge');

var isProduction = gutil.env.type === 'production';

//Todoオブジェクト指向にする
var config = {
	entry: {
		'app': [
			'./src/js/app/index.jsx'
		],
		'common': [
			'./src/js/app/common.js'
		],
		vendor: [
			'jquery'
		]
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html-loader' },
			{ test: /\.(jpg|png)$/, loader: 'file-loader?name=./dist/img/[name].[ext]' },
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /\.json$/, loader: 'json'}
		]
	},
	plugins: [
		// 指定した変数を他のモジュール内で使用できるようにする
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js',
			minChunks: Infinity
		})
	]
};

if (isProduction) {
	config = merge(config, {
		plugins: [
			//ファイルを細かく分析し、できるだけまとめてコードを圧縮
			new webpack.optimize.AggressiveMergingPlugin(),
			// compile時にuglifyでminimize
			new webpack.optimize.UglifyJsPlugin()
		]
	});
}
module.exports = config;
