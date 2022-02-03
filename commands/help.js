const { Client } = require("discord.js")



module.exports = {
    name:'help',
    discription:"this will tell you all the commands",
    execute(message, args, Discord){

        
            const embed = new Discord.MessageEmbed()
                .setTitle('Commands')
                .setColor('#799094')
                .addFields(
                    {name:'-help', value:'List of commands'},
                    {name:'-play', value:'Add a link to the end of this command to play song'},
                    {name:'-stop', value:'Stop song that is currently playing / Makes tony leave'},
                    {name:'-tony', value:'@s Tony Takers'},
                    {name:'-tonytime', value:'Plays the tony alarm'},
                    {name:'-flip', value:'Does a coin flip'},
                    {name:'-ohno', value:'Bad things happen'}
                )
                message.channel.send(embed)

        
        

         
        }
    
}