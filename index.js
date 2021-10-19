requie('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', async msg => {
  switch (msg.content) {
    case "ping":
      msg.reply("Pong!");
      break;
    //our meme command below
    case "!meme":
      msg.channel.send("Here's your meme!"); //Replies to user command
      const img = await getMeme(); //fetches an URL from the API
      msg.channel.send(img); //send the image URL
      break;
   }
})

let interval;

client.on('message', async msg => {
  switch (msg.content) {
   //other commands above here...
   case "!annoyme":
      msg.channel.send("You are now annoying xrana!");
       interval = setInterval (function () {
        msg.channel.send("@xrana#9509")
        .catch(console.error); 
      }, 3600000); //every hour
      break;
     case "!stop":
      msg.channel.send("I have stopped eye reminders.");
      clearInterval(interval);
      break;
  }
})

client.login(process.env.TOKEN);
