const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './main',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [".js", ".ts"]
	},
	module: {
		loaders: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			loader: 'awesome-typescript-loader'
		}]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, './app')
		),
		//new webpack.optimize.UglifyJsPlugin()
	]
};
