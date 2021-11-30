const Discord = require("discord.js");
exports.run = (client, message, args) => {

  const discordnewembed = new Discord.MessageEmbed()
  .setColor("#BLACK")
  .setDescription('Bu Komutu Kullanabilmek için **Kanalları Yönet** Yetkin Olmalı.')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(discordnewembed) 


  let a = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(a, {
    SEND_MESSAGES: false
  });

  message.channel.send("Sohbet kanalı **Yazılamaz**  Durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};