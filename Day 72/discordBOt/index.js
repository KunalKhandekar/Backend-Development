const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents : [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.login('MTI0MzI5MzMyMjYzODkyMTc4OQ.GMzBX0.rNR53Ej9jegRft4aRnBa7_gKAdfsIF5L3AxOH4');

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('create') || message.content.startsWith('Create')) {
        const prefix = message.content.startsWith('create') ? 'create' : 'Create';
        const url = message.content.split(prefix)[1].trim();
        message.reply({
            content: 'Generating Short URL for ' + url,
        });
    } else {
        message.reply({
            content : 'Hi Sir, Can I help you ?',
        });
    }
    
});

client.on("interactionCreate", (Interaction) => {
    Interaction.reply("Pong!!");
});