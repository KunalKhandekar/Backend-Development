## Day 72

Learning how to create a discord bot:
 - Create an account on discord. X
 - Create a own server. X
 - Enable the developer mode from Setting > Advanced. X
 - Go to discord developer portal and create a app. X
 - create a bot from the bot section. x
 - Give admin Permission. X
 - Go to auth > Url Generator and Tick on Bot and adminstration. X
 - Open link and add bot to your server created. X

 - For interacting with bot, we have to install a library called discord.js
    initialize npm and then => [npm i discord.js] X
 - import client and gatewayintentBits from discord.js X
 - create a new client with intents required. [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds] X
 - allow Message content access from developer protal. X
 - Make token for ur bot. X
 - Login the bot using the token. [client.login(token)]. X
 - write logic for doing task if message is created. X
 - Add one more Intent to read the content. [GatewayIntentsBits.MessageContent] X
 - Write logic for auto reply from user. X
 - Use the script template given in documentation to create commands. X
 - Create custom commands. X
 - Add necessary inputs in it such as token, client ID. X
 - write logic for if InteractionCreate.
 - Explore more further it was just basic to get started.



How to Upload file in Node.js
 - Write a bolier code. [SetUp] X
 - Install Multer [npm i multer] X
 - Add enctype as multipart/form-data as attribute in form. X
 - Create a post route to upload file in server. X
 - using multer customize the file location and name according to you. X
 - we can upload multiple files at time using upload.fields() X
