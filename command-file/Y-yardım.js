const Discord = require('discord.js')
  
const key = require('../key.json')
  
let prefix = key.prefix
  
exports.run = async (client, message, args) => {
  
                                         
  
  const embednewdth = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle(' **V12 Moderasyon Bot Yardım Menüsü** ')
  
  .setDescription(`
  !bansay | **Ban Say Komutunu Kullanırsınız. **

  !ban | **Ban Komutunu Kullanırsınız. **

  !ıd @etiket | **Id Komutununu Kullanırsınız. **

  !istatistik | **İstatistik Komutunu Kullanırsınız. **

  !kick | ** Kick Komutunu Kullanırsınız. **

  !nuke | **Nuke Komutunu Kullanırsınız. **

  !oylama | **Oylama Komutunu Kullanırsınız.**

  !sa-as Aç/Kapat | **Sa-As Komutunu Kullanırsınız.**

  !say | **Say Komutunu Kullanırsınız. **

  !sohbet-aç | **Sohbet Aç Komutunu Kullanırsınız.**

  !sohbet-kapat |** Sohbet Kapat Komutunu Kullanırsınız.**

  !sunucu-bilgi |** Sunucu Bilgi Komutunu Kullanırsınız.**

  !uyar | **Uyar Komutunu Kullanırsınız.**

  !yavaşmod | **Yavaş Mod Komutunu Kullanırsınız.**

     [Bot Davet Linki](Davet Linki) **|** [Destek Sunucusu](https://discord.gg/erTqUNqSUd) 

` )

.setImage("https://cdn.discordapp.com/attachments/914527823723659265/915229434984955956/200.png")


message.channel.send(embednewdth)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'


}
