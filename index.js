////////////////////////////////////////////////////Ne pas toucher////////////////////////////////////////////////////
const { Client, Collection, MessageEmbed, } = require('discord.js');
const bot = new Client();
const db = require('quick.db')
const { token } = require(`./config.json`);
const { prefix } = require(`./config.json`);
[`aliases`, `commands`].forEach(x => bot[x] = new Collection());
["command", "events"].forEach(x => require(`./handlers/${x}`)(bot));
const client = new Client();
client.on("warn", (info) => console.log(info));                 
client.on("error", console.error);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('ready', () => {
    console.log(`${client.user.username}${"#" + client.user.discriminator} en ligne !`);
    client.user.setActivity("Hey", { type: "STREAMING", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
});

////////////////////////////////////////////////////Commande speed////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content === `${prefix}speed`) { 
      message.channel.send(`🏓La latence est de ${Date.now() - message.createdTimestamp}ms. La latence de l'API est de ${Math.round(client.ws.ping)}ms`);
    }
  });


//////////////////////////////////////////////////event antibot ne pas toucher/////////////////////////////////////////////////////////
  client.on("guildMemberAdd", async message => {
    try {
          if(db.has(`anti-bot-${message.guild.id}`)=== false) return;                  
      if(!message.guild) return;
if (message.user.bot) message.kick({raison: 'anti bot'})
    } catch (error) {
      console.log(error)
  }
})

////////////////////////////////////////////////////Ne pas toucher////////////////////////////////////////////////////       
  bot.login(token)
  client.login(token);
////////////////////////////////////////////////////Ne pas toucher////////////////////////////////////////////////////

