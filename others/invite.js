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
    message.react("<:Yeh:827947991922376776>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#c219d8").setTitle(":Invite KurdMusic: ").setDescription("https://discord.com/api/oauth2/authorize?client_id=832747178295951401&permissions=2188654912&scope=bot")
    .setFooter("And enjoy listening to music!", "https://images-ext-1.discordapp.net/external/LmYeWPo2t8r2yUP22ZKyGvLzLBGgLILmYF9mqdGRSD0/https/cdn.discordapp.com/emojis/833038156797575199.png"));

  }
}
