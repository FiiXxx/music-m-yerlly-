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
    message.react("<:VeryBot:832234492872884245>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#c219d8").setTitle(":Invite KurdMusic: ").setDescription("https://discord.com/api/oauth2/authorize?client_id=832747178295951401&permissions=2188654912&scope=bot")
    .setFooter("And enjoy listening to music!", "https://cdn.discordapp.com/avatars/769642999227351070/f1b78891507308fb76c0a66b56f4bcd6.webp?size=512"));

  }
}
