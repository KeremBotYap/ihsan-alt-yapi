const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
message.delete();
  console.log("t!istatistik komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Test Botu | dvebot.rf.gd', bot.user.avatarURL)
  .addField("» Botun Sahibi", "<@403882308412637186>")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("» Çalışma süresi", duration)
  .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField("» Ping", bot.ping+" ms", true)
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?bot_id=460723895268278283&scope=bot&permissions=2146958591)` + "** | **" + `[Destek Sunucusu](https://discord.gg/PJSuUVP)`, false);
  return message.channel.send(istatistikler);
  };

module.exports.help = {
  name: "istatistik"
}