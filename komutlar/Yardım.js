const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Kroxez`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(client.user.avatarURL())
   .setImage('https://cdn.discordapp.com/attachments/1193529690359611432/1193529767379619860/standard.gif?ex=65ad0c37&is=659a9737&hm=902598e6930116ae8caa366ae43114fe3b84c02b7b81094bd6f0eea4e879d517&')
    .setDescription(
      `🎧 Kroxez Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `💬 \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `⚙️  \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Öneri__`,
      `🔰 \`${prefix}öneri-sistem\`  `,
      true
    )
    .addField(
      `__seviye__`,
      `⚙️ \`${prefix}seviye-sistem\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `🌀 \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oto rol__`,
      ` 🎮 \`${prefix}otorol-sistem\` `,
      true
    )
    .addField(
      `__Ticket__`,
      `🎉 \`${prefix}ticket-sistem\` `,
      true
    )
    .addField(
      `__Sistemler__`,
      `🎏 \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `🎲 \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
