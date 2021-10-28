const fs = require('fs');
module.exports.config = {
	name: 'Ỏ ',
	version: '1.0.1',
	hasPermssion: 0,
	credits: 'dungkon edit by Tiadals',
	description: 'Ỏ',
	commandCategory: 'Không cần dấu lệnh',
	usages: 'noprefix',
	cooldowns: 5
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (
		event.body.indexOf('ỏ') == 0 ||
		event.body.indexOf('hôm nay trời đẹp thế') == 0
	) {
		var msg = {
			body: 'hí anh em ',
			attachment: fs.createReadStream(__dirname + `/cache/ỏ.mp4`)
		};
		return api.sendMessage(msg, threadID, messageID);
	}
};
module.exports.run = function({ api, event, client, __GLOBAL }) {};
