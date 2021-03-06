
let mongoose = require('mongoose');

let DB_URL = 'mongodb://localhost:27017/ceshi';

/**
 * 连接
 */
let db = mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
	console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose connection disconnected');
});

module.exports = db;

// 启动db链接
//mongoose.connect('mongodb://localhost:27017/Phone');
// 关闭的两种方式
// mongoose.connection.close();
//mongoose.disconnect();