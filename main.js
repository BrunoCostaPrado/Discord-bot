const Discord = require("discord.js");
const { Client, Intents, Collection } = require("discord.js");
const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
// const client = new Client({
//   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
// });

const prefix = "--";
const fs = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Funciona");
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split("/ + /");
  const command = args.shift().toLocaleLowerCase();

  if (command === "ping") {
    // message.channel.send("pong!");
    client.commands.get("ping").execute(message, args);
  } else if (command == "youtube") {
    client.commands.get("youtube").execute(message, args);
  } else if (command == "command") {
    client.commands.get("command").execute(message, args, Discord);
  } else if (
    (command == "Father", "Dad", "Creator", "father", "dad", "creater", "git")
  ) {
    message.channel.send(
      "I was create by Bruno Costa Prado, you can find his repo herer: https://github.com/BrunoCostaPrado?tab=repositories"
      // client.commands.get("git").execute(message, args)
    );
    // } else if (command === "play") {
    //   client.commands.get("play").execute(message, args);
  } else if (command === "leave") {
    client.commands.get("leave").execute(message, args);
  }
});

client.login("TOKEN");
