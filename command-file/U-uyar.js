const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('```Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.```');
   if (!message.guild) {
  return message.author.send('```:x: Bu komut özel mesajlarda kullanıma kapatılmıştır.```'); }  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```Bu komutu kullanabilmek için **YÖNETİCİ** yetkisine sahip olmalısın.```');
  let embedsunucu = message.guild;
  let uyarılacak = message.mentions.users.first();
  let sebep = args.slice(1).join(' ');
  if (message.mentions.users.size < 1) return message.channel.send('```Uyaracağın kişiyi etiketlemelisin.```').catch(console.error);
  if (sebep.length < 1) return message.channel.send('```Uyaracağım kişiyi neden uyarmam gerektiğini yazmalısın.```');
  message.channel.send('```Kişiyi başarıyla uyardım, özel mesajlarında uyarısı gözükecektir.```')
  return uyarılacak.send(`${embedsunucu} sunucusunda \`${sebep}\` sebebiyle uyarıldın.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı', 'uyarıver'],
  permlevel: 0
};

exports.help = {
  name: 'uyar',
  description: 'Belirtilen kullanıcıyı özel mesajlarında gözükecek şekilde uyarır.',
  usage: 'uyar'
};