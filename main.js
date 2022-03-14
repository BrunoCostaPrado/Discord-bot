const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
// const client = new Discord.Client();
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = "-";

client.once("ready", () => {
  console.log("Funciona");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split("/ + /");
  const command = args.shift().toLocaleLowerCase();

  if (command === "ping") {
    message.channel.send("pong!");
  }
});

client.login("OTUyNDQ0NjM5MDc4NjU4MDY5.Yi2HMQ.9vTud0bQ33MOBaxXt6pjHH4Hj_I");
