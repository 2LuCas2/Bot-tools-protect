const db = require("quick.db")
const {Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: "setwelcome-off"
    },

    run: async (bot, message, args,client) => {
        
        if (message.author.id !== message.guild.ownerID) {
            const embed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Vous devez être l'OWNER du serveur\nOwner Actuel: <@${message.guild.ownerID}>`)
            .setColor('RED')
            .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))

            return message.channel.send(embed);
            }
        if(message.member.hasPermission('ADMINISTRATOR')){

        try {
            let h = db.fetch(`setwelcome-on_${message.guild.id}`)

            if (!h) {
                return message.channel.send(`**Il n'y a pas de channel Setwelcome défini à désactiver !**`)
            } else {
                let channel = message.guild.channels.cache.get(h)
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Setwelcome désactiver!**")
                db.delete(`setwelcome-on_${message.guild.id}`)

                message.channel.send(`**Le channel Setwelcome a été désactivé avec succès dans\`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("**Erreur - `Autorisations manquantes ou la chaîne n'existe pas`**")
        }
    }
}}