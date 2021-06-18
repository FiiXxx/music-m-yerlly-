const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("BLUE").setTitle("invite Monty").setDescription(" [invite](https://discord.com/api/oauth2/authorize?client_id=802924076866994186&permissions=7666753&scope=bot)")
    .setFooter("And enjoy listening to music!", "https://media.discordapp.net/attachments/851570699859656754/855210522421231626/image0.gif"));

  }
}
