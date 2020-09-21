const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

//Bot Status
bot.on(`ready`, () => {
    bot.user.setStatus(`dnd`); //Options: dnd | idle | online | invisible
    bot.user.setActivity(`for new members!`, { type: `WATCHING`}); // Options: WATCHING | LISTENING | PLAYING | CUSTOM_STATUS
    console.log(`${bot.user.username} is online and active.`)
});

//Welcome Message
bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.find(channel => channel.id === "CHANNEL_ID"); //Replace CHANNEL_ID with the ID of your channel where you want the messages sent

    if(!channel) return console.log("Error: Channel ID is invalid")
    let myGuild = bot.guilds.cache.get('GUILD_ID'); //Replace GUILD_ID with your server ID
    let memberCount = myGuild.memberCount;
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#000000') //Make this whatever color you want
        .setTitle(`Example Title`)
        .setDescription(`${member} you are member number **${memberCount}!**\nWelcome To The Server\n<#EXAMPLE_ID>\nLine 4\nLine 5`) //Here you can change what is said when a new member joins your server
        .setThumbnail(member.user.displayAvatarURL({format: `png`, dynamic: true, size: 1024}))
        .setImage('https://quotesblog.net/wp-content/uploads/2018/11/Welcome-Black-Text-White-BG.gif') //You can make this any GIF/Image you want. It must be a valid link
        .setTimestamp() //This adds a timestamp to the message. You can remove it if you want

    channel.send(welcomeEmbed);
});

bot.login(config.token);