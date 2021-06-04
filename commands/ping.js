const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'ping',
        description: 'Shows discord bot latency.',
        aliases: ["pong"],
        usage: '',
        permissions: ["SEND_MESSAGES"],
    },
    async run(client, message, args){
        message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
              const embed = new MessageEmbed()
                .setAuthor(`${client.user.username}'s Ping`, client.user.displayAvatarURL())
                .setColor("BLUE")
                .setDescription(`:robot: \`${ping}ms\`\n\n💓 \`${Math.round(client.ws.ping)}ms\``)
                .setTimestamp()
          message.channel.send(embed)
          m.delete()
      });
    }
}

