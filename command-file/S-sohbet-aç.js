const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embedbotnw = new Discord.MessageEmbed()
  .setColor("#BLACK")
  .setDescription('Bu Komutu Kullanabilmek için **Kanalları Yönet** Yetkin Olmalı.')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(embedbotnw) 

  let s = message.guild.roles.cache.find(r => r.name === '@everyone')
message.channel.createOverwrite(s, {
  'SEND_MESSAGES': true,
 
})
 

   message.channel.send('Sohbet kanalı **Yazılabilir** durumuna getirildi.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};