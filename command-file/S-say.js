const Discord = require("discord.js");

exports.run = (client, message) => {
  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
   .addField("**Toplam Kullanıcı**",message.guild.memberCount )
    .setTimestamp()
  return message.channel.send(embed);
};

module.exports.conf = {
  aliases: ["say","SAY","SaY","sAy"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "Say",
  description: "",
  usage: ""
};