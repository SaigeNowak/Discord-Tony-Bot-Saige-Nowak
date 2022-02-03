const path = require('path')


module.exports = {
    name:'tonytime',
    discription:"this will tell you its time to tony",
    
  async execute(message){
    const  voiceChannel = message.member.voice.channel;
    if(!voiceChannel){return message.channel.send('you need to be in a channel to use this command');
    }

    voiceChannel.join().then((connection)=>{
      connection.play(path.join(__dirname, 'tonytime1.mp3'))
      .on('finish', ()=>{
        voiceChannel.leave();
    })

    })

  }

}