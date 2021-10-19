requie('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('Ready!',() => {
 console.log(`Logged in as {$client.user.tag}!`);
});

client.login(process.env.TOKEN);
