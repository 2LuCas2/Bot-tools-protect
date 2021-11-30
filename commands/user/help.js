const { MessageEmbed } = require("discord.js")

module.exports = {
config: {
        name: "help",
        aliases: ['aide'],
},

    run: async (bot, message, client, args) => {
        let embed = new MessageEmbed()
        .setColor(`RED`)
.setDescription('**Voici la liste de mes commandes (10)**')
        .addFields(

            { name: `💥・antiraid (1)`, value: '`antibot`'},

            { name: `💰・jeu (1)`, value: '`ppc`',} ,

            { name: `🏠・Utilitaire (5)`, value: '`help`, `speed`, `banlist`, `botlist`, `adminlist`'},

            { name: `👑・owner (3)`, value: '`whitelist`, `setname`, `setavatar`'},
        )
        .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL())
        message.channel.send(embed)    
}}