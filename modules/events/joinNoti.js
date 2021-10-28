module.exports.config = {
 name: "joinNoti",
 eventType: ["log:subscribe"],
 version: "1.0.4",
 credits: "Mirai Team",
 description: "Thông báo bot hoặc người vào nhóm",
 dependencies: {
  "fs-extra": ""
 }
};

module.exports.run = async function({ api, event, Users }) {
 const { join } = global.nodemodule["path"];
 const { threadID } = event;
 if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
  api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bypass bởi Mai Huy Bảo" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
  return api.sendMessage(`Đ𝑎̃ 𝑘𝑒̂́𝑡 𝑛𝑜̂́𝑖 𝑡ℎ𝑎̀𝑛ℎ 𝑐𝑜̂𝑛𝑔 🤡!\n\n Các bạn dùng bot không spam tránh die bot mất cái chơi 😄\nBot này là phờ ri nên không đem ra để mua bán🙆🏻‍♂️ \nChúc các bạn có trải nghiệm với bot của mình vui vẻ 🌵 𝐵𝑜𝑡 𝑛𝑎̀𝑦 𝑑𝑜 Ông trời  𝑡𝑎̣𝑜 𝑟𝑎  ☃️\n𝑉𝑎̀ 𝑏𝑜𝑡 đ𝑎𝑛𝑔 đ𝑢̛𝑜̛̣𝑐 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑏𝑜̛̉𝑖 Minh Bịp 🐥\n𝐷𝑢̀𝑛𝑔 𝑙𝑒̣̂𝑛ℎ !menu đ𝑒̂̉ 𝑏𝑖𝑒̂́𝑡 𝑐𝑎́𝑐 𝑙𝑒̣̂𝑛ℎ <3`, threadID);
 }
 else {
  try {
   const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
   let { threadName, participantIDs } = await api.getThreadInfo(threadID);

   const threadData = global.data.threadData.get(parseInt(threadID)) || {};
   const path = join(__dirname, "cache", "joinGif");
   const pathGif = join(path, `chao.gif`);

   var mentions = [], nameArray = [], memLength = [], i = 0;
   
   for (id in event.logMessageData.addedParticipants) {
    const userName = event.logMessageData.addedParticipants[id].fullName;
    nameArray.push(userName);
    mentions.push({ tag: userName, id });
    memLength.push(participantIDs.length - i++);

    if (!global.data.allUserID.includes(id)) {
     await Users.createData(id, { name: userName, data: {} });
     global.data.userName.set(id, userName);
     global.data.allUserID.push(id);
    }
   }
   memLength.sort((a, b) => a - b);
   
   (typeof threadData.customJoin == "undefined") ? msg = "🌵𝑊𝑒𝑙𝑐𝑜𝑚𝑒  {name} ☺️\n𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 đ𝑎̃ đ𝑒̂́𝑛 𝑣𝑜̛́𝑖 cái box xàm xí này , nơi hội tụ của những nhân tài đất nước :)) \nMang tên : 🌵{threadName} 🌵.\nBạn 𝑙𝑎̀ 𝑡ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 𝑡ℎ𝑢̛́ {soThanhVien} 𝑐𝑢̉𝑎 𝑛ℎ𝑜́𝑚 🌸🍀\Tương tác nhiều vô nha 😚\n\n[ SUPPORT BOT BY  Quang dz]" : msg = threadData.customJoin;
   msg = msg
   .replace(/\{name}/g, nameArray.join(', '))
   .replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
   .replace(/\{soThanhVien}/g, memLength.join(', '))
   .replace(/\{threadName}/g, threadName);

   if (existsSync(path)) mkdirSync(path, { recursive: true });

   if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
   else formPush = { body: msg, mentions }

   return api.sendMessage(formPush, threadID);
  } catch (e) { return console.log(e) };
 }
}
