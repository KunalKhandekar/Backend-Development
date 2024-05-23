const { REST, Routes } =  require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTI0MzI5MzMyMjYzODkyMTc4OQ.GMzBX0.rNR53Ej9jegRft4aRnBa7_gKAdfsIF5L3AxOH4');

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1243293322638921789'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();


