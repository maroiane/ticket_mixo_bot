const Discord = require('discord.js');
const client = new Discord.Client();
var active = false
  var AsciiTable = require('ascii-data-table').default
var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
const fs = require('fs');

client.on('ready', () => {


console.log('bot is ready');
client.user.setGame(` |*help|*invite`,"http://twitch.tv/S-F")






  console.log('-1--2--3---4--');
  console.log('-Bot Is Online-')
  console.log('-1--2---3---4--')
  console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
   console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log(`--بسم الله و الله اكبر--`);
});


  
  client.on('message', message => {
  if (message.content.startsWith("*avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});

 client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('*ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
client.on("message", (message) => {
if (message.content.startsWith("*ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage(':white_check_mark: ')

}
});


client.on("message", (message) => {
if (message.content.startsWith("*cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage(':white_check_mark: ')
    
}
});

  client.on('message', message => {

if (message.content.startsWith("-add.r")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('? **You do not have permissions**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "RANDOM", 
                permissions : [1]
            }).then(function(role){
                message.addRole(role)

            })

}
});
client.on('message', message => {
    if (message.content.startsWith("*bot-in")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Mixo Bot`` ')
            
            .addField('``Ping``:ping_pong: ' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``Name``' , `[ ${client.user.tag} ]` , true)
            .addField(':id: ' , `[ ${client.user.id} ]` , true)
            .addField('``Prefix``' , `[ * ]` , true)
            .addField('``Language``' , `[ Java Script ]` , true)
            .addField('``Devlopper``' , ` [ [TGM]__ Mixo__[TGM]#1058] ` , true)
    })
}
});



client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`in ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)
    .setFooter(message.guild.name)

   message.channel.send({embed});
      }
  });
  
 
client.on("message", (message) => {
    if (message.content.startsWith("*ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning:ليست لديك صلاحية ');
        var member= message.mentions.members.first();
         if (message.mentions.users.size < 1) return message.reply("**?المرجوا اختيار الشخص الذي تريد تبنيده **");
        member.ban().then((member) => {
            message.channel.send(member.displayName + " bye :wave: ");
        }).catch(() => {
            message.channel.send(":interrobang: Error 404 -_-");
            //يجب وضع رول البوت الفوق
        });
    }
});
client.on('message' , message => {
var prefix = "*"

if (message.author.bot) return;
if (message.content.startsWith("*contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.reply('**أكتب رسالتك !**').then(msg => msg.delete(10000))
        message.delete();



client.users.get("330119000287608832").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ●الرسالة: " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Mixo")
                                                

message.channel.send(embed);


}
    
});



client.on('message', message => {
  if (message.content === '*enable') {
    message.channel.send('enabling...');
    active = true
    message.channel.send('AutoRole successfully enabled!')
  }
});

client.on('message', message => {
  if (message.content === '*disable') {
    message.channel.send('disabling...');
    active = false
    message.channel.send('AutoRole successfully disabled!')
  }
});

client.on('message', message => {
  if (message.content === '*check') {
    switch (active) {
      case true:
        message.channel.send('Addon currently ACTIVE');
        break;
      case false:
        message.channel.send('addon currently DEACTIVE');
        break;
                  }
}});

client.on('guildMemberAdd', member => {
  if(active === true) {
    var role = member.guild.roles.find("name", "Family");
    member.addRole(role).catch(console.error);
  }
})
client.on('message', message => {
    if(message.content == '*bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('`#` <@'+ user.id + '> `is banned`');
            });
        });
    }
});
 client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content ==="*member") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:robot:  bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
  client.on('message', message => {
       if(message.content.startsWith(`*support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("click here")
           .setURL('https://discord.gg/MN5tHu')
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });


  client.on('message', message => {
       if(message.content.startsWith(`*invite`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("❤click here❤")
           .setURL(' https://discordapp.com/oauth2/authorize?client_id=488059990708584479&permissions=8&scope=bot')
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });
  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});
  
client.on("message", message => {
    var prefix = "-";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#f0000") 
      .setDescription(`
prefix = "*"

*
=>[Admin Commands]=>


=> *ban <mention > => ban member from server**

=*clear => clear chat 

=> *rainbow => start rainbow 

=> *vkick => كيك لعضو من روم صوتي 

=> *ct <name> => create channel

=> *cv <name> create voice channel

 => *bc <message> => message all members in server

 =>*add.r => to add role
 
 => *hidechanel => to hidechannel
**---------------------------------------------------------------**
=>[General Commands]=>
 
=>**ser-info=> معلوماة السيرفر 

=> *bot_in => معلوماة البوت

=> *member => معلومات الاعضاء

=> *ser-av => صورة السيرفر 

=> *avatar => صورة حسابك

=> *bcowner=> ارسال رسالة لصاحب السيرفر 

=> *credits => رصيدك و اعطاء رصيد 

=| *daily => جمع رصيد كل 24ساعة 

=> *ping =>البينق الخاص بك

=> *bot => معلوماة البوت 

=> *embed <message> => 

=> *invites  => كم شخص جلبته للسيرفر 

=> *roles => رتب السيرفر 

=> *contact <message> => لأرسال رسالة لصاحب البوت

=> *invite  => رابط البوت  

=> *support => سيرفر سيبورت 
      `)
      .setFooter('❤Bot devlopped By Mixo❤ ')
   message.channel.sendEmbed(embed)
    
   }
   }); 

  client.on('message', message => {
     if (message.content === ("*ser-info")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});
  client.on('message', message => {

    if (message.content === "*count") {

    let embed = new Discord.RichEmbed()

.addField('**Count**: ' , message.guild.memberCount)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});
client.on('message', message => {

if (message.content.startsWith("*add.r")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('? **You do not have permissions**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "RANDOM", 
                permissions : [1]
            }).then(function(role){
                message.addRole(role)

            })

}
});

client.on('message', message =>{

    if(message.content == "*roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith( "*vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اختيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel("AgentX VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});
  client.on('message', ReBeeL => {
  var prefix = "*";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "bcowner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** *bcowner <message> **")
                return;
                  }      
                   var rebel = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${ReBeeL.guild.name}
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );
  

  client.on("guildCreate", guild => {
client.channels.get("494546753631289346").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});

client.on("guildDelete", guild => {
client.channels.get("494546753631289346").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});
  

  client.on('guildCreate', guild => {
client.channels.get("494546753631289346").send(`:white_check_mark: **${client.user.tag} دخل سيرفر :arrow_lower_left:
Server name: __${guild.name}__
----------------------------------------------------------
Server owner: __${guild.owner}__
----------------------------------------------------------
Server id: __${guild.id}__ 
-----------------------------------------------------------
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("494546753631289346").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر:airplane: 
Server name: __${guild.name}__
----------------------------------------------------------
Server owner: __${guild.owner}__
----------------------------------------------------------
Server id: __${guild.id}__
----------------------------------------------------------
Server Count: __${guild.memberCount}__**`)
});
  
  client.on('message', message => {
if(message.content.startsWith("*slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
    if(message.content.toLowerCase().startsWith( "*uptime")) {
      let upTime = process.uptime();
  
      let days = Math.floor(upTime / 86400);
      upTime %= 86400;
  
      let hrs = Math.floor(upTime / 3600);
      upTime %= 3600;
  
      let min = Math.floor(upTime / 60);
      let sec = Math.floor(upTime % 60);
  
      message.channel.send(`\`${days} days, ${hrs} hrs, ${min} min, ${sec} sec\``);
    }
});
  client.on('message', message => {
     if (message.content === ("*bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

  client.on('message', message => {
   if(message.content.startsWith("*in")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
client.on('message', message =>{
  let args = message.content.split(' ');
  let prefix = '.';
if(args[0] === `*emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**أدخل الايموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});
  client.on('message', message => {
if(message.content ===('*discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
  let sent = 0
    let count = 1;
          

client.users.filter(u => u.discriminator == message.author.discriminator).forEach(u => {
    if(sent > 4){
        return
    }
    sent = sent + 1
      message.channel.send(`

               ** ${count}➥ ${u.tag}**

      `)
      count++;
})
}
});
  
client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('*bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(' ').slice(1).join(' ');
  let copy = "Mixo Bot";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  
  message.guild.members.forEach(m => {
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Broadcast')
  .addField('Server', message.guild.name)
  .addField('Sender', message.author.username)
  .addField('Message', args)
  .setThumbnail(message.author.avatarURL)
  .setFooter(copy, client.user.avatarURL);
  m.send({ embed:bc})
  msg.delete();
  })
  })
  
  };
  });
  

client.on('message', message => {
     if (message.content === "*serversbot") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**سيرفرات يلي البوت موجود فيها: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {
  if(message.content.startsWith("*mnbcall")) {
          let i = client.users.size;
    if(message.author.id !== '330119000287608832') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====ولكم منور السيرفر اتمنا لك الاستمتاع====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    let channel = member.guild.channels.find('name', 'welcome');
    
});
 const bannedwords = [
    " زق",
    "Fuck you ",
    "حمار",
    "كلب",
    "خرا",
    "قخبة",
    "نيك",
    "qahba",
   "zbi",
    "zab",
    "khra",
     "zebi",
    "zoubi",
    "Mok"
  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(50000)});;
  };
});

 
client.on('message', message=> {
   if (message.author.bot) return;
   if (message.isMentioned(client.user))
   {
    message.reply("للمساعدة ***help**");
    }
    
    
});
client.on('message', message => {
  if (message.content.startsWith("///readyserver")) {

   message.guild.createRole({
name: 'King',
color: 'RANDOM',
position: (1),
permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
  name: 'Prince',
  color: 'RANDOM',
  position: (2),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
      'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
       'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({
  name: 'Commander',
  color: 'RANDOM',
   position: (3),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({
  name: 'Admin',
  color: 'RANDOM',
  postion: (4),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Vip',
  color: 'RANDOM',
  postion: (5),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Active',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})


message.channel.send('**Roles Was Succsesfluy Created**')
.catch(console.error);
  }
});
client.on('message', message => {
  if (message.content.startsWith("***readyserver")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Dont Have ``MANAGE_CHANNELS`` **Premission**`);
   message.guild.createChannel('rules', 'text')
   message.guild.createChannel('welcome', 'text')
   message.guild.createChannel('chat', 'text')
   message.guild.createChannel('giveaway', 'text')
   message.guild.createChannel('bot_comande', 'text')
      message.guild.createChannel('Annonce', 'text')

 
 
   
 
message.channel.sendMessage('**Channels Was Succsesfluy Created**')
}
});
 
client.on('message', message => {
  if (message.content.startsWith("*readyserver")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice')
message.guild.createChannel('Salon 1 ◥', 'voice')
message.guild.createChannel('Salon 2◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice')
message.guild.createChannel('Salon 3 ◥', 'voice')
message.guild.createChannel('Salon 4 ◥', 'voice')

.catch(console.error);
  }
});
client.on('message', message => {
  if (message.content.startsWith("*addroomsgame")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice')
message.guild.createChannel('╔╣PUBG Mobile╠╗', 'voice')
message.guild.createChannel('╔╣Five M╠╗', 'voice')
message.guild.createChannel('╔╣PUBG Mobile╠╗', 'voice')
message.guild.createChannel('╔╣PUBG╠╗', 'voice')
message.guild.createChannel('╔╣MTA_SA╠╗', 'voice')
message.guild.createChannel('╔╣Creative D╠╗', 'voice')



.catch(console.error);
  }
});

client.on('message', message => {
  if(message.content.startsWith("*setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Room : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
//PRV

client.on('message', message => {
   if (message.content === "*المغرب") {
var embed20 = new Discord.RichEmbed ()
.setTitle ("🇲🇦 🕌 الاذان في المغرب 🕌����🇦")
.setImage ( "https://cdn.discordapp.com/attachments/499383925924429837/502494027375968266/unknown.png")
message.channel.sendEmbed (embed20) .then (A => {
A.react ('🇲🇦'). ثم (() => A.react ('🇲🇦'))
})  
}   
 });  /// by Mixo
client.on('message', message => {

   if (message.content === "*الجزائر") {
var embed20 = new Discord.RichEmbed ()
.setTitle ("🇩🇿 🕌 الاذان في الجزائر 🕌 🇩🇿")
.setImage ( "https://cdn.discordapp.com/attachments/502487711249203240/503300078295973900/unknown.png")
message.channel.sendEmbed (embed20) .then (D => {
D.react ('🇩🇿'). ثم (() => D.react ('🇩🇿'))
})  
}
 });
 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hi') {
              message.channel.send('**السلام عليكم **');
              message.channel.sendFile("./photoshop.PNG");
            }
});



;
client.on ("guildMemberRemove", member => {
   
}) 

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})
client.on('message', message => {

    if (message.content === "*hidechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: false

           }).then(() => {
               message.reply("تم اغلاق الشات  ✅ ")
           });
             }
//iiBlueGamer295YT, ѵK#9431
if (message.content === "*channel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: true

           }).then(() => {
               message.reply("تم اضهار الشات ✅")
           });
             }



});
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Rainbow");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "User");
   member.addRole (role);
  
})


 
client.on("message", message => {
  if(message.author.bot) return;
var prefix = "*"
if(message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "start") {
var title = args[0].split('-').join(" ");
if(args[2]) {
  message.channel.send(` \`\`\`MD
  # Title format <word>-<word>-<word>
  < do not use spaces use - insted
   \`\`\``);
}
var time = args[1].split(":");
var sec = time[3];
var min = time[2];
var hou = time[1];
var day = time[0];
 
if((hou * 1) > 24) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < hours must be 24 or less
   \`\`\``);
}
else if((sec * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < minutes must be 60 or less
  \`\`\``);
}
else if((min * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < seconds must be 60 or less
  \`\`\``);
}
else  {
 
var upgradeTime = sec;
upgradeTime = upgradeTime * 2 / 2 + (min * 60);
upgradeTime = upgradeTime * 2 / 2 + (hou * 60 * 60);
upgradeTime = upgradeTime * 2 / 2 + (day * 24 * 60 * 60);
var seconds = upgradeTime;
var duration = (upgradeTime * 1000)
  if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **s You Dont Have Premission**');
  if(!args) return message.channel.send(`**Use : #start  <Presentse> <Time>**`);
  if(!title) return message.channel.send(`**Use : **\`#start ${args[0]} Minutes\`** <Presentse>**`);
  if(!isNaN(args[1])) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
        let giveEmbed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setDescription(`**${title}** \nReact Whit 🎁 To Enter! \n**Ends  after   ${day} day  ${hou} hour  ${min} minute ${sec} second**`)
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
          message.delete();
          m.react('🎁');
              var giveAwayCut = setInterval(function() {
                  var days        = Math.floor(seconds/24/60/60);
                  var hoursLeft   = Math.floor((seconds) - (days*86400));
                  var hours       = Math.floor(hoursLeft/3600);
                  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
                  var minutes     = Math.floor(minutesLeft/60);
                  var remainingSeconds = seconds % 60;
                  if (seconds != 0) {
                    seconds--;
                  }
              let updateGiveEmbed = new Discord.RichEmbed()
              .setAuthor(message.guild.name, message.guild.iconURL)
              .setDescription(`**${title}** \nReact With 🎁 To Enter! \n**Ends  after   ${days} day  ${hours} hour  ${minutes} minute ${remainingSeconds} second**`)
              .setFooter(message.author.username, message.author.avatarURL);
              m.edit(updateGiveEmbed)
            }, 1000);
         setTimeout(() => {
          clearInterval(giveAwayCut)
           let users = m.reactions.get("🎁").users;
           let list = users.array().filter(u => u.id !== client.user.id);
           let gFilter = list[Math.floor(Math.random() * list.length) + 0]
           let endEmbed = new Discord.RichEmbed()
           endEmbed.setAuthor(message.author.username, message.author.avatarURL)
           endEmbed.setTitle(title)
           endEmbed.addField('Giveaway End !🎁',`Winners : ${gFilter}`)
         m.edit('** 🎁 GIVEAWAY ENDED 🎁**' , {embed: endEmbed});
         },duration);
       });
  }
}
});


