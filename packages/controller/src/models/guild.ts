import { BaseChannel } from "./channels/BaseChannel";
import { Emoji } from "./emoji";
import { Member } from "./member";

interface Options {
    id: string;
    name: string;
    icon: string;
    emojis: Map<string, Emoji>;
    members: Map<string, Member>;
    ownerId: string;
    max_presences: number;
    max_members: number;
    channels: Map<string, BaseChannel>;
    approximate_member_count: number;
    approximate_presence_count: number;
}

export class Guild {
    id: string;
    name: string;
    image: string;
    emojis: Map<string, Emoji>;
    members: Map<string, Member>;
    ownerId: string;
    max_presences: number;
    max_members: number;
    channels: Map<string, BaseChannel>;
    approximate_member_count: number;
    approximate_presence_count: number;

    constructor(options: Options) {
        this.id = options.id;
        this.name = options.name;
        this.image = options.icon;
        this.emojis = options.emojis;
        this.members = options.members;
        this.ownerId = options.ownerId;
        this.max_presences = options.max_presences;
        this.max_members = options.max_members;
        this.channels = options.channels;
        this.approximate_member_count = options.approximate_member_count;
        this.approximate_presence_count = options.approximate_presence_count;
    }
}
