import { BaseChannel } from "./BaseChannel";

interface Options {
    id: string;
    guild_id: string;
    name: string;
    type: number;
    nsfw: boolean;
    position: number;
    permission_overwrites: any[];
    bitrate: number;
    user_limit: number;
    parent_id?: any;
}

export class VoiceChannel extends BaseChannel {
    id: string;
    guild_id: string;
    name: string;
    type: number;
    nsfw: boolean;
    position: number;
    permission_overwrites: any[];
    bitrate: number;
    user_limit: number;
    parent_id?: any;

    constructor(options: Options) {
        super({ ...options });
        this.id = options.id;
        this.guild_id = options.guild_id;
        this.name = options.name;
        this.type = options.type;
        this.nsfw = options.nsfw;
        this.position = options.position;
        this.permission_overwrites = options.permission_overwrites;
        this.bitrate = options.bitrate;
        this.user_limit = options.user_limit;
        this.parent_id = options.parent_id;
    }
}
