const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const cfg = require('./cfg.json');


client.on("ready", () => {
    console.log("ready");

});

client.on("voiceStateUpdate",(old, after) => {
    if(!old.voiceChannel && after.voiceChannel) {
    after.addRole("527081219524132894")
        .catch(console.error);
};
if(old.voiceChannel && !after.voiceChannel) {
    after.removeRole("527081219524132894")
        .catch(console.error);
}

});

client.login(cfg.token);
