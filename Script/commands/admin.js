const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
『 ⚡️ 𝕱𝕽𝕺𝕹𝕿𝕸𝕬𝕹 — 𝙉𝙊 𝙁𝘼𝘾𝙀, 𝙅𝙐𝙎𝙏 𝘿𝘼𝙈𝙉 𝘾𝙊𝘿𝙀 ⚡️ 』

⟩ NAME: TXD_MUHID
⟩ AGE: 16
⟩ REGION: BANGLADESH
⟩ IDENTITY: ☠️ 𝙂𝙃𝙊𝙎𝙏 𝙄𝙉 𝙏𝙃𝙀 𝙉𝙀𝙏
⟩ STATUS: 𝘼𝙇𝙒𝘼𝙔𝙎 𝙊𝙉𝙇𝙄𝙉𝙀 — 𝙉𝙀𝙑𝙀𝙍 𝙎𝙀𝙀𝙉
⟩ MODE: 𝙎𝙄𝙇𝙀𝙉𝘾𝙀 𝙄𝙎 𝙇𝙊𝙐𝘿

【⚙️ 𝙎𝙆𝙄𝙇𝙇 𝙈𝘼𝙏𝙍𝙄𝙓 ⚙️】

⚔️ 𝙃𝘼𝘾𝙆𝙄𝙉𝙂 — 2 𝙔𝙀𝘼𝙍𝙎 𝙀𝙓𝙋 ☠️
⚙️ 𝙉𝙀𝙏𝙒𝙊𝙍𝙆𝙄𝙉𝙂 — 90% ⬇️ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙄𝙉𝙂...
🐍 𝙋𝙔𝙏𝙃𝙊𝙉 — 97% ⬇️
💻 𝘾++ — 40% ⬇️
☕️ 𝙅𝘼𝙑𝘼 — 50% ⬇️
🤖 𝘿𝙀𝙑 𝘽𝙊𝙏 — 30% ✅
🔐 𝙂𝘼𝙏𝙀 — 98% ⬇️
💀 𝙆𝙄𝙇𝙇𝙀𝙍 𝙈𝙊𝘿𝙀 — 101% ☣️
🧨 𝘾𝘼𝙍𝘿𝙄𝙉𝙂 — 90% ☠️
🧠 𝘼.𝙄. 𝘾𝙊𝙉𝙏𝙍𝙊𝙇 — 89% ⬇️

『 𝙉𝙀𝙑𝙀𝙍 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙔 𝙉𝘼𝙈𝙀 — 𝙄 𝙒𝙄𝙇𝙇 𝘿𝙀𝙇𝙀𝙏𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙎𝙏 』
『 𝙄'𝙈 𝙏𝙃𝙀 𝙂𝙇𝙄𝙏𝘾𝙃 𝙄𝙉 𝙔𝙊𝙐𝙍 𝘿𝙀𝘽𝙐𝙂 』
『 𝙀𝙓𝙋𝙇𝙊𝙄𝙏𝙄𝙉𝙂 𝙎𝙔𝙎𝙏𝙀𝙈𝙎 𝙄𝙎 𝙈𝙔 𝙁𝙊𝙍𝙀𝙋𝙇𝘼𝙔 』
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://www.facebook.com/photo/?fbid=1388146003238183&set=gm.1317145363460616&idorvanity=898547218653768`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
