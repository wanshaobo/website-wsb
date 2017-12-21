//图片打包，按需加载，react热替换
//打包js\css\html，压缩，编译less\sass，自动生成版本号等等，因为可以使用CommonJS等规范，可以和react很好地配合使用。
//使用webpack自动编译 webpack --progress --watch
var webpack = require('webpack');

var path = require('path');

module.exports = {
	devtool: "inline-source-map",
	entry:  path.resolve(__dirname, 'view/main.js'),// 页面入口文件
	output: {
		path: path.resolve(__dirname, './dist'),//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},
	module: {
		// 加载器配置
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader' ,
				query: { presets: ['es2015','react'] }
			},
			{
				test: /\.(css|scss)$/,
				loader:"style-loader!css-loader!sass-loader"
			},
		]
	},
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	}
}

