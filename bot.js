const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '-';

client.on('ready', () => {
  console.log(`Bot ${client.user.username} adi ile giris yapti!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content === prefix + 'kanal') {
    msg.channel.sendMessage('JustHitIT Resmi Bot!');
  }
  if (msg.content === prefix + 'youtube') {
    msg.channel.sendMessage('Kanal: JustHitIT!');
  }
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage('Komutlar');
	msg.channel.sendMessage('kanal');
	msg.channel.sendMessage('ping');
	msg.channel.sendMessage('youtube');
  }
});

client.login(process.env.BOT_TOKEN);
