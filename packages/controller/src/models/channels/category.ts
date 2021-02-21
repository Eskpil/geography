import { BaseChannel } from "./BaseChannel";

interface Options {
    permission_overwrites: any[];
    name: string;
    parent_id?: any;
    nsfw: boolean;
    position: number;
    guild_id: string;
    type: number;
    id: string;
}

export class CategoryChannel extends BaseChannel {
    id: string;
    name: string;
    type: number;
    guild_id: string;
    position: number;
    nsfw: boolean;
    parent_id?: any;
    permission_overwrites: any[];

    constructor(options: Options) {
        super({ ...options });
        this.id = options.id;
        this.name = options.name;
        this.type = options.type;
        this.guild_id = options.guild_id;
        this.position = options.position;
        this.nsfw = options.nsfw;
        this.parent_id = options.parent_id;
        this.permission_overwrites = options.permission_overwrites;
    }
}
