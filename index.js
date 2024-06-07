const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
    ActivityType,
} = require("discord.js");
const config = require("./config.json");

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");
const { loadPCommands } = require("./Handlers/PrefixCommandsHandler");

const client = new Client({ intents: [131071] });

client.commands = new Collection();
client.pcommands = new Collection();

client.login(config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
    loadPCommands(client);
});
