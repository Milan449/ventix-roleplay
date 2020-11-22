const Discord = require('discord.js');
const botconfig = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('online en klaar voor gebruik');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	// other commands...
});

bot.login(procces.env.token);
