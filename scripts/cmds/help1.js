const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 🥷 | 𝐏𝐀𝐁𝐋𝐎 𝐕2 ]"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help1",
    version: "1.17",
    author: "𝐒𝐀𝐈𝐃", // original author Kshitiz 
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `\n●▬▬▬▬๑۩۩๑▬▬▬▬▬● ❐❐❐𝐒𝐀𝐈𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃❐❐❐    \n●▬▬▬▬๑۩۩๑▬▬▬▬▬●`; // replace with your name 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n█━━━━━━━ ⸙ ━━━━━━━█\n│ ➪『  ${category.toUpperCase()}  』`;


          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 1).map((item) => `𖤍${item}𖤍`);
            msg += `\n│ ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }

          msg += `\n█━━━━━━━ ⸙ ━━━━━━━█`;
        }
      });

      const totalCommands = commands.size;
      msg += `\n𝙸 𝙷𝙰𝚅𝙴 𝙰𝙲𝚃𝚄𝙰𝙻𝙻𝚈  ${totalCommands} 𝚎𝚃𝙷𝙽𝙸𝚀𝚄𝙴\n\n`;
      msg += `𝐓𝐀𝐏𝐄 ${prefix} 𝐇𝐄𝐋𝐏 + 𝚗𝚘𝚖 𝚍𝚎 𝚕𝚊 𝚌𝚖𝚍 𝚙𝚘𝚞𝚛 𝚟𝚘𝚒𝚛 𝚕𝚎𝚜 𝚒𝚗𝚏𝚘𝚜\n\n`;
      msg += `📜| 𝑳𝒂 𝒄𝒂𝒍𝒎𝒆 𝒏'𝒆𝒔𝒕 𝒑𝒂𝒔 𝒍'𝒂𝒃𝒔𝒆𝒏𝒄𝒆 𝒅𝒆 𝒕𝒓𝒐𝒖𝒃𝒍𝒆 𝒄'𝒆𝒔𝒕 𝒍𝒂 𝒄𝒂𝒑𝒂𝒄𝒊𝒕𝒆́ 𝒅𝒆 𝒓𝒆𝒔𝒕𝒆𝒓 𝒔𝒆𝒓𝒆𝒊𝒏 𝒆𝒏 𝒅𝒆𝒑𝒊𝒕 𝒅𝒆𝒔 𝒅𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒆́𝒔🧘V3`; // its not decoy so change it if you want 

      const helpListImages = [
        "https://i.ibb.co/VwfPsB6/image.jpg", // add image link here
                "https://i.ibb.co/PF6K4WK/image.jpg",
        "https://i.ibb.co/vkWF64g/image.jpg",
        // Add more image links as needed
      ];

      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

      await message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(helpListImage),
      });
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭── 𝐍𝐎𝐌 ────𖤍
  │ ${configCommand.name}
  ├── 𝐈𝐍𝐅𝐎
  │ Description: ${longDescription}
  │ Autres noms : ${configCommand.aliases ? configCommand.aliases.join(", ") : "Ne pas avoir"}
  │ Autres noms dans votre groupe : Je n'en ai pas
  │ Version: ${configCommand.version || "1.0"}
  │ Rôle : \n${roleText}
  │ Time per command: ${configCommand.countDown || 1}s
  │ Author: \n${author}
  ├── 𝐔𝐓𝐈𝐋𝐈𝐒𝐀𝐓𝐈𝐎𝐌
  │ ${usage}
  ├── 𝐍𝐎𝐓𝐄𝐒
  │ The content inside <XXXXX> can be changed
  │ The content inside [a|b|c] is a or b or c
  ╰━━━━━━━𖤍`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
}
