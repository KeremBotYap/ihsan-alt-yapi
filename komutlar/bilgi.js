const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarına bilgi mesajımı gönderdim! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", "<@403882308412637186>", )
    .addField("**❯ Sürüm**", " v0.0.1 ", )
    .addField("**❯ Yapım Tarihi**", " 02 Temmuz 2018 ", )
	.addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?bot_id=460723895268278283&scope=bot&permissions=2146958591)", )
    .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/PJSuUVP) ", )
	.setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    return message.author.send(pingozel)
};

module.exports.help = {
  name: "bilgi"
}