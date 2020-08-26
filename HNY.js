const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
                
/*Bot`s code*/
const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon-v2');
const client = new Discord.Client({disableEveryone: true});

const music = new Music(client, {
  prefix: "d!",
  maxQueueSize: "100",
  ownerOverMember: true,
  botOwner: '289690615690690572',
  djRole: 'гости',
  enableQueueStat: true,
  defVolume: 100,
  anyoneCanLeave: true,
  streamMode: 0,
  requesterName: true,
  thumbnailType: "medium",
  youtubeKey: process.env.YOUTUBE_TOKEN
});

  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

client.on("ready", async () => {
    await console.log("ready");
});

client.on("guildMemberAdd", member => {
  member.addRole("528562780413100037").catch(console.error);
    const embed = new Discord.RichEmbed()
            .setAuthor(`Добро пожаловать на Сервер ${member.guild.name} !`, `${member.guild.iconURL}`)
            .setColor(0x27e33d)
            .setDescription("😎Фэйс-контроль😎")
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", `**Поприветсвуем новичка ${member}!**`)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "_ _")
            .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
            .setThumbnail("http://1.bp.blogspot.com/-tN8VUbwyvGQ/VmP5CgHRa3I/AAAAAAAAACc/Q8fqzU2PAXI/s1600-r/pusheen.gif")
            .setTimestamp();
    return client.guilds.find("id", "522559421449240599").channels.find("id", "530048812081872907").send(embed);
});

client.on("voiceStateUpdate", async (old, after) => {
    if(!old.voiceChannel && after.voiceChannel) {
        after.addRole("527081219524132894")
        .catch(console.error);
    }
    if(old.voiceChannel != undefined && after.voiceChannelID == undefined) {
        after.removeRoles(["527081219524132894"]).catch(console.error);
        var category = client.guilds.find("id", "522559421449240599").channels.filter(c => c.type == "category");
        category.forEach(item =>{
            if(item.position > 2 && item.position != 7) {
                item.overwritePermissions(after, {
                    SPEAK: null,
                    VIEW_CHANNEL: null,
                    CONNECT: null
                })
            } else {
                item.overwritePermissions(after, {
                    SPEAK: true,
                    VIEW_CHANNEL: true,
                    CONNECT: true
                })
            }
        });
        
    }
    if(!after.voiceChannel) return undefined;
    if(after.voiceChannel.parentID == "528338498470543371") {
        var category = client.guilds.find("id", "522559421449240599").channels.filter(c => c.type == "category");
        switch(after.voiceChannelID) {
            case "528336444633120788":
            var channelN = after.guild.channels.find("id", "528342102690496512");
            category.forEach(item =>{
                if(item.position != channelN.position) {
                  channelN.parent.overwritePermissions(after, {
                    SPEAK: true,
                    VIEW_CHANNEL: true,
                    CONNECT: true
                });
                   channelN.overwritePermissions(after, {
                      VIEW_CHANNEL: true,
                      CONNECT: true
                    });
                    after.setVoiceChannel(channelN);
                      channelN.overwritePermissions(after, {
                        VIEW_CHANNEL: null,
                    });

                    item.overwritePermissions(after, {
                        SPEAK: null,
                        VIEW_CHANNEL: null

                    });
                }
            });
            break;
            case "528338268425814027":
                var channelN = after.guild.channels.find("id", "528342123758485534");
                category.forEach(item =>{
                    if(item.position != channelN.position) {
                channelN.parent.overwritePermissions(after, {
                    SPEAK: true,
                    VIEW_CHANNEL: true,
                    CONNECT: true
                });
                    channelN.overwritePermissions(after, {
                      VIEW_CHANNEL: true,
                      CONNECT: true
                    });
                    after.setVoiceChannel(channelN);
                      channelN.overwritePermissions(after, {
                        VIEW_CHANNEL: null,

                    });

                        item.overwritePermissions(after, {
                            SPEAK: null,
                            VIEW_CHANNEL: null
                        });
                    }
                });
            break;
            case "528336520713601044":
                var channelN = after.guild.channels.find("id", "528341362211553300");
                category.forEach(item =>{
                    if(item.position != channelN.position) {
                                      
                channelN.parent.overwritePermissions(after, {
                    SPEAK: true,
                    VIEW_CHANNEL: true,
                    CONNECT: true
                });
                    channelN.overwritePermissions(after, {
                      VIEW_CHANNEL: true,
                      CONNECT: true
                    });
                    after.setVoiceChannel(channelN);
                      channelN.overwritePermissions(after, {
                        VIEW_CHANNEL: null,

                    });

                        item.overwritePermissions(after, {
                            SPEAK: null,
                            VIEW_CHANNEL: null
                        });
                    }
                });
            break;
        }
    } else if (after.voiceChannel.parentID == "522559422350884870"){
        var category = client.guilds.find("id", "522559421449240599").channels.filter(c => c.type == "category");
        category.forEach(item => {
          if(item.position > 2 && item.position < 7) {
            item.overwritePermissions(after, {
                            SPEAK: null,
                            VIEW_CHANNEL: null,
                            CONNECT: null
                        });
          } else if (item.position == 2) {
            item.overwritePermissions(after, {
                            SPEAK: true,
                            VIEW_CHANNEL: true,
                            CONNECT: true
                        });
          }
        });

    } else {
        var category = client.guilds.find("id", "522559421449240599").channels.filter(c => c.type == "category");
        var parentU = after.voiceChannel.parent.position;
        switch(after.voiceChannel.name) {
            case "↑ лестница ↑":
                category.forEach(item => {
                    if(item.position == parentU+1) {
                    let channelM = after.guild.channels.find("id", item.id).children.find("name", item.name);

                      item.overwritePermissions(after, {
                    
                            SPEAK: true,
                            VIEW_CHANNEL: true,
                            CONNECT: true
                        });
                    channelM.overwritePermissions(after, {
                      VIEW_CHANNEL: true,
                      CONNECT: true
                    });
                    after.setVoiceChannel(channelM);
                      channelM.overwritePermissions(after, {
                        VIEW_CHANNEL: null,

                    });
                        after.voiceChannel.parent.overwritePermissions(after, {
                            SPEAK: null,
                            VIEW_CHANNEL: null
                        });
                    }
                });
            break;
            case "↓ лестница ↓":
            category.forEach(item => {
                if(item.position == parentU-1) {
                    var channelM = after.guild.channels.find("id", item.id).children.find("name", item.name);
                    item.overwritePermissions(after, {
                        SPEAK: true,
                        VIEW_CHANNEL: true,
                        CONNECT: true
                    });
                    channelM.overwritePermissions(after, {
                      VIEW_CHANNEL: true,
                      CONNECT: true
                    });
                    after.setVoiceChannel(channelM);
                      channelM.overwritePermissions(after, {
                      VIEW_CHANNEL: null,
                    });
                    after.voiceChannel.parent.overwritePermissions(after, {
                        SPEAK: null,
                        VIEW_CHANNEL: null
                    });

  
                }
            });
            break;
        }
   }

});

