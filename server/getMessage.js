var getMessageList = require('./MessageList');

exports.execute = function (req, res) {
	getMessageList.getMessageList(function (data) {
		res.send(data);
	});
};