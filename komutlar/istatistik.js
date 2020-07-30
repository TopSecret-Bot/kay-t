const Discord = require("discord.js");


exports.run = async (client, message, args) => {


const istatistikler = new Discord.MessageEmbed()
  .addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:incoming_envelope: » Yapımcım` ,`TopSecret#3331`,true)
  .addField(`:label: » Node.js`, `${process.version}`, true)
 .addField(`:bar_chart: » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`:postbox: » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`:envelope: » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Asıl Sunucumuz](https://discord.gg/Budap23) | [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=734590566045712454&scope=bot&permissions=2146958847)`, true)
  message.channel.send(istatistikler)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'b',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: 'i'
};
