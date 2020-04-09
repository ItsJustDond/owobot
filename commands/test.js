const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let toSay = args.slice(0);
    return message.channel.send(toSay);
}

module.exports.help = {
  name:"say"
}