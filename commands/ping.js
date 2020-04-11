const Discord = require("discord.js");
const config = require('../important.json')
module.exports.run = async (client, message, args) => {

setInterval(function() {
    message.channel.send(";sell");
}, 10000);

setInterval(function() {
    message.channel.send(";fish");
    message.channel.send(";hunt");
}, 300000);    

}
module.exports.help = {
  name:"pingr"
}
