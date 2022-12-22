const { ActivityType } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity('commands', { type: ActivityType.Listening });
	}
};