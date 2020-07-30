const Discord = require('discord.js')

exports.run = async(client, message) => {

    const y = new Discord.MessageEmbed()
    .setColor('RED')
    .addField('**En Önemli Bilgi Komutların Calısması İçin.**','Komutların Calısması İçin Kadın Rolunun Adını "Women" , Erkek Rolunun Adını "Man" ve Kayıtsız Rolunun Adını "UNREGİSTER" Yapın. Ek Olarak Kayıtı Yapıcak Yetkili Rolunun Kullanıcı İsimlerini Yönet Yetkisine Sahib Olması Lazm Yoksa Calısmaz.')
    .addField('**Kayıt**','`.erkek /.e : Bir Kişiyi Erkek Olarak Kayıt Edersin`')
    .addField('**Kayıt**','`.kız /.k : Bir Kişiyi Kız Olarak Kayıt Edersin`')
    .addField('**Bilgi İçin**','`.bilgi / .b : Botun İstatistiklerini Gösterir`')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/727475937112752158/731808753975820328/Paz_12_07_2020_12_45_55.png')
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['r'],
 permLevel: 0
};

exports.help = {
 name: 'rhelp'
};
