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
    message.reply(new MessageEmbed().setColor("BLUE").setTitle("invite fic music").setDescription(" [invite](https://discord.com/api/oauth2/authorize?client_id=802995353209012234&permissions=2192964928&scope=bot) ")
    .setFooter("And enjoy listening to music!", "https://media.discordapp.net/attachments/837136891224522783/848261857919107112/image0.png"));

  }
}
