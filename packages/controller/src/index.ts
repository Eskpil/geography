import { Client } from "./client/client";
import { Message } from "./models/message";
const client = new Client();

client.on("ready", (client: Client) => {});
client.on("message", (message: Message) => {
    console.log(message.guild.members);
});

client.connect("NjczMTEwNDc5ODcwMjMwNTM4.XjVQ_A.RF7vGGkT_JZR9YeGb0MyXGKQxZ4");
