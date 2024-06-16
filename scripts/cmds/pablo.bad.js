const axios = require("axios")
module.exports = {
	config: {
		name: 'pablo.bad',
        aliases: ["bad"],
		version: '1.2',
		author: 'Luxion/fixed by Riley',
		countDown: 0,
		role: 0,
		shortDescription: 'AI CHAT',
		longDescription: {
			en: 'Chat with Xae'
		},
		category: 'Ai chat',
		guide: {
			en: "{pn} <word>: chat with lina"
				+ "\Example:{pn} hi"
		}
	},

	langs: {
		en: {
			turnedOn: "𝐏𝐀𝐁𝐋𝐎➪(𝐎𝐅𝐅) 𝐁𝐀𝐃 𝐏𝐀𝐁𝐋𝐎➪(𝐎𝐍) 𖤍😈𖤍....⚠︎",
			turnedOff: "𝐂𝐎𝐍𝐒𝐄𝐈𝐋 𝐃'𝐀𝐌𝐈𝐒 𝐌𝐄 𝐂𝐇𝐄𝐑𝐂𝐇𝐄 𝐏𝐀𝐒 𝐏𝐈𝐆𝐄́.....☠.",
			chatting: "Already Chatting with 𝗟𝗢𝗙𝗧...",
			error: "𝐂𝐎𝐍𝐍𝐀𝐑𝐃𝐒...🥴.."
		}
	},

	onStart: async function ({ args, threadsData, message, event, getLang }) {
		if (args[0] == "parle" || args[0] == "adieu") {
			await threadsData.set(event.threadID, args[0] == "parle", "settings.simsimi");
			return message.reply(args[0] == "parle" ? getLang("turnedOn") : getLang("turnedOff"));
		}
		else if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
        console.log(err)
				return message.reply(getLang("error"));
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand, getLang }) => {
		if (args.length > 1 && !isUserCallCommand && await threadsData.get(event.threadID, "settings.simsimi")) {
			try {
				const langCode = await threadsData.get(event.threadID, "settings.lang") || global.GoatBot.config.language;
				const responseMessage = await getMessage(args.join(" "), langCode);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				return message.reply(getLang("error"));
			}
		}
	}
};

async function getMessage(yourMessage, langCode) {
	const res = await axios.post(
    'https://api.simsimi.vn/v1/simtalk',
    new URLSearchParams({
        'text': yourMessage,
        'lc': 'fr'
    })
);

	if (res.status > 200)
		throw new Error(res.data.success);

	return res.data.message;
        }
