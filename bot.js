const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '-';

client.on('ready', () => {
  console.log(`Bot ${client.user.username} adi ile giris yapti!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
	  console.log(`Bot: Yeni Mesaj Alindi! Mesaj: ${msg.content} Yazan: ${msg.author.tag}`)
	  return;
  }
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content === prefix + 'kanal') {
    msg.channel.sendMessage('JustHitIT Resmi Bot!');
  }
  if (msg.content === prefix + 'youtube') {
    msg.channel.sendMessage('Kanal: JustHitIT! www.youtube.com/c/justhitit den katılabilirsin ;)');
  }
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage(
	"Commands: \n" +
	"- ping : Pinginizi soyler. \n" +
	"- kanal : Oylesine :) \n" +
	"- youtube : Hangi kanala aitim onu soyler!");
	
  }
});

client.login(process.env.BOT_TOKEN);
