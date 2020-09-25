"mkdir discord-bot"
"cd discord-bot"

Criar config.json
Editar config.json

{
    "BOT_TOKEN": "SEU TOKEN DO BOT"
}
Salvar e fechar config.json

Iniciar NPM

"npm init"

Instalar discord.js

Criar index.js (Comandos do BOT)

PREDEFINIÇÃO

const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "PREFIXO";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! a latência dessa mensagem foi de ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`A soma de todos os argumentos mencionados são: ${sum}!`);
  }
});

client.login(config.BOT_TOKEN);
