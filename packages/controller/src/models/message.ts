import { TextChannel } from "./channels/text";
import { Guild } from "./guild";
import { Member } from "./member";
import { User } from "./user";

interface Emoji {
    id?: any;
    name: string;
}

interface Reaction {
    count: number;
    me: boolean;
    emoji: Emoji;
}

interface MentionChannel {
    id: string;
    guild_id: string;
    name: string;
    type: number;
}

interface MessageReference {
    channel_id: string;
    guild_id: string;
    message_id: string;
}

interface Options {
    reactions?: Reaction[];
    attachments?: any[];
    tts?: boolean;
    embeds?: any[];
    timestamp?: Date;
    mention_everyone?: boolean;
    id?: string;
    member?: Member;
    pinned?: boolean;
    edited_timestamp?: any;
    author?: User;
    mention_roles?: any[];
    mention_channels?: MentionChannel[];
    content?: string;
    channel_id?: string;
    mentions?: any[];
    type?: number;
    message_reference?: MessageReference;
    guild: Guild;
    channel: TextChannel;
}

export class Message {
    reactions?: Reaction[];
    attachments?: any[];
    tts?: boolean;
    embeds?: any[];
    timestamp?: Date;
    mention_everyone?: boolean;
    id?: string;
    pinned?: boolean;
    edited_timestamp?: any;
    member?: Member;
    author?: User;
    mention_roles?: any[];
    mention_channels?: MentionChannel[];
    content?: string;
    channel_id?: string;
    mentions?: any[];
    type?: number;
    message_reference?: MessageReference;
    guild: Guild;
    channel: TextChannel;

    constructor(options: Options) {
        this.reactions = options.reactions;
        this.attachments = options.attachments;
        this.tts = options.tts;
        this.embeds = options.embeds;
        this.timestamp = options.timestamp;
        this.mention_channels = options.mention_channels;
        this.id = options.id;
        this.pinned = options.pinned;
        this.edited_timestamp = options.edited_timestamp;
        this.author = options.author;
        this.mention_roles = options.mention_roles;
        this.mention_channels = options.mention_channels;
        this.content = options.content;
        this.channel_id = options.channel_id;
        this.mentions = options.mentions;
        this.type = options.type;
        this.message_reference = options.message_reference;
        this.member = options.member;
        this.guild = options.guild;
        this.channel = options.channel;
    }
}
