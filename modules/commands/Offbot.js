module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Đang tắt bot\nBot đi ngủ đây🐸\nHẹn gặp lại!!<3.",event.threadID, () =>process.exit(0))