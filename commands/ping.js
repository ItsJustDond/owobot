const Discord = require("discord.js");
const config = require('../important.json')
module.exports.run = async (client, message, args) => {
    if(message.author.id !== config.ownerID) return;

setInterval(function() {
    message.channel.send("owo");
    message.channel.send(";sell");
}, 10000);


}
module.exports.help = {
  name:"pingr"
}