client.on("message", msg => {
    if(msg.channel.id !== "528644295100465162") return undefined;
    if (msg.author.bot) return undefined;
    if(!msg.content.startsWith("d!")) return undefined;
    const args = msg.content.slice(2).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch(command) {
        case "whereall":
        if(msg.member.guild.roles.find("id", "527081219524132894").members.size == 0) {
            const embed = new Discord.RichEmbed()
            .setTitle("😎Большой Брат следит😎")
            .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
            .setColor(0x27e33d)
            .setDescription("В данный момент, в доме никого нет =(")
            .setFooter(`${msg.author.username}`, `${msg.author.avatarURL}`)
            .setTimestamp()

        return msg.channel.send(embed);
        } else {
            const embed = new Discord.RichEmbed()
            .setTitle("😎Большой Брат следит😎")
            .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
            .setColor(0x27e33d)
            .setDescription("В данный момент, в доме находятся:")
            .setFooter(`${msg.author.username}`, `${msg.author.avatarURL}`)
            .setTimestamp()
            msg.member.guild.roles.find("id", "527081219524132894").members.forEach( user => {
                embed.addField(`${user.user.username}`, `В комнате \"**${user.voiceChannel.name}**\"`);
            });
    return msg.channel.send(embed);
    }
}
});
client.setInterval(() => {
  client.user.setActivity(`за Home Sweet Home v.2.0 | ${client.guilds.find("id", "522559421449240599").memberCount}`, { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
}, 60000);
client.login(process.env.TOKEN);
