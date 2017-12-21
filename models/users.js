var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var userSchema = new Schema({
	username: {
		type: String,
		//unique: true
	},
	password: {
		type: String
	},
	age: Number,
	address: String,
	createAt: {
		type: Date,
		default : Date.now()
	}
},{ collection: "admin"});
// 将数据模型暴露出去

var star = new Schema({
	star:{
		type: Number
	}
})
//exports.User = mongoose.model('users', userSchema);
// let User = mongoose.model('users', userSchema);
// export User
//exports.User = mongoose.model('User', userSchema);
module.exports.User = mongoose.model('users', userSchema);
module.exports.Star = mongoose.model('star', star);

//1.导出module.exports.User 接收require('./a.js')是module.exports，
// let modules = require('./a.js') let User = modules.Users
// let Users = require('./a.js').Users

//2.导出exports.User = mongoose.model('users', userSchema);
// 接收

//exports指向module.exports，如果导出 值，用exports会出错；值不是指针，阻断了指针

var data = {
	leaveMessage:[
		{message:'不错的一个网站',date:'2017-12-09T07:46:38.355Z',user:'',anonymity:true,},
		{message:'我是你的朋友',date:'2017-12-19T07:46:38.355Z',user:'zheng',anonymity:false,},
		{message:'天气不错',date:'2017-12-29T07:46:38.355Z',user:'zang',anonymity:false,},
	],
	star:{
		number:3,
		info:[
			{date:'2017-12-29T07:46:38.355Z',index:1,user:'匿名'},
			{date:'2017-12-29T07:46:38.355Z',index:2,user:'zheng'},
			{date:'2017-12-29T07:46:38.355Z',index:3,user:'zang'},
		]
	},
	loginUser:[
		{name:'zhang',age:11,createTime:'2017-12-29T07:46:38.355Z'},
		{name:'wang',age:22,createTime:'2017-12-29T07:46:38.355Z'},
		{name:'li',age:23,createTime:'2017-12-29T07:46:38.355Z'},
		{name:'zhao',age:43,createTime:'2017-12-29T07:46:38.355Z'},
	]
}