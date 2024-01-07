const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kişi =
    message.mentions.users.first() || client.users.cache.get(args.join(" "));
  if (!args[0]) {
    const emmbed = new Discord.MessageEmbed();
    emmbed
      .setTitle("Bayrak mı Artık Rozet mi ne diye geçiyo bilmiyom")
      .setColor("#00ff00");
    emmbed.setDescription(
      message.author.flags.toArray().join("\n")
        ? message.author.flags
            .toArray()
            .join("\n")
            .replace("HOUSE_BRAVERY", "Bravery")
            .replace("HOUSE_BRILLIANCE", "BRILLIANCE")
            .replace("HOUSE_BALANCE", "BALANCE")
            .replace("VERIFIED_DEVELOPER", "Monaylı İl Türk Devmloepr")
            .replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
            .replace("DISCORD_PARTNER", "Partner")
            .replace("HYPESQUAD_EVENTS", "Events Rozeti")
            .replace("BUGHUNTER_LEVEL_1", "Bug avcısı LVL1")
            .replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
            .replace("TEAM_USER", "Takım Üyesi")
            .replace("SYSTEM", "Sistem")
            .replace("BUGHUNTER_LEVEL_2", "Bug Avcısı lvl2")
            .replace("VERIFIED_BOT", "Onaylı Bot")
        : `yok`
    );
    message.channel.send(emmbed);
  }
  if (kişi) {
    const emmbed = new Discord.MessageEmbed();
    emmbed.setTitle("Bayrak mı Artık Rozet mi ne diye geçiyo bilmiyom");
    emmbed.setColor("#00ff00");
    emmbed.setDescription(
      kişi.flags.toArray().join("\n")
        ? kişi.flags
            .toArray()
            .join("\n")
            .replace("HOUSE_BRAVERY", "Bravery")
            .replace("HOUSE_BRILLIANCE", "BRILLIANCE")
            .replace("HOUSE_BALANCE", "BALANCE")
            .replace("VERIFIED_DEVELOPER", "Monaylı İl Türk Devmloepr")
            .replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
            .replace("DISCORD_PARTNER", "Partner")
            .replace("HYPESQUAD_EVENTS", "Events Rozeti")
            .replace("BUGHUNTER_LEVEL_1", "Bug avcısı lvl1")
            .replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
            .replace("TEAM_USER", "Takım Üyesi")
            .replace("SYSTEM", "Sistem")
            .replace("BUGHUNTER_LEVEL_2", "Bug Avcısı LVL2")
            .replace("VERIFIED_BOT", "Onaylı Bot")
        : `yok`
    );
    message.channel.send(emmbed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rozetler"],
  permLevel: 0
};

exports.help = {
  name: "rozetler",
  description: "!rozet  veya !bayrak",
  usage: "rozetler"
};
