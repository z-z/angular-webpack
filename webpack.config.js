const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './main',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	module: {
		rules: [
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
	plugins: [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, './app')
		),
		new ExtractTextPlugin("styles.css"),
		//new webpack.optimize.UglifyJsPlugin()
	]
};
