const Discord = require('discord.js');
const botconfig = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('online en klaar voor gebruik');

});

bot.client(procces.env.token);
