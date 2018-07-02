const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();

  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('Test Botu | dvebot.rf.gd', bot.user.avatarURL)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Ad:', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Bölge ', message.guild.region)
    .addField('Üye sayısı :', message.guild.memberCount)
    .addField('Sahibi :', message.guild.owner)
    .addField('Kanal sayısı :', message.guild.channels.size)
    .addField('Oluşturulma tarihi :', message.guild.createdAt)
    console.log("t!sunucubilgi komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
    return message.channel.send(sunucubilgi);
    }
};

module.exports.help = {
  name: "sunucubilgi"
}