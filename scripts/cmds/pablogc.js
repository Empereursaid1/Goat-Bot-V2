const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "Pablogc",
    aliases: ["pablogc"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "add user in thread"
    },
    longDescription: {
      vi: "",
      en: "add any user to bot owner group chat"
    },
    category: "GroupMsg",
    guide: {
      en: "{pn}lordgc"
    }
  },

  onStart: async function ({ api, event, args }) {
    const threadID = "7783222991735978";
    try {
      // Check if the user is already in the group chat
      const threadInfo = await api.getThreadInfo(threadID);
      const participants = threadInfo.participantIDs;

      if (participants.includes(event.senderID)) {
        api.sendMessage("『𝐓'𝐞𝐬 𝐝𝐞𝐣𝐚 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 𝐧𝐞 𝐟𝐨𝐫𝐜𝐞 𝐩𝐚𝐬 𝐬𝐢 𝐭𝐮 𝐭𝐫𝐨𝐮𝐯𝐞 𝐩𝐚𝐬 𝐯𝐞𝐫𝐢𝐟𝐢𝐞 𝐭𝐚 𝐛𝐨𝐢𝐭𝐞 𝐝𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐞𝐭 𝐬𝐩𝐚𝐦』", event.threadID);

        // Set ⚠ reaction for already added user
        api.setMessageReaction("⚠", event.messageID, "🥷", api);
      } else {
        // If not, add the user to the group chat
        await api.addUserToGroup(event.senderID, threadID);
        api.sendMessage("🎊 | 𝐓'𝐚𝐬 𝐛𝐢𝐞𝐧 𝐞𝐭𝐞 𝐚𝐣𝐨𝐮𝐭𝐞 𝐚𝐮 𝐠𝐫𝐨𝐮𝐩𝐞 💦🂱➪ 𝐏𝐀𝐁𝐋𝐎 💦𝐆𝐂....🂱💦☞︎︎︎𖤍𝐏𝐋𝐀𝐘𖤍☜︎︎︎", event.threadID);

        // Set 😉 reaction for successfully added user
        api.setMessageReaction("✨", event.messageID, "🥷", api);
      }
    } catch (error) {
      api.sendMessage("🚫 | ❌𝐄́𝐂𝐇𝐄𝐂 𝐃𝐄 𝐋'𝐀𝐉𝐎𝐔𝐓 ❌   💦𝐑𝐄́𝐄𝐒𝐒𝐀𝐘𝐄💦", event.threadID);

      // Set 🙅🏾 reaction for failed adding user
      api.setMessageReaction("💀", event.messageID, "👍", api);
    }
  }
}
