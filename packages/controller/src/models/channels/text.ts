import { Embed } from "../embed";
import { BaseChannel } from "./BaseChannel";

interface Options {
    id: string;
    guild_id: string;
    name: string;
    type: number;
    position: number;
    permission_overwrites: any[];
    rate_limit_per_user: number;
    nsfw: boolean;
    topic: string;
    last_message_id: string;
    parent_id: string;
}

export class TextChannel extends BaseChannel {
    id: string;
    guild_id: string;
    name: string;
    type: number;
    position: number;
    permission_overwrites: any[];
    rate_limit_per_user: number;
    nsfw: boolean;
    topic: string;
    last_message_id: string;
    parent_id: string;

    constructor(options: Options) {
        super({ ...options });

        this.id = options.id;
        this.guild_id = options.guild_id;
        this.name = options.name;
        this.type = options.type;
        this.position = options.position;
        this.permission_overwrites = options.permission_overwrites;
        this.nsfw = options.nsfw;
        this.topic = options.topic;
        this.last_message_id = options.last_message_id;
        this.parent_id = options.parent_id;
    }

    async send(content: string | Embed) {
        console.log(content);
    }
}
