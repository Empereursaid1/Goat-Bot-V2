module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["61550814914251","61550342601194"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "..𝐏𝐨𝐮𝐫𝐪𝐮𝐨𝐢 𝐭𝐞 𝐫𝐞𝐬𝐩𝐞𝐜𝐭 ? 𝐝𝐞́𝐠𝐚𝐠𝐞 𝐣𝐞 𝐫𝐞𝐬𝐩𝐞𝐜𝐭 𝐪𝐮𝐞 𝐦𝐞𝐬 🂱.𝐁𝐎𝐒𝐒.🂱",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `➪ .🂱𝐁𝐎𝐒𝐒🂱. 𝐉𝐄 𝐕𝐎𝐔𝐒 𝐍𝐎𝐌𝐌𝐄 𝐀𝐃𝐌𝐈𝐒 𝐃𝐄 𝐒𝐄 𖤍𝐆𝐑𝐎𝐔𝐏𝐄𖤍`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("🂱..𝐁𝐎𝐒𝐒..🂱 𝐎𝐧 𝐦'𝐚𝐬 𝐩𝐚𝐬 𝐞𝐧𝐜𝐨𝐫𝐞 𝐧𝐨𝐦𝐦𝐞𝐫...🚫", event.threadID);
 }
 },
  }
