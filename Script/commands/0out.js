module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "ⁱᵃᵐ|¸„.-•~¹°”ˆ˜¨ť𝒆αꪑx𝖉αȵᶢ𝒆𝔯¨˜ˆ𒆜",
    description: "",
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}
