const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Shadow Network | Seviye Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setImage('https://cdn.discordapp.com/attachments/1193529690359611432/1193529767379619860/standard.gif?ex=65ad0c37&is=659a9737&hm=902598e6930116ae8caa366ae43114fe3b84c02b7b81094bd6f0eea4e879d517&')
    .setDescription(
      `🎀 Kroxez Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Seviye__**`,
      `🎀 \`${prefix}seviye\` \n Sizin Özelliştirdiginiz Seviye Sıralama Kartını Gösterir.`,
        true
    )
     .addField(
      `**__Seviye Sıralama__**`,
      `🎀 \`${prefix}sıralama\` \n Seviye DataBase 'indeki Sıralama Ranklarını Görürsün.`,
        true
    )
    .addField(
      `**__SeviyeKart Özelleştir Resim__**`,
      `🎀 \`${prefix}seviyekart-özelleştir resim\` \n Seviye Kartınıza Özel Arka Plan Ayarlarsınız.`,
        true
    )
   .addField(
      `**__SeviyeKart Özelleştir Renk__**`,
      `🎀 \`${prefix}seviyekart-özelleştir renk\` \n Seviye Kartınıza Özel Renk Ayarlarsınız.`,
        true
    )
    .addField(
      `**__Seviye Aç__**`,
      `🎀 \`${prefix}seviye-ayarla durum aç\` \n Discord Sunucunuzda Seviye Sistemini Açarsınız.`,
        true
    )
     .addField(
      `**__Seviye Kapat__**`,
      `🎀 \`${prefix}seviye-ayarla durum kapat\` \n Discord Sunucunuzda Seviye Sistemini Kapatırsınız.`,
        true
    )
     .addField(
      `**__Seviye Kanal__**`,
      `🎀 \`${prefix}seviye-ayarla log kanal\` \n Discord Sunucunuzda Seviye Log Kanal Ayarlarsanız.`,
        true
    )
     .addField(
      `**__Seviye Mesaj__**`,
      `🎀 \`${prefix}seviye-ayarla log mesaj seviye\` \n Seviye Log Kanalına Gidecek Mesaji Ayarlasınız.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `🎀  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🎀 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"seviye-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
