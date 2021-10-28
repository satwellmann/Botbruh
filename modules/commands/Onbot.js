module.exports.config = {
	name: "bậtbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("onbot",event.threadID, () =>process.enter(1))