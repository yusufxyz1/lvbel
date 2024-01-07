const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let bayrak = args.slice(0).join(" ");
  if (!bayrak) return message.channel.send(":exclamation: | **Lütfen Bayrağını Gir (EMOJİ OLSUN) :flag_tr: Gibi**");
  message.channel.send(":white_check_mark: | **Profil Bayrağın Başarıyla ``" + bayrak + "`` olarak ayarlandı!**");
  db.set(`pbayrak_${message.author.id}`, bayrak);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "bayrak-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};