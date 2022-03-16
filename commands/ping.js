module.exports = {
  name: "ping",
  description: "This is a ping!",
  execute(message, args) {
    message.channel.send("pong!");
  },
};
