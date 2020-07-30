const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`Bu komutu kullanabilmek için **Kullanıcı İsimlerini Yönet** iznine sahip olmalısın!`);
   let member = message.mentions.users.first()// if(message.author.id !== "643108629469331509") return message.channel.send('Bu komutu sadece sahibim kullanabilir :sunglasses:')
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
   let erkek = message.guild.roles.cache.find(s => s.name === 'Man')



   let kayıtsız = message.guild.roles.cache.find(r => r.name === 'UNREGİSTER')

   let kayıt = message.guild.member(member)
   let isim = args[1]
   let yas = args[2]

   if(!isim) return message.channel.send('İsim belirtmelisin')
   if(isNaN(yas)) return message.channel.send('Yaş belirtmelisin')

   kayıt.setNickname(`Ж ${isim} | ${yas}`)

   kayıt.roles.add(erkek)

   kayıt.roles.remove(kayıtsız)

   let embed = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setTitle('Kayıt Başarılı')
   .addField('Kayıt edilen kullanıcı',member)
   .addField('Adı ;', isim)
   .addField('Yaşı ;', yas)
   .addField('Kayıt eden yetkili', message.author)
   .setImage('https://cdn.discordapp.com/attachments/727475937112752158/729913189147475968/ezgif-6-a482f230df16.gif')
  message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['e'],
    permlevel: 0
};

exports.help = {
    name: "erkek"
}
