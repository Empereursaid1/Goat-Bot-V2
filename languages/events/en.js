module.exports = {
	// You can customize the language here or directly in the command files
	autoUpdateThreadInfo: {},
	checkwarn: {
		text: {
			warn: "Member %1 has been warned 3 times before and has been banned from the chat box\n- Name: %1\n- Uid: %2\n- To unban, please use the \"%3warn unban <uid>\" command (with uid is the uid of the person you want to unban)",
			needPermission: "Bot needs administrator permission to kick banned members"
		}
	},
	leave: {
		text: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			leaveType1: "😕...-1 𝐃𝐚𝐧𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 𝐦𝐚𝐢𝐬 𝐛𝐨𝐧 𝐥𝐚 𝐯𝐢𝐞 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐞 ...😪",
			leaveType2: "𖤍..𝐓𝐮 𝐝𝐞́𝐫𝐚𝐧𝐠𝐞𝐚𝐢𝐭 𝐭𝐫𝐨𝐩 𝐚𝐥𝐨𝐫𝐬 𝐝𝐞́𝐠𝐚𝐠𝐞 🚮..𖤍"
		}
	},
	logsbot: {
		text: {
			title: "====== Bot 𖤍 logs ======",
			added: "\n✅\nEvent: bot has been added to a new group\n- Added by: %1",
			kicked: "\n❌\nEvent: bot has been kicked\n- Kicked by: %1",
			footer: "\n- User ID: %1\n- Group: %2\n- Group ID: %3\n- Time: %4"
		}
	},
	onEvent: {},
	welcome: {
		text: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: "Thank you for inviting me to the group!\nBot prefix: %1\nTo view the list of commands, please enter: %1help",
			multiple1: "you",
			multiple2: "you guys"
		}
	}
};
