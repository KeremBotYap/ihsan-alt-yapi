const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pages = ['[❯ Tüm Komutlar]\n\n[t!yardım](https://discord.gg/PJSuUVP)  •  Botun tüm komutlarını gösterir.\n[t!istatistik](https://discord.gg/PJSuUVP)  • Botun istatistiklerini gönderir.\n[t!avatar](https://discord.gg/PJSuUVP) •  Kendi avatarınızı veya etiketlediğiniz kişinin avatarını verir.\n[t!sunucubilgi](https://discord.gg/PJSuUVP)  •  Sunucu hakkında bilgi verir.\n[t!temizle](https://discord.gg/PJSuUVP) • Belirttiğiniz kadar mesajı siler.\n[t!bilgi](https://discord.gg/PJSuUVP) • Bot hakkında bilgiler verir.'];
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,bot.user.avatarURL)
  .setFooter(`© 2018 TEST BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,bot.user.avatarURL)
message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 TEST BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 TEST BOTU | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })

    })
  })
}

module.exports.help = {
  name: "yardım"
}