
module.exports = {
    name:'flip',
    discription:"this will tell you its time to tony",
    execute(message, args, Discord){
      
        
            function doRandHT() {
        var rand = ['HEADS!','TAILS!'];

        return rand[Math.floor(Math.random()*rand.length)];


        }

            

            if(doRandHT()==='HEADS!'){
                const embed = new Discord.MessageEmbed()
                            
                                        
                    .setTitle('Heads!')

                    .setImage('https://www.vhv.rs/dpng/d/421-4213210_quarter-coin-clipart-hd-png-download.png')

                        message.channel.send({ embed });

            }else{
                const embed = new Discord.MessageEmbed()
                    .setTitle('Tails!')  

                    .setImage('https://media.istockphoto.com/vectors/one-us-quarter-coin-depicting-the-american-eagle-vector-id517076027?s=612x612')

                        message.channel.send({ embed });
            

                    } 
             
                
                        

        
        
        
       // const embed = {
       // "title": `It Is..`,
       // "discription":doRandHT()
       // "color": 1999,
       // };


        

    }
    
    
}