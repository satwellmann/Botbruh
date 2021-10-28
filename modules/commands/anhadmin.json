/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "anhadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh admin ",
  commandCategory: "Random-img",
  usages: "anhadmin",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/Z9ms6T4.jpg",
"https://i.imgur.com/MzGz3yR.gif",
"https://i.imgur.com/gxUdCj8.jpg",
"https://i.imgur.com/e3tyUuE.jpg",
"https://i.imgur.com/tNHPkKq.gif",
"https://i.imgur.com/KipvI3A.jpg",
"htps://i.imgur.com/tzGIoGa.jpg",
"https://i.imgur.com/4VyY6Un.jpg",
"https://i.imgur.com/6yKyJX9.jpg",
"https://i.imgur.com/AQpAAUZ.jpg",
"https://i.imgur.com/RtVKvT8.jpg",
"https://i.imgur.com/KwiiqWD.jpg",
"https://i.imgur.com/8DUUyG6.jpg",
"https://i.imgur.com/W29J4Fz.jpg",
"https://i.imgur.com/JFLC6u9.jpg",
"https://i.imgur.com/dT33r5i.jpg",
"https://i.imgur.com/RQMatMK.jpg",
"https://i.imgur.com/gqVGIQJ.jpg",
"https://i.imgur.com/JFLC6u9.jpg",
"https://i.imgur.com/oppGZNW.jpg",
"https://i.imgur.com/3JSub5Z.gif",
"https://i.imgur.com/q9USLIZ.gif",
"https://i.imgur.com/SvMlGDZ.jpg",
"https://i.imgur.com/Z9ms6T4.jpg",
"https://i.imgur.com/MzGz3yR.gif",
"https://i.imgur.com/AxMKINK.gif",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 500) api.sendMessage("Bạn cần 500 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 500})
   var callback = () => api.sendMessage({body:`Đây là số ảnh của admin từ lớp 6-9 nên ngu lắm 😢😢 (chê band)\n» Số dư: -500 đô «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};