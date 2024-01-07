const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Kroxez  | Genel`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(client.user.avatarURL())
  .setImage('https://cdn.discordapp.com/attachments/1193529690359611432/1193529767379619860/standard.gif?ex=65ad0c37&is=659a9737&hm=902598e6930116ae8caa366ae43114fe3b84c02b7b81094bd6f0eea4e879d517&')
    .setDescription(
      `🌀 Kroxez  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Oylama__`,
      ` 🚩  \`${prefix}oylama\` Sunucudan Bir Oylama Başlatırsın.`,
      true
    )
   .addField(
      `__Oylama Kanal__`,
      ` 🚩  \`${prefix}oylama-kanal\` Sunucudan Bir Oylama Kanal Ayarlar.`,
      true
    )
    .addField(
      `__Toplam Komut__`,
      ` 🚩  \`${prefix}komutlar\` Discord Botta Toplam Kaç Komut Var Ona Bakarsın.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      ` 🚩  \`${prefix}botbilgi\` Botun Sunucu Ve Sürüm , Sahip İstatistikleri Bakarsın.`,
      true
    )
    .addField(
      `__Davet__`,
      ` 🚩   \`${prefix}davet\` ShadowRise Network Davet Menüsünü Görürsün.`,
      true
    )
    .addField(
      `__Ping__`,
      ` 🚩  \`${prefix}ping\` Discord Botun Mesaj Geçikmesi ve Bot Geçikmesini Gösterir.`,
      true
    )
    .addField(
      `__AFK__`,
      ` 🚩  \`${prefix}afk\` Kullanıcı Bir Sebeple AFK Moduna Girer.`,
      true
    )
   .addField(
      `__V11 To V12__`,
      ` 🚩 \`${prefix}çevir\` Disord Botlara Koyulan V11 Kodu V12 Çevirebilirsiniz.`,
      true
    )
     .addField(
      `__Say__`,
      ` 🚩  \`${prefix}say\` Toplam Kanal Seviyeni Gösteren Gelişmiş Say Komutu.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      ` 🚩  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⚠️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "genel",
  description: "Genel Menüsü",
  usage: "genel"
};
