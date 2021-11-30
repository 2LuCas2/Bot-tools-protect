const config = require("../../config.json")
module.exports = {
    config: {
        name: 'setavatar'
        },

    run: async(client, message, args) => {   
        if(message.author.id !== config.idowner) return;  
    if(message.attachments.size > 0) { 
    message.attachments.forEach(attachment => {
        client.user.setAvatar(attachment.url)
        .then(u => message.channel.send(` :white_check_mark: ${message.author}, Vous avez changé la photo de profil de votre bot.`))
        .catch(e => { return message.channel.send(`  ${message.author}, Une erreur est survenue.`); });
    });
    } else if (args.length) {
        let str_content = args.join(" ")
        client.user.setAvatar(str_content)
        .then(u => message.channel.send(` :white_check_mark: ${message.author}, Vous avez changé la photo de profil de votre bot.`))
        .catch(e => { return message.channel.send(` ${message.author}, Une erreur est survenue.`); });
    } else {
        message.channel.send(` ${message.author}, Vous avez fournie aucune valeur, veuillez mettre sois une image sois un lien.`);
    }
}}

