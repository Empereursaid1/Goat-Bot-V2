module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "ᏋᎷᎮᏋᏒᏋᏬᏒ ᏕᎤᎥᎴ💦",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𖤍𝐒𝐀𝐋𝐔𝐓𖤍  𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 -𝐏𝐀𝐁𝐋𝐎- 𝐣𝐞 𝐬𝐮𝐢𝐬 𝐥𝐚 𝐩𝐨𝐮𝐫 𝐫𝐞𝐩𝐨𝐧𝐝𝐫𝐞 𝐚 𝐭𝐨𝐮𝐭 𝐭'𝐞𝐬 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 ☞︎︎︎𖤍☜︎︎︎");
}
};
