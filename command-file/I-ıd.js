const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
                                          
    let embed = message.mentions.members.first() || message.author;
    message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${embed.id}**`);
  };
                                            
                                          
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["Id", "ıd", "ID"],
    permLevel: 0
  };

  exports.help = {
    name: "id",
    description: "Belirtilen Kişinin ID'sini Atar!",
    usage: "id"
  };