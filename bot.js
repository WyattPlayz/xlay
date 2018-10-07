const Discord = require('discord.js')
const client = new Discord.Client()


// Required For Bot To Bootup
client.on('ready', () => {
  console.log('Bot Ready!');
  client.user.setPresence({ game: { name: "For Commands!" }, type: "WATCHING" });
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.channel.type == 'dm' || msg.channel.type == 'group') {
   msg.reply('Direct Messages or Group Messages are not supported!');
    return;
  }
});



// Login to the bot using the bot token in the .env file
client.login(process.env.BT);