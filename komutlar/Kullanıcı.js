const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedkullanıcı = new Discord.MessageEmbed()
    .setAuthor(`Kroxez | Kullanıcı`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(client.user.avatarURL())
    .setImage('https://cdn.discordapp.com/attachments/1193529690359611432/1193529767379619860/standard.gif?ex=65ad0c37&is=659a9737&hm=902598e6930116ae8caa366ae43114fe3b84c02b7b81094bd6f0eea4e879d517&')
    .setDescription(
      `🔅 Kroxez Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Rozetler__`,
      `🔎\`${prefix}rozetler\` Discord Bot Discord Aldıgınız Rozetleri Komutla Görürsün.`,
      true
    )
    .addField(
      `__Profil__`,
      `🔎 \`${prefix}profil\` Discord Bot Size Özel Profil Ayarlar.`,
      true
    )
    .addField(
      `__Avatarım__`,
      `🔎 \`${prefix}avatar\` Discord Bot Sizin Avatarınızı Yansıtır.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `🔎 \`${prefix}botbilgi\` Discord Botumuzun İstatistiklerini Bakarsınız.`,
      true
    )
    .addField(
      `__Rol Bilgi__`,
      `🔎 \`${prefix}rolbilgi\` Etiketlediginiz Bir Rolü Bot Bilgilerini Gösterir.`,
      true
    )
    .addField(
      `__Yetkilerim__`,
      `🔎 \`${prefix}yetkilerim\` Discord Bot Size Yetkilerinizi Gösterir.`,
      true
    )
  .addField(
      `__Bilgilendirme__`,
      `✂️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ✂️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  return message.channel.send(embedkullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "kullanıcı Menüsü",
  usage: "kullanıcı"
};
