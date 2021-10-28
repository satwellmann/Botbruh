const fs = require("fs");
module.exports.config = {
name: "sủa gáy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "sủa",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sủa")==0 || (event.body.indexOf("gâu gâu")==0)) {
		var msg = {
				body: "Sủa to lên em",
				attachment: fs.createReadStream(__dirname + `/noprefix/sủagáy.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}