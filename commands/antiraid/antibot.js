const { Client, Message, MessageEmbed } = require('discord.js')
const db = require('quick.db')
const Discord = require("discord.js")
module.exports = {
    config: {
    name: 'antibot',
    aliases: ['anti-bot'],  
    },

    run: async(client, message, args) => {
      

        if (message.author.id !== message.guild.ownerID) {
             const embed = new MessageEmbed()
             .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
             .setDescription(`Vous devez être l'OWNER du serveur\nOwner Actuel: <@${message.guild.ownerID}>`)
             .setColor('RED')
             .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

             return message.channel.send(embed);
             }
        if(!args[0]) return message.reply({ content: "Faite `antibot on/off`.", allowedMentions:{repliedUsers:false}})   
        if(args[0] === "on"){
            await db.set(`anti-bot-${message.guild.id}`, true)
            const on = new Discord.MessageEmbed()
            .setDescription("L'anti-bot vient d'être activer avec succès.")
            .setColor("GREEN")
            .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            return message.channel.send(on).catch(e => console.log(e))
        }
        if(args[0] === "off"){
            await db.delete(`anti-bot-${message.guild.id}`)

            const off = new Discord.MessageEmbed()
            .setDescription("L'antibot vient d'être désactiver avec succès.")
            .setColor('RED')
            .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            return message.channel.send(off).catch(e => console.log(e))
          }       
        }}