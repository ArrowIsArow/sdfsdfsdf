const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
 

const db = require('quick.db')
const covid = require('novelcovid')
var prefix = "co>"





client.on('message', async message => {
  if (message.content.startsWith(`${prefix}covid`)) {
    const covidStats = await covid.all()
     
     return message.channel.send(new Discord.MessageEmbed()
      .setTitle('covid19 stats')
      .setColor("BLUE")
      .addFields(
        { name: `Cases`, value: covidStats.cases.toLocaleString(), inline: true},
        { name: `Cases Today`, value: covidStats.todayCases.toLocaleString(), inline: true},
        { name: `Deaths`, value: covidStats.deaths.toLocaleString(), inline: true},
        { name: `Deaths today`, value:covidStats.deaths.toLocaleString(), inline: true},
        { name: `Recovered`, value: covidStats.recovered.toLocaleString(), inline: true},
        { name: `Recovered today`, value: covidStats.todayRecovered.toLocaleString(), inline: true},
        { name: `Infected right now`, value: covidStats.active.toLocaleString(), inline: true},
        { name: `Critical condition`, value: covidStats.critical.toLocaleString(), inline: true},
        { name: `Tested`,  value: covidStats.tests.toLocaleString(), inline: true },
      ) 
    )
  }
})
client.login('NzQ0MzEwNjA3NDIyOTQ3NDI4.XzhXRQ.fEXdZbR437lCzp91Z3Zp2Bfc9IU');
