const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const fynxcode = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setAuthor(`Kroxez Davet Menü`)
    .setDescription(
      `**💼 Botun Davet Linki [TIKLA](https://discord.com/api/oauth2/authorize?client_id=1193177087872340068&permissions=8&scope=bot)**\n`
    )
    .addField(
      `__Bilgilendirme__`,
      `🔰  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔰 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    )
    .setImage('https://cdn.discordapp.com/attachments/1193529690359611432/1193529767379619860/standard.gif?ex=65ad0c37&is=659a9737&hm=902598e6930116ae8caa366ae43114fe3b84c02b7b81094bd6f0eea4e879d517&')
    .setThumbnail(client.user.avatarURL());

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Davet Menüsü",
  usage: ""
};
