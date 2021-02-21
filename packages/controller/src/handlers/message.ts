import { Client } from "../client/client";
import { Message } from "../models/message";
import BaseEvent from "../utils/BaseEvent";
export default class MessageEvent extends BaseEvent {
    constructor() {
        super("message_create");
    }
    async run(client: Client, payload: any) {
        const guild = client.guilds.get(payload.guild_id);
        const member = guild?.members.get(payload.author.id);
        const author = client.users.get(payload.author.id);
        const channel = guild?.channels.get(payload.channel_id);

        const message = new Message({
            ...payload,
            guild,
            member,
            author,
            channel,
        });

        client.messages.set(message.id!, message);
        client.emit("message", message);
    }
}
