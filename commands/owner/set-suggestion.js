const db = require('quick.db')
const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    config: {
    name: 'set-suggestion'
    },

    run: async(message, args) => {

      
      if(message.author.id !== config.idowner) return;  
      if(!message.member.permissions.has('ADMINISTRATOR')) return;
        let channel = message.mentions.channels.first() || message.channel || args[0]

        await db.set(`suggestion_${message.guild.id}`, channel.id)

        if(args[0] === "off"){
            const embed = new Discord.MessageEmbed()
            .setDescription('Suggestion a été désactivée avec succès')
            .setColor('RED')
            await db.delete(`suggestion_${message.guild.id}`)
            return message.channel.send(embed)
        }
        const embed = new Discord.MessageEmbed()
        .setDescription(`La suggestion a été définie sur ${channel} avec succès`)
        .setColor('GREEN')

        await message.channel.send(embed)
    }
}