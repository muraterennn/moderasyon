const Discord = require('discord.js');
const client = new Discord.Client();
const key = require('./key.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('quick.db');
const moment = require('moment');
const chalk = require('chalk');


var prefix = key.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./command-file/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./command-file/${f}`);
        log(`Yüklenen Komut : ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./command-file/${command}`)];
            let cmd = require(`./command-file/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./command-file/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./command-file/${command}`)];
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === key.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.login(key.token);
/////////////////////sa-as
client.on('message', async (msg) => {
    let i = await  db.fetch(`saas_${msg.guild.id}`)
        if(i === 'açık') {
          if (msg.content.toLowerCase() === 'sa'){
            
          msg.reply(' Aleyküm Selam | Hoş geldin ');    
        }
        }
      });
  
  client.on('message', async (msg) => {
    let i = await  db.fetch(`saas_${msg.guild.id}`)
        if(i === 'açık') {
          if (msg.content.toLowerCase() === 's.a.'){
            
          msg.reply(' Aleyküm Selam | Hoş geldin ');    
        }
        }
      });
  
      client.on('message', async (msg) => {
        let i = await  db.fetch(`saas_${msg.guild.id}`)
            if(i === 'açık') {
              if (msg.content.toLowerCase() === 'sea'){
                
              msg.reply(' Aleyküm Selam | Hoş geldin ');    
            }
            }
          });
  
          client.on('message', async (msg) => {
            let i = await  db.fetch(`saas_${msg.guild.id}`)
                if(i === 'açık') {
                  if (msg.content.toLowerCase() === 'Sa'){
                    
                  msg.reply(' Aleyküm Selam | Hoş geldin ');    
                }
                }
              });
  
              client.on('message', async (msg) => {
                let i = await  db.fetch(`saas_${msg.guild.id}`)
                    if(i === 'açık') {
                      if (msg.content.toLowerCase() === 'Selam'){
                        
                      msg.reply(' Aleyküm Selam | Hoş geldin ');    
                    }
                    }
                  });
  
                  client.on('message', async (msg) => {
                    let i = await  db.fetch(`saas_${msg.guild.id}`)
                        if(i === 'açık') {
                          if (msg.content.toLowerCase() === 'selam'){
                            
                          msg.reply(' Aleyküm Selam | Hoş geldin ');    
                        }
                        }
                      });
              
  
                      client.on('message', async (msg) => {
                        let i = await  db.fetch(`saas_${msg.guild.id}`)
                            if(i === 'açık') {
                              if (msg.content.toLowerCase() === 'Selam'){
                                
                              msg.reply(' Aleyküm Selam | Hoş geldin ');    
                            }
                            }
                          });
                  
                          client.on('message', async (msg) => {
                            let i = await  db.fetch(`saas_${msg.guild.id}`)
                                if(i === 'açık') {
                                  if (msg.content.toLowerCase() === 'SELAM'){
                                    
                                  msg.reply(' Aleyküm Selam | Hoş geldin ');    
                                }
                                }
                              });
  
                              client.on('message', async (msg) => {
                                let i = await  db.fetch(`saas_${msg.guild.id}`)
                                    if(i === 'açık') {
                                      if (msg.content.toLowerCase() === 'selamın aleyküm'){
                                        
                                      msg.reply(' Aleyküm Selam | Hoş geldin ');    
                                    }
                                    }
                                  });
                          
                                  client.on('message', async (msg) => {
                                    let i = await  db.fetch(`saas_${msg.guild.id}`)
                                        if(i === 'açık') {
                                          if (msg.content.toLowerCase() === 'Selamın Aleyküm'){
                                            
                                          msg.reply(' Aleyküm Selam | Hoş geldin ');    
                                        }
                                        }
                                      });
                              
                                      client.on('message', async (msg) => {
                                        let i = await  db.fetch(`saas_${msg.guild.id}`)
                                            if(i === 'açık') {
                                              if (msg.content.toLowerCase() === 'Selamın aleyküm'){
                                                
                                              msg.reply(' Aleyküm Selam | Hoş geldin ');    
                                            }
                                            }
                                          });
                                  
                                          client.on('message', async (msg) => {
                                            let i = await  db.fetch(`saas_${msg.guild.id}`)
                                                if(i === 'açık') {
                                                  if (msg.content.toLowerCase() === 'Selamınaleyküm'){
                                                    
                                                  msg.reply(' Aleyküm Selam | Hoş geldin ');    
                                                }
                                                }
                                              });
                                      
  
                                              client.on('message', async (msg) => {
                                                let i = await  db.fetch(`saas_${msg.guild.id}`)
                                                    if(i === 'açık') {
                                                      if (msg.content.toLowerCase() === 'selamınaleyküm'){
                                                        
                                                      msg.reply(' Aleyküm Selam | Hoş geldin ');    
                                                    }
                                                    }
                                                  });
                                          
  ////////////////////////sa-as bitiş
  