const fs = require("fs");
module.exports.config = {
name: "lol lồn",
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
	if (event.body.indexOf("lol")==0 || (event.body.indexOf("lồn")==0)) {
		var msg = {
				body: "DCM MÀY",
				attachment: fs.createReadStream(__dirname + `/noprefix/loncak.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}