const Discord = require ('discord.js');

const Client = new Discord.Client();

const prefix = '-';

const fs = require ('fs');

Client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
        const command =require(`./commands/${file}`);

        Client.command.set(command.name, command);
    }


Client.once('ready', ()=>{
    console.log('bot is online');
});


Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'tony'){
        Client.command.get('tony').execute(message, args);
    }else if(command === 'play'){
        Client.command.get('play').execute(message, args);
    }else if(command === 'stop'){
        Client.command.get('stop').execute(message, args);
    }else if (command === 'help'){
        Client.command.get('help').execute(message, args, Discord);
    }else if (command === 'tonytime'){
        Client.command.get('tonytime').execute(message, args);
    }else if (command === 'flip'){
        Client.command.get('flip').execute(message, args, Discord);
    }else if (command === 'ohno'){
        Client.command.get('ohno').execute(message, args);
    }
})
/*test bot*/  //Client.login('OTM4MTYzNzU3NzU3MTEyMzQy.YfmTFg.CSScjHra8TYnyt4Yg0R5o2sHneM')

/*Tony Bot*/  Client.login('OTM3NzYxMTcwODM4OTE3MTMw.YfgcJQ.ozAc6YhhNWmRiomPfVU6Vbu-kQM')

