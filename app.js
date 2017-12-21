
var express = require('express');
var path = require('path');
var app = express();
var ejs = require('ejs');

let mongoose = require('mongoose');
let DB_URL = 'mongodb://localhost:27017';
//Mongoose是在node.js环境下对mongodb进行便捷操作的对象模型工具

let models = require('./models/users');
let User = models.User;
let Star = models.Star;

//import User from './server/user'

/**
 * 连接
 */
//mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function (err,db) {
	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected on port 27017.');
	}
});


//托管静态文件-为静态资源目录指定一个挂载路径的方式-http://localhost:3000/static/img/1.jpg
//需要放在访问入口app.use()的前面
app.use('/static',express.static(path.join(__dirname, 'static')));
app.use('/dist',express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, './')));


//use会阻止下面全部路由入口
// app.use('/', function (req, res, next) {
// 	//console.log(path.resolve(__dirname, ''))
// 	res.render('index');
// });

// GET method route
app.get('/', function (req, res, next) {
	//console.log(path.resolve(__dirname, ''))
	res.render('index');
});

app.get('/about', function (req, res) {
	res.send('about');
});

// 新增接口路由-存储数据库数据-http://localhost:3000/data/getMessage
app.get('/data/:module', function (req, res, next) {
	//console.log(req.params);//{ module: 'getMessage' }
	var c_path = req.params.module;
	var Action = require('./server/' + c_path);
	Action.execute(req, res);
});

app.get('/init', function (req, res) {
	let user = new User({username:'wsb',password:'123456',age:28,address:'beijing'});
	let userArr = [
		new User({username:'a',password:'sd',age:28,address:'beijing'}),
		new User({username:'b',password:'sda',age:18,address:'xian'}),
		new User({username:'c',password:'fg',age:48,address:'shanghai'}),
		new User({username:'d',password:'uku',age:68,address:'hangzhou'}),
	];
	user.save(function (err,user) {
		if(err){
			console.log(err)
		}else{
			console.log(user.address + 'saved')
		}
	});
	User.insertMany(userArr);
	//mongoose.disconnect();
	res.send('Data inited');
});

app.get('/users', function (req, res) {
	User.find(function(err,doc){
		console.log(doc)
		res.json(doc)
	});
});

app.get('/setStar', function (req, res) {
	let star = new Star({star:1});
	star.save(function (err,user) {
		if(err){
			console.log(err)
		}else{
			console.log(user.address + 'saved')
		}
	});
	res.send('star saved');
});

//所有浏览器请求都是get，post请求需要用ajax
// app.post('/post',function (req, res,next) {
// 	console.log(req.params)
// 	res.send('POST request to the homepage');
// })

// 设置views路径和模板
app.set('views', './');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);



var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});