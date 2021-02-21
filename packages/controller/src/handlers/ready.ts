/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Client } from "../client/client";
import { GuildsDocument } from "../graphql/graphql";
import { User } from "../models/user";
import BaseEvent from "../utils/BaseEvent";

export default class ReadyEvent extends BaseEvent {
    constructor() {
        super("ready");
    }
    async run(client: Client, payload: any) {
        client.user = new User({
            ...payload.user,
            session: payload.session_id,
        });

        const guilds = await client.register.guilds(payload.guilds);
        return guilds.map(async (g) => {
            const guild = await g;
            if (!guild) return;
            client.guilds.set(guild.id, guild!);
            return client.emit("ready", client);
        });
    }
}
