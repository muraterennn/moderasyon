const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {

    const embednew = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription('Bu Komutu Kullanabilmek için **Kanalları Yönet** Yetkin Olmalı.')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(embednew) 

let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`**Nuke İşlemi Uygulanıyor...**`);

let attachment = new Discord.MessageAttachment('**Nuke İşlemi Başarı İle Uygulandı.**');

let position = channel.position;
setTimeout(() => {
channel.delete();
channel.clone().then(s => {
s.setPosition(position);
s.send(attachment);
});
}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'nuke'
};