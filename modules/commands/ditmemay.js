const fs = require("fs");
module.exports.config = {
name: "dmm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "Hát",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("djt mẹ m")==0 || (event.body.indexOf("dmm")==0)) {
		var msg = {
				body: "Bất Hiếu",
				attachment: fs.createReadStream(__dirname + `/noprefix/dit me m.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}