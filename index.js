const { Client, Collection , MessageEmbed, WebhookClient, GuildMember, Message,  SlashCommandBuilder } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;
client.on("ready", () =>{
    client.user.setActivity("VAGOS", {type:"PLAYING"})
} )


// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(process.env.token);
