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
  } else if (command == "youtube") {
    message.channel.send("https://www.youtube.com/MynameisByf");
  }else if(command=="Father","Dad","Creator","father","dad","creater"){
    message.channel.send("I was create by Bruno Costa Prado, you can find his repo herer: https://github.com/BrunoCostaPrado?tab=repositories")
  }
});

<<<<<<< HEAD
client.login("Auth_Token");
=======
client.login("Auth_Token");
>>>>>>> 0b7e54c5ead84f3e37cc84a6a8a783e964360f1b
