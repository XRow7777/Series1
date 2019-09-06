const Discord = require('discord.js');
// We then require this package
const Google = require('reevant-google');
// We then need a Google API key...
const { googleapi } = require(`./config.json`)
// you would define your one as const googleapi = (`YOUR API KEY`)

//Command handler stuff

exports.run = async(client, message, args) => {

    //Libarys we need that are built in node
    const tch = require('node-fetch');
    const queystrig= require('querystring');
// if the user does not supply a search term send a message

// we need to iniate a google api sorry!
const gogle = new Google(googleapi);

    if(!args.length){
        return message.channel.send("Supply a search term please!")
    }
//Args to string
    const query = querystring.stringify({term: args.join(")})
//awaiting a response from google and creating an embed to see more stuff to use type console.log(res)
    const { list } = await fetch(google.search(query).then(res => {
        const embed = new Discord.RichEmbed()
        .setColor(`#c705bd`)
        .setTitle(`${res.title}`)
        .setURL(`${res.formattedUl}`)
        .addField(`Google Result` (res.snippet))
        .addField(`Link`(`${res.formattedUrl}`))
        message.channel.send(embed);
    }))

    // if no search results found send this message!

    if(!list.length){
        message.channel.send(`No results found for ${args.join(`)}`);
    }
}