const mms = require('ms');

client.on('ready',async () => {
  let GUILDID = '488302899600818187'; // اي دي السيرفر
  let CHANNELID = '488308130090975235'; // اي دي الروم
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);
    }
  }
});
client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith('*rainbow')) {
            if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning:ليست لديك صلاحية ');

      let role = message.guild.roles.find('name', 'Rainbow')
    if(role) return message.channel.send("This Step Already Completed !")
  //start of create role 
  if(!role){
  var  rainbow =  message.guild.createRole({
   name: "Rainbow",//the role will create name
   color: "RANDOM",//the default color
   permissions:[]//the permissions
 //end of create role
})

}
message.channel.send('**تم انشاء الرتبة بنجاح **')//if the step completed
}})

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
})
client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith('*clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  }); //Julian
 var prefix ="*"
client.on("message", message => { 
      if(message.content == `${prefix}support`) { 
        const ListEmbed = new Discord.RichEmbed() 
        .setTitle('Users with the support role:') 
        .setDescription(message.guild.roles.get('User').members.map(m=>m.user.tag).join('\n')); 
        message.channel.send(ListEmbed); 
      }
   });
var prefix = "*"
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + `top-servers`)) {

        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
        message.channel.send(`**⇏ Top 25 Servers: **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .\n11. **${top[10].name}**: ${top[10].memberCount} .\n12. **${top[11].name}**: ${top[11].memberCount} .\n13. **${top[12].name}**: ${top[12].memberCount} .\n14. **${top[13].name}**: ${top[13].memberCount} .\n15. **${top[14].name}**: ${top[14].memberCount} .\n16. **${top[15].name}**: ${top[15].memberCount} .\n17. **${top[16].name}**: ${top[16].memberCount} .\n18. **${top[17].name}**: ${top[17].memberCount} .\n19. **${top[18].name}**: ${top[18].memberCount} .\n20. **${top[19].name}**: ${top[19].memberCount} .\n21. **${top[20].name}**: ${top[20].memberCount} .\n22. **${top[21].name}**: ${top[21].memberCount} .\n23. **${top[22].name}**: ${top[22].memberCount} .\n24. **${top[23].name}**: ${top[23].memberCount} .\n25. **${top[24].name}**: ${top[24].memberCount} .`)
    }
});
client.on('message', message => {
   if (message.content === "#croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username}ليست عندك رتبة تعديل الرتب **`);
 
                    message.guild.createRole({ name: ".", color: "#f000", permissions: [] })
                     message.guild.createRole({ name: "Owner", color: "RESET", permissions: [] })
                    message.guild.createRole({ name: "Admin", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Moderateur", color: "#اللون", permissions: [] })
                    message.guild.createRole({ name: "Youtuber", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Streamer", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Active", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "User", color: "#اللون", permissions: [] })
       
 
message.channel.sendMessage('**انتظر قليلا حتى انتهي من صناعة الرتب! **')
}
});///
var prefix = "*"
let vipKeys = JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));
client.on("message", msg=>{
let id = "330119000287608832"; // ايديك
let role = "VIP Rank"; // اسم رتبة الفيب
let Price = 5000; // السعر
let Price2 = Math.floor(Price-(Price*(1/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
let embedvip = new Discord.RichEmbed()
.setColor("#42f4f4")
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle("**اختر الطريقة المناسبة لك**")
.addField("ل شراء الفي اي بي لنفسك","🔱",true )
.addField("ل شراء الفي اي بي ك هدية","🎁",true)
.setTimestamp()
.setFooter(client.user.username,client.user.displayAvatarURL);
msg.channel.send(embedvip).then(msgs2 =>{
msgs2.react("🔱").then(()=>{
  msgs2.react("🎁").then(()=>{
    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;
    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;
    const mec = msgs2.createReactionCollector(me, {time: 120000});
    const giftc = msgs2.createReactionCollector(gift, {time: 120000});
mec.on("collect", r=>{  
msgs2.delete()
if(msg.member.roles.find(r=>r.name == role)) return msg.reply("انت تمتلك الرتبة مسبقًا");
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
msg.reply(`تم اعطائك رتبة \`${role}\``);
msg.member.addRole(roleW);
}).catch(e => {});
})})
giftc.on("collect", r=>{
  msgs2.delete()
  let roleW = msg.guild.roles.find(r=>r.name == role);
  if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  msgs.delete()
  genKey(msg,roleW);
  }).catch(e => {});
  })
})
})})})
///
}
if(cmd === `${prefix}used`){
  let args = msg.content.split(" ").slice(1)[0];
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
  let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(vipKeys[args]){
    let hav = msg.member.roles.find(`name`, vipKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(vipKeys[args]);
    delete vipKeys[args]
    save()
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
}
});
 
function genKey(msg,role){
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  vipKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",vipKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
  save()
}
 
function save(){
  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {
    if (err) console.log(err)
  });
 
}
var moment = require('moment');

let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
 
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: `${message.author}`,
    rep: 1,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 1,
    points: 1,
    credits: 150,
  };
 
 
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
}); //code By LMERYOUL
 
client.on('message', message => {
 
    if(message.content.startsWith('*rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 //code By LMERYOUL
client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith('*credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };//code By LMERYOUL
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}//code By LMERYOUL
 
if(message.content.startsWith("*daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }

 
 let cont = message.content.slice().split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith('*credits ')) {
          if (!args[0]) {
            message.channel.send(`**Usage: *trans amount @someone**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: *rans amount @someone**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: *trans amount @someone**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
 
      });//code By LMERYOUL
 
      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };//code By LMERYOUL
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })

client.login("botconfig.token");
