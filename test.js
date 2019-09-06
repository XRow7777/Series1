//So we are going to make a command handler
/* if you have setup a bot using case / switch statements || if & else this is a good way to improve your workspace & add lots of extra stuff!
*/

//first we need to require all our libaries

const Discord = require('discord.js');
const client = new Discord.Client();
const token = (`Your Discord bot token`)

// now what we have just done is create our bot instance and required the discord.js libary to work with

//Command Handler

client.on("message", async message => {
    //When bot detects a message
    if(message.author.bot) return // if it is us sending the message return
    if(message.channel.type === `dm`) return;
    
    let prefix = ("/") // our prefix

    let msg = message.content.toLowerCase(); //converts every message to lower case

    let sender = message.author;
    
    let args = message.content.slice(prefix.length).trim().split(" ") //takes our prefix and takes it away from the message so we are left with whats after the message for example /google api we would be left with api

    let cmd = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${cmd.js}`) //Goes to our commands file and runs the JS file

        commandFile.run(client, message, args); //Here we run the file

    }catch(e){
        console.log(e.message) // if there is an error we get the error message
    }
})


//everytime we make a command now it should look like this

exports.run = async(client, message,args) =>{
    //Command
}

//for example