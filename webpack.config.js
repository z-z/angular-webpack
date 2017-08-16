const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: ['./main']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/assets'),
		publicPath: '/assets/'
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true,
						removeAttributeQuotes: false,
						caseSensitive: true,
						customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
						customAttrAssign: [ /\)?\]?=/ ]
					}
				}]
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader'
			},
			{
	            test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!stylus-loader"
				})
			}
		]
	},
	devServer: {
		stats: {
			colors: true
		},
		compress: true
	},
	plugins: [
		new HtmlWebpackPlugin({filename: '../index.html'}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, './app')
		),
		new ExtractTextPlugin("styles.css"),
		new webpack.HotModuleReplacementPlugin(),
		//new webpack.optimize.UglifyJsPlugin()
	]
};
