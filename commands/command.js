module.exports = {
  name: "command",
  description: "Embeds!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setTitle("Rules")
      .setAuthor("Bruno Costa Prado","https://github.com/BrunoCostaPrado?tab=repositories")
      .setColor("#800000")
      .setDescription("this is a embed for the server")
      .setFooter("Leia a regra")
      .setTimestamp()
      .setURL("https://github.com/BrunoCostaPrado?tab=repositories")
      .addField({ name: "Rule 1", value: "Não seja o Nicolas" })
      .setFooter("Leia a regra");
    message.channel.send(newEmbed);
  },
};
    //   .setColor("#800000")
    //   .setTitle("Rules")
    //   .setURL("https://github.com/BrunoCostaPrado?tab=repositories")
    //   .setDiscription("This is a embed for the server")
    //   .addFields({ name: "Rule 1", value: "Não seja o Nicolas" })
    //   .setFooter("Leia a regra");
