const webpack = require('webpack');
const {resolve} = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const PROXY = `http://${HOST}:${PORT}`;

var config = {
	context: resolve('src'),
	entry: ['./app'],
	devtool: isProd ? '' : 'source-map',  // will change this below for production
	output: {
		path: resolve('dist'),
		filename: 'bundle.js',
		publicPath: './dist/',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	
	devServer: {
		port: PORT,
		host: HOST,
		publicPath: '/dist/',
		disableHostCheck: true,		
		stats: { colors: true } // Pretty colors in console
	},

	resolve: {
		extensions: ['.js', '.json', '.css']
	},

	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
     	{
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      },			
			{	
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				loader: 'url-loader',
				options: {
					limit:1000, // if less than 10 kb, add base64 encoded image to css
					name: 'images/[hash:12].[ext]'
				}
			},						
			{
				test: /\.(mp4)$/,
				loader: 'url-loader?limit=1000000&name=/video/[hash:12].[ext]'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: true
						}
					}
				]
			}
		]
	}
};

if (isProd) {
		config.plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				},
				output: {
					comments: false
				},
				sourceMap: false
		})
	) // end push
}

module.exports = config;
